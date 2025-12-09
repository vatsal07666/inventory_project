// // AddSales.jsx
// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Divider,
//   IconButton,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   Tooltip,
//   Select,
//   MenuItem,
//   InputLabel,
//   FormControl,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import { FaEdit } from "react-icons/fa";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { useGlobal } from "./GlobalContext";

// const AddSales = () => {
//   const { sales, setSales } = useGlobal(); // expect sales to be an array from context

//   // dialog and edit index
//   const [open, setOpen] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   // customer & payment
//   const [formValues, setFormValues] = useState({
//     date: "", customername: "", email: "", phone: "", address: "", status: "", method: "",
//   });

//   // single item inputs (for adding items)
//   const [itemValues, setItemValues] = useState({ product: "", quantity: "", unitprice: "", });

//   // items array for current invoice
//   const [salesItems, setSalesItems] = useState([]);

//   const paymentmethod = ["Cash", "Online", "Credit"];
//   const paymentstatus = ["Paid", "Pending", "Completed"];

//   // sync global sales to localStorage (non-blocking)
//   useEffect(() => {
//     try {
//       localStorage.setItem("sales", JSON.stringify(sales || []));
//     } catch (err) {
//       console.error("localStorage save error:", err);
//     }
//   }, [sales]);

//   // helper: compute totals
//     const computeSubtotal = (items) => {
//     items.reduce((acc, it) => acc + Number(it.quantity || 0) * Number(it.unitprice || 0), 0); }

//     const subtotal = computeSubtotal(salesItems);
//     const taxRate = 0.10; // 10% default; change as required
//     const taxAmount = subtotal * taxRate;
//     const grandTotal = subtotal + taxAmount;

//   // add item to salesItems
//   const handleAddItem = () => {
//     // validation
//     if (!itemValues.product.trim()) {
//       alert("Enter product name");
//       return;
//     }
//     if (!itemValues.quantity || Number(itemValues.quantity) <= 0) {
//       alert("Enter quantity > 0");
//       return;
//     }
//     if (itemValues.unitprice === "" || Number(itemValues.unitprice) < 0) {
//       alert("Enter valid unit price");
//       return;
//     }

//     const newItem = {
//       product: itemValues.product.trim(),
//       quantity: Number(itemValues.quantity),
//       unitprice: Number(itemValues.unitprice),
//       total: Number(itemValues.quantity) * Number(itemValues.unitprice),
//     };

//     setSalesItems((prev) => [...prev, newItem]);
//     setItemValues({ product: "", quantity: "", unitprice: "" });
//   };

//   // remove an item by index
//   const handleRemoveItem = (index) => {
//     setSalesItems((prev) => prev.filter((_, i) => i !== index));
//   };

//   // Save or Update full sale
//   const handleSaveSales = () => {
//     // validations
//     if (salesItems.length === 0) {
//       alert("Add at least one sales item.");
//       return;
//     }
//     if (
//       !formValues.customername.trim() ||
//       !formValues.email.trim() ||
//       !formValues.phone.toString().trim() ||
//       !formValues.address.trim()
//     ) {
//       alert("Please fill customer information.");
//       return;
//     }
//     if (!formValues.date || !formValues.method || !formValues.status) {
//       alert("Please fill payment information.");
//       return;
//     }

//     // build sale object
//     const saleObj = {
//       date: formValues.date,
//       customername: formValues.customername.trim(),
//       email: formValues.email.trim(),
//       phone: formValues.phone.toString().trim(),
//       address: formValues.address.trim(),
//       status: formValues.status,
//       method: formValues.method,
//       items: salesItems,
//       subtotal: Number(subtotal.toFixed(2)),
//       tax: Number(taxAmount.toFixed(2)),
//       grandTotal: Number(grandTotal.toFixed(2)),
//     };

//     if (editIndex !== null && Number.isInteger(editIndex) && editIndex >= 0 && editIndex < (sales || []).length) {
//       const updated = [...sales];
//       updated[editIndex] = saleObj;
//       setSales(updated);
//     } else {
//       setSales([...(sales || []), saleObj]);
//     }

//     // reset
//     setFormValues({
//       date: "",
//       customername: "",
//       email: "",
//       phone: "",
//       address: "",
//       status: "",
//       method: "",
//     });
//     setSalesItems([]);
//     setItemValues({ product: "", quantity: "", unitprice: "" });
//     setEditIndex(null);
//     setOpen(false);
//   };

//   // open dialog for adding new sale
//   const handleOpenNew = () => {
//     setFormValues({
//       date: new Date().toISOString().split("T")[0],
//       customername: "",
//       email: "",
//       phone: "",
//       address: "",
//       status: "",
//       method: "",
//     });
//     setSalesItems([]);
//     setItemValues({ product: "", quantity: "", unitprice: "" });
//     setEditIndex(null);
//     setOpen(true);
//   };

//   // edit existing sale
//   const handleEdit = (index) => {
//     const s = sales[index];
//     if (!s) return;

//     setFormValues({
//       date: s.date || new Date().toISOString().split("T")[0],
//       customername: s.customername || "",
//       email: s.email || "",
//       phone: s.phone || "",
//       address: s.address || "",
//       status: s.status || "",
//       method: s.method || "",
//     });

//     // ensure items mapping to expected structure
//     setSalesItems(Array.isArray(s.items) ? s.items.map(it => ({
//       product: it.product || "",
//       quantity: Number(it.quantity || 0),
//       unitprice: Number(it.unitprice || 0),
//       total: Number((it.quantity || 0) * (it.unitprice || 0)),
//     })) : []);

//     setItemValues({ product: "", quantity: "", unitprice: "" });
//     setEditIndex(index);
//     setOpen(true);
//   };

//   // delete sale
//   const handleDelete = (index) => {
//     if (!window.confirm("Are you sure you want to delete this sale?")) return;
//     setSales((prev) => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <Box>
//       <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
//         <h2>Sales</h2>
//         <Button
//           variant="contained"
//           onClick={handleOpenNew}
//           sx={{ background: "#1e293b", fontSize: "16px", fontWeight: 600, "&:hover": { background: "#0f172a" } }}
//         >
//           <AddIcon /> &nbsp; Add Sales
//         </Button>
//       </Box>

//       {/* Dialog */}
//       <Dialog open={open} onClose={() => setOpen(false)} sx={{ zIndex: 2000 }} maxWidth="lg" fullWidth>
//         <DialogTitle sx={{ fontWeight: 700 }}>{editIndex !== null ? "Edit Sales Details" : "Add Sales Details"}</DialogTitle>
//         <Divider />

//         <DialogContent sx={{ mt: 1, background: "#f5f7fa" }}>
//           {/* Sales Items Paper */}
//           <Paper sx={{ p: 3 }}>
//             <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//               <h3 style={{ margin: 0 }}>Sales Items</h3>
//               <Box>
//                 {/* Add button simply focuses on inputs — use the row below to add */}
//                 <Button variant="contained" onClick={handleAddItem} sx={{ background: "#1e293b", "&:hover": { background: "#0f172a" } }}>
//                   <AddIcon /> &nbsp; Add Item
//                 </Button>
//               </Box>
//             </Box>

//             <Divider sx={{ my: 2 }} />

//             {/* Items Table */}
//             <Table>
//               <TableHead sx={{ "& .MuiTableCell-root": { color: "#000", fontSize: "16px" } }}>
//                 <TableRow>
//                   <TableCell><strong>Product</strong></TableCell>
//                   <TableCell><strong>Quantity</strong></TableCell>
//                   <TableCell><strong>Unit Price</strong></TableCell>
//                   <TableCell><strong>Total</strong></TableCell>
//                   <TableCell><strong>Actions</strong></TableCell>
//                 </TableRow>
//               </TableHead>

//               <TableBody>
//                 {salesItems.length === 0 ? (
//                   <TableRow>
//                     <TableCell colSpan={5} align="center" sx={{ py: 4, color: "#6b7280" }}>
//                       No items. Use the fields below to add items.
//                     </TableCell>
//                   </TableRow>
//                 ) : (
//                   salesItems.map((it, idx) => (
//                     <TableRow key={idx}>
//                       <TableCell>{it.product}</TableCell>
//                       <TableCell>{it.quantity}</TableCell>
//                       <TableCell>₹ {Number(it.unitprice).toFixed(2)}</TableCell>
//                       <TableCell>₹ {Number(it.total).toFixed(2)}</TableCell>
//                       <TableCell>
//                         <Tooltip title="Remove item">
//                           <IconButton onClick={() => handleRemoveItem(idx)} sx={{ color: "#dc2626" }}>
//                             <RiDeleteBin6Line />
//                           </IconButton>
//                         </Tooltip>
//                       </TableCell>
//                     </TableRow>
//                   ))
//                 )}

//                 {/* Input row */}
//                 <TableRow>
//                   <TableCell>
//                     <TextField
//                       placeholder="Product"
//                       value={itemValues.product}
//                       onChange={(e) => setItemValues({ ...itemValues, product: e.target.value })}
//                       size="small"
//                       fullWidth
//                     />
//                   </TableCell>

//                   <TableCell>
//                     <TextField
//                       placeholder="Qty"
//                       value={itemValues.quantity}
//                       onChange={(e) => setItemValues({ ...itemValues, quantity: e.target.value })}
//                       size="small"
//                       type="number"
//                       inputProps={{ min: 0 }}
//                     />
//                   </TableCell>

//                   <TableCell>
//                     <TextField
//                       placeholder="Unit Price"
//                       value={itemValues.unitprice}
//                       onChange={(e) => setItemValues({ ...itemValues, unitprice: e.target.value })}
//                       size="small"
//                       type="number"
//                       inputProps={{ min: 0, step: "0.01" }}
//                     />
//                   </TableCell>

//                   <TableCell>
//                     <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
//                       <strong>
//                         ₹ {((Number(itemValues.quantity || 0) * Number(itemValues.unitprice || 0)) || 0).toFixed(2)}
//                       </strong>
//                     </Box>
//                   </TableCell>

//                   <TableCell>
//                     <Button variant="contained" onClick={handleAddItem} sx={{ background: "#1e293b", "&:hover": { background: "#0f172a" } }}>
//                       Add
//                     </Button>
//                   </TableCell>
//                 </TableRow>

//                 {/* Subtotal row (optional inline) */}
//                 <TableRow>
//                   <TableCell colSpan={3} />
//                   <TableCell sx={{ fontWeight: 700 }}>Subtotal</TableCell>
//                   <TableCell>₹ {subtotal.toFixed(2)}</TableCell>
//                 </TableRow>
//               </TableBody>
//             </Table>
//           </Paper>

//           {/* Separate Totals Box (right area or below depending on layout) */}
//           <Box sx={{ display: "flex", gap: 2, mt: 3, alignItems: "flex-start" }}>
//             <Paper sx={{ p: 3, width: "30%", minWidth: 260 }}>
//               <h3 style={{ marginTop: 0 }}>Totals</h3>

//               <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
//                 <div>Subtotal</div>
//                 <div>₹ {subtotal.toFixed(2)}</div>
//               </Box>

//               <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
//                 <div>Tax ({(taxRate * 100).toFixed(0)}%)</div>
//                 <div>₹ {taxAmount.toFixed(2)}</div>
//               </Box>

//               <Divider sx={{ my: 1 }} />

//               <Box sx={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
//                 <div>Grand Total</div>
//                 <div>₹ {grandTotal.toFixed(2)}</div>
//               </Box>
//             </Paper>

//             {/* Customer & Payment (occupies remaining width) */}
//             <Box sx={{ flex: 1 }}>
//               <Paper sx={{ p: 3 }}>
//                 <h3 style={{ marginTop: 0 }}>Customer Information</h3>
//                 <Divider sx={{ my: 2 }} />

//                 <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
//                   <TextField
//                     label="Customer Name"
//                     value={formValues.customername}
//                     onChange={(e) => setFormValues({ ...formValues, customername: e.target.value })}
//                     fullWidth
//                   />
//                   <TextField
//                     label="Email"
//                     value={formValues.email}
//                     onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
//                     fullWidth
//                   />
//                 </Box>

//                 <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
//                   <TextField
//                     label="Phone"
//                     value={formValues.phone}
//                     onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
//                     fullWidth
//                   />
//                   <TextField
//                     label="Address"
//                     value={formValues.address}
//                     onChange={(e) => setFormValues({ ...formValues, address: e.target.value })}
//                     fullWidth
//                     multiline
//                     rows={2}
//                   />
//                 </Box>

//                 <Divider sx={{ my: 2 }} />

//                 <Box sx={{ display: "flex", gap: 2 }}>
//                   <TextField
//                     label="Date"
//                     type="date"
//                     value={formValues.date}
//                     onChange={(e) => setFormValues({ ...formValues, date: e.target.value })}
//                     InputLabelProps={{ shrink: true }}
//                     sx={{ width: "40%" }}
//                   />

//                   <FormControl sx={{ width: "30%" }}>
//                     <InputLabel id="method-label">Method</InputLabel>
//                     <Select
//                       labelId="method-label"
//                       value={formValues.method}
//                       label="Method"
//                       onChange={(e) => setFormValues({ ...formValues, method: e.target.value })}
//                     >
//                       <MenuItem value=""><em>None</em></MenuItem>
//                       {paymentmethod.map((m) => (
//                         <MenuItem key={m} value={m}>{m}</MenuItem>
//                       ))}
//                     </Select>
//                   </FormControl>

//                   <FormControl sx={{ width: "30%" }}>
//                     <InputLabel id="status-label">Status</InputLabel>
//                     <Select
//                       labelId="status-label"
//                       value={formValues.status}
//                       label="Status"
//                       onChange={(e) => setFormValues({ ...formValues, status: e.target.value })}
//                     >
//                       <MenuItem value=""><em>None</em></MenuItem>
//                       {paymentstatus.map((s) => (
//                         <MenuItem key={s} value={s}>{s}</MenuItem>
//                       ))}
//                     </Select>
//                   </FormControl>
//                 </Box>
//               </Paper>
//             </Box>
//           </Box>
//         </DialogContent>

//         <DialogActions style={{ background: "#f5f7fa" }}>
//           <Button onClick={() => setOpen(false)} sx={{ color: "#1e293b" }}>Cancel</Button>
//           <Button
//             variant="contained"
//             onClick={handleSaveSales}
//             sx={{ background: "#1e293b", "&:hover": { background: "#0f172a" } }}
//           >
//             {editIndex !== null ? "Update" : "Save"}
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <Divider sx={{ my: 3 }} />

//       {/* SALES LIST TABLE */}
//       <h3>Sales List</h3>
//       <Paper sx={{ p: 3, borderRadius: 3 }}>
//         <h3 style={{ marginBottom: 0 }}>Sales ({(sales || []).length})</h3>
//         <p style={{ color: "#6b7280" }}>List of all sales transactions</p>

//         <TableContainer sx={{
//           mt: 2,
//           width: "100%",
//           overflowX: "auto",
//           pb: 1,
//           '&::-webkit-scrollbar': { height: '8px' },
//           "&::-webkit-scrollbar-thumb": { backgroundColor: "#9ca3af", borderRadius: 10 },
//         }}>
//           <Table sx={{ width: "100%", tableLayout: "fixed" }}>
//             <TableHead sx={{
//               background: "#1e293b",
//               "& .MuiTableCell-root": { color: "#fff", fontSize: "16px" }
//             }}>
//               <TableRow>
//                 <TableCell><strong>Invoice #</strong></TableCell>
//                 <TableCell><strong>Customer</strong></TableCell>
//                 <TableCell><strong>Items</strong></TableCell>
//                 <TableCell><strong>Price</strong></TableCell>
//                 <TableCell><strong>Payment In</strong></TableCell>
//                 <TableCell><strong>Payment Status</strong></TableCell>
//                 <TableCell><strong>Date</strong></TableCell>
//                 <TableCell><strong>Actions</strong></TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody sx={{
//               background: "linear-gradient(180deg, #F9F9FB 0%, #f3f3f3ff 100%)",
//               "& .MuiTableCell-root": {
//                 color: "#000000ff", fontSize: "16px",
//                 borderBottom: "1px solid rgba(0, 0, 0, 0.1)", maxWidth: 200,
//                 whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
//               }
//             }}>
//               {(sales || []).length === 0 ? (
//                 <TableRow>
//                   <TableCell colSpan={8} align="center" sx={{ py: 6 }}>
//                     No sales added yet
//                   </TableCell>
//                 </TableRow>
//               ) : (
//                 (sales || []).map((item, index) => (
//                   <TableRow key={index}>
//                     <TableCell>
//                       <strong>INV-{(item.date || "").replaceAll("-", "") || (new Date().toISOString().split("T")[0]).replaceAll("-", "")}-{index + 1}</strong>
//                     </TableCell>

//                     <TableCell>
//                       <b>{item.customername}</b><br />
//                       <small style={{ color: "#6b7280" }}>{item.email}</small>
//                     </TableCell>

//                     <TableCell>
//                       {Array.isArray(item.items) ? item.items.length : 0} item(s)
//                       <br />
//                       <span style={{ color: "#6b7280" }}>{Array.isArray(item.items) ? item.items.map(i => i.product).join(", ") : ""}</span>
//                     </TableCell>

//                     <TableCell>₹ {Number(item.grandTotal || item.total || 0).toFixed(2)}</TableCell>

//                     <TableCell>
//                       <span style={{ background: "#e5e7eb", padding: "4px 10px", borderRadius: "20px", fontSize: "13px" }}>
//                         {item.method}
//                       </span>
//                     </TableCell>

//                     <TableCell>
//                       <span style={{
//                         background: item.status === "Completed" ? "#22c55e" : "#f96216ff",
//                         padding: "4px 10px",
//                         borderRadius: "20px",
//                         fontSize: "13px",
//                         color: "#fff"
//                       }}>
//                         {item.status}
//                       </span>
//                     </TableCell>

//                     <TableCell>{item.date}</TableCell>

//                     <TableCell sx={{ display: "flex", gap: 1 }}>
//                       <Tooltip title="Delete">
//                         <IconButton sx={{ color: "#dc2626" }} onClick={() => handleDelete(index)}>
//                           <RiDeleteBin6Line />
//                         </IconButton>
//                       </Tooltip>

//                       <Tooltip title="Edit">
//                         <IconButton sx={{ color: "#3b82f6" }} onClick={() => handleEdit(index)}>
//                           <FaEdit />
//                         </IconButton>
//                       </Tooltip>
//                     </TableCell>
//                   </TableRow>
//                 ))
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Paper>
//     </Box>
//   );
// };

// export default AddSales;





import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider,
  IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, TextField, Tooltip
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { useGlobal } from "./GlobalContext";

const AddSales = () => {

  const { sales, setSales } = useGlobal();

  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // SINGLE STATE
  const [formValues, setFormValues] = useState({
    date: "",
    customername: "",
    email: "",
    phone: "",
    address: "",
    method: "",
    status: "",
    items: []           // MULTI ITEMS HERE
  });

  // TEMP ITEM INPUTS (still part of formValues)
  const [newItem, setNewItem] = useState({
    product: "",
    quantity: "",
    unitprice: ""
  });

  useEffect(() => {
    localStorage.setItem("sales", JSON.stringify(sales));
  }, [sales]);

  // Add new item inside formValues.items[]
  const handleAddItem = () => {
    if (!newItem.product || !newItem.quantity || !newItem.unitprice) {
      alert("Enter all item fields");
      return;
    }

    const updatedItems = [...formValues.items, newItem];

    setFormValues({
      ...formValues,
      items: updatedItems
    });

    setNewItem({ product: "", quantity: "", unitprice: "" });
  };

  // Delete item
  const handleDeleteItem = (index) => {
    const updated = formValues.items.filter((_, i) => i !== index);
    setFormValues({ ...formValues, items: updated });
  };

  // Subtotal
  const computeSubtotal = () =>
    formValues.items.reduce(
      (acc, it) =>
        acc + Number(it.quantity || 0) * Number(it.unitprice || 0),
      0
    );

  // Save sale
  const handleSaveSales = () => {
    if (!formValues.customername || !formValues.date || !formValues.method || !formValues.status) {
      alert("Fill required fields");
      return;
    }

    if (formValues.items.length === 0) {
      alert("Add at least one item");
      return;
    }

    const saleData = {
      ...formValues,
      subtotal: computeSubtotal(),
      date: formValues.date || new Date().toISOString().split("T")[0]
    };

    if (editIndex !== null) {
      const updated = [...sales];
      updated[editIndex] = saleData;
      setSales(updated);
    } else {
      setSales([...sales, saleData]);
    }

    setFormValues({
      date: "",
      customername: "",
      email: "",
      phone: "",
      address: "",
      method: "",
      status: "",
      items: []
    });

    setEditIndex(null);
    setOpen(false);
  };

  const handleEdit = (index) => {
    setFormValues(sales[index]);
    setEditIndex(index);
    setOpen(true);
  };

  const handleDelete = (index) => {
    if (window.confirm("Delete sale?")) {
      setSales(sales.filter((_, i) => i !== index));
    }
  };

  const paymentmethod = ["Cash", "Online", "Credit"];
  const paymentstatus = ["Paid", "Pending"];

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Sales</h2>

        <Button
          variant="contained"
          sx={{ background: "#1e293b" }}
          onClick={() => {
            setOpen(true);
            setEditIndex(null);
          }}
        >
          <AddIcon /> Add Sales
        </Button>
      </Box>

      {/* Dialog */}
      <Dialog open={open} fullWidth maxWidth="lg">
        <DialogTitle>{editIndex !== null ? "Edit Sale" : "Add Sale"}</DialogTitle>
        <Divider />

        <DialogContent sx={{ background: "#f5f7fa" }}>
          {/* ITEMS SECTION */}
          <Paper sx={{ p: 3 }}>
            <h3>Sales Items</h3>
            <Divider sx={{ my: 2 }} />

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Qty</TableCell>
                  <TableCell>Unit Price</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {formValues.items.map((it, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{it.product}</TableCell>
                    <TableCell>{it.quantity}</TableCell>
                    <TableCell>₹{it.unitprice}</TableCell>
                    <TableCell>
                      <IconButton color="error" onClick={() => handleDeleteItem(idx)}>
                        <RiDeleteBin6Line />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}

                {/* Add new item */}
                <TableRow>
                  <TableCell>
                    <input
                      value={newItem.product}
                      onChange={(e) =>
                        setNewItem({ ...newItem, product: e.target.value })
                      }
                      placeholder="Product"
                      style={{
                        padding: "12px",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        width: "100%"
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <input
                      value={newItem.quantity}
                      type="number"
                      onChange={(e) =>
                        setNewItem({ ...newItem, quantity: e.target.value })
                      }
                      placeholder="Qty"
                      style={{
                        padding: "12px",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        width: "100%"
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <input
                      value={newItem.unitprice}
                      type="number"
                      onChange={(e) =>
                        setNewItem({ ...newItem, unitprice: e.target.value })
                      }
                      placeholder="Unit Price"
                      style={{
                        padding: "12px",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        width: "100%"
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <Button onClick={handleAddItem} variant="contained">
                      Add
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <h4 style={{ textAlign: "right", marginTop: 20 }}>
              Subtotal: ₹{computeSubtotal()}
            </h4>
          </Paper>

          <Divider sx={{ my: 3 }} />

          {/* CUSTOMER + PAYMENT */}
          <Box sx={{ display: "flex", gap: 2 }}>
            {/* Customer */}
            <Paper sx={{ width: "70%", p: 3 }}>
              <h3>Customer Info</h3>
              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <TextField
                  label="Customer Name"
                  fullWidth
                  value={formValues.customername}
                  onChange={(e) =>
                    setFormValues({ ...formValues, customername: e.target.value })
                  }
                />
                <TextField
                  label="Email"
                  fullWidth
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues({ ...formValues, email: e.target.value })
                  }
                />
              </Box>

              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <TextField
                  label="Phone"
                  fullWidth
                  value={formValues.phone}
                  onChange={(e) =>
                    setFormValues({ ...formValues, phone: e.target.value })
                  }
                />

                <TextField
                  label="Address"
                  multiline
                  rows={2}
                  fullWidth
                  value={formValues.address}
                  onChange={(e) =>
                    setFormValues({ ...formValues, address: e.target.value })
                  }
                />
              </Box>
            </Paper>

            {/* Payment */}
            <Paper sx={{ width: "30%", p: 3 }}>
              <h3>Payment Info</h3>
              <Divider sx={{ my: 2 }} />

              <TextField
                label="Date"
                type="date"
                fullWidth
                value={formValues.date}
                onChange={(e) =>
                  setFormValues({ ...formValues, date: e.target.value })
                }
                sx={{ mb: 2 }}
              />

              <TextField
                select
                fullWidth
                SelectProps={{ native: true }}
                label="Payment Method"
                value={formValues.method}
                onChange={(e) =>
                  setFormValues({ ...formValues, method: e.target.value })
                }
                sx={{ mb: 2 }}
              >
                <option value=""></option>
                {paymentmethod.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </TextField>

              <TextField
                select
                fullWidth
                SelectProps={{ native: true }}
                label="Payment Status"
                value={formValues.status}
                onChange={(e) =>
                  setFormValues({ ...formValues, status: e.target.value })
                }
              >
                <option value=""></option>
                {paymentstatus.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </TextField>
            </Paper>
          </Box>
        </DialogContent>

        <DialogActions sx={{ background: "#f5f7fa" }}>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveSales}>
            {editIndex !== null ? "Update" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* TABLE */}
      <Divider sx={{ my: 3 }} />
      <Paper sx={{ p: 3 }}>
        <h3>Sales List</h3>

        <Table>
          <TableHead sx={{ background: "#1e293b" }}>
            <TableRow>
              <TableCell style={{ color: "#fff" }}>Invoice</TableCell>
              <TableCell style={{ color: "#fff" }}>Customer</TableCell>
              <TableCell style={{ color: "#fff" }}>Items</TableCell>
              <TableCell style={{ color: "#fff" }}>Subtotal</TableCell>
              <TableCell style={{ color: "#fff" }}>Method</TableCell>
              <TableCell style={{ color: "#fff" }}>Status</TableCell>
              <TableCell style={{ color: "#fff" }}>Date</TableCell>
              <TableCell style={{ color: "#fff" }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sales.map((sale, idx) => (
              <TableRow key={idx}>
                <TableCell>INV-{idx + 1}</TableCell>
                <TableCell>{sale.customername}</TableCell>
                <TableCell>{sale.items.length} items</TableCell>
                <TableCell>₹{sale.subtotal}</TableCell>
                <TableCell>{sale.method}</TableCell>
                <TableCell>{sale.status}</TableCell>
                <TableCell>{sale.date}</TableCell>
                <TableCell>
                  <Tooltip title="Delete">
                    <IconButton color="error" onClick={() => handleDelete(idx)}>
                      <RiDeleteBin6Line />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Edit">
                    <IconButton onClick={() => handleEdit(idx)} color="primary">
                      <FaEdit />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default AddSales;
