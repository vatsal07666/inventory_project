// import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Paper, Table, 
//         TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip 
// } from '@mui/material';
// import { useGlobal } from './GlobalContext';
// import { useEffect, useState } from 'react';
// import AddIcon from "@mui/icons-material/Add";
// import { FaEdit } from "react-icons/fa";
// import { RiDeleteBin6Line } from "react-icons/ri";

// const AddSales = () => {
//   const {sales, setSales} = useGlobal();
//   const [open, setOpen] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [formValues, setFormValues] = 
//         useState({ product: "", quantity: "", unitprice: "", date: "", customername: "", 
//             email: "", phone: "", address: "", status: "", method: "" });
  
//   useEffect(() => {
//       localStorage.setItem("sales", JSON.stringify(sales));
//   }, [sales]);

//   // Handle add or edit sales
//   const handleSaveSales = () => {
//     if (!formValues.product || !formValues.quantity || !formValues.unitprice || !formValues.date ||
//         !formValues.customername || !formValues.email || !formValues.phone || !formValues.address || 
//         !formValues.status || !formValues.method) {
//       alert("All fields are required!");
//       return;
//     }
  
//     const newSales = {
//       ...formValues,
//       date: new Date().toISOString().split("T")[0],
//       unitprice: Number(formValues.unitprice),
//       phone: Number(formValues.phone)
//     };
  
//     if (editIndex !== null) {
//       const updated = [...sales];
//       updated[editIndex] = newSales;
//       setSales(updated);
//     } else {
//       // Adding new sales
//       setSales([...sales, newSales]);
//     }
  
//     setFormValues({ product: "", quantity: "", unitprice: "", date: "", customername: "", email: "", 
//                     phone: "", address: "", status: "", method: "" });
//     setEditIndex(null);
//     setOpen(false);
//   };

//   // Handle edit button click
//   const handleEdit = (index) => {
//     setFormValues(sales[index]);
//     setEditIndex(index);
//     setOpen(true);
//   };
  
//   // Handle delete button click
//   const handleDelete = (index) => {
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       const updated = sales.filter((_, i) => i !== index);
//       setSales(updated);
//     }
//   };

//   const paymentmethod = ["Cash", "Online", "Credit"]
//   const paymentstatus = ["Paid", "Pending"]

//   return(
//     <Box>
//       <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <h2>Sales</h2>
  
//           <Button variant="contained"
//             onClick={() => { setOpen(true); setEditIndex(null); }}
//             sx={{ background: "#1e293b", fontSize: "16px", fontWeight: 600, 
//                 "&:hover": { background: "#0f172a" }
//               }} >
//             <AddIcon /> &nbsp; Add Sales
//           </Button>
//       </Box>

//       {/* POPUP FORM */}
//         <Dialog open={open} onClose={() => setOpen(false)} sx={{zIndex:2000}} maxWidth="lg" fullWidth>
//           <DialogTitle sx={{ fontWeight: 700 }}>
//             {editIndex !== null ? "Edit Sales Details" : "Add Sales Details"}
//           </DialogTitle>

//           <Divider />
  
//           <DialogContent sx={{ mt: 1, background:"#f5f7fa" }}>
//             {/* Sales Items */}
//             <Paper sx={{p:3}}>
//               <h3 style={{margin:0}}>Sales Item</h3>

//               <Divider sx={{my:2}} />

//               <Table>
//                 <TableHead sx={{ 
//                       "& .MuiTableCell-root": { color: "#000", fontSize: "16px" }
//                     }}
//                   >
//                   <TableRow>
//                     <TableCell><strong>Product</strong></TableCell>
//                     <TableCell><strong>Quantity</strong></TableCell>
//                     <TableCell><strong>Unit Price</strong></TableCell>
//                     <TableCell><strong>Date</strong></TableCell>
//                   </TableRow>
//                 </TableHead>

//                 <TableBody>
//                   {/* Product */}
//                   <TableCell>
//                     <Box component="input" type="text" placeholder="Enter Product" value={formValues.product}
//                       onChange={(e) => setFormValues({ ...formValues, product: e.target.value })}
//                       sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
//                       }}
//                     />
//                   </TableCell>

//                   {/* Quantity */}
//                   <TableCell>
//                     <Box component="input" type="number" placeholder="Enter Quantity" value={formValues.quantity}
//                       onChange={(e) => setFormValues({ ...formValues, quantity: e.target.value })}
//                       sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
//                       }}
//                     />
//                   </TableCell>

//                   {/* Unit Price */}
//                   <TableCell>
//                     <Box component="input" type="number" placeholder="Enter Unit Price" value={formValues.unitprice}
//                       onChange={(e) => setFormValues({ ...formValues, unitprice: e.target.value })}
//                       sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
//                       }}
//                     />
//                   </TableCell>

//                   {/* Date */}
//                   <TableCell>
//                     <Box component="input" type="date" value={formValues.date}
//                       onChange={(e) => setFormValues({ ...formValues, date: e.target.value })}
//                       sx={{ padding: "12px 14px", border: "1px solid #ccc", 
//                         borderRadius: "8px", fontSize: "16px",
//                       }}
//                     />
//                   </TableCell>
//                 </TableBody>
//               </Table>
//             </Paper>

//             <Divider sx={{my:3}} />

//             {/* Customer And Payment */}
//             <Box sx={{display:"flex", gap:2}}>
//               {/* Customer Information */}
//               <Paper sx={{width:"70%", p:3}}>
//                 <h3 style={{margin:0}}>Customer Information</h3>

//                 <Divider sx={{my:2}} />

//                 <Box sx={{ display: "flex", justifyContent:"space-between", gap: 3, mb: 2 }}>
//                   {/* Customer Name */}
//                   <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
//                     <label style={{ fontWeight: 600 }}>Customer Name</label>
//                     <Box component="input" type="text" placeholder="Enter Customer Name" value={formValues.customername} 
//                       onChange={(e) => setFormValues({ ...formValues, customername: e.target.value })}
//                       sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
//                       }}
//                     />
//                   </Box>

//                   {/* Email */}
//                   <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
//                     <label style={{ fontWeight: 600 }}>Email</label>
//                     <Box component="input" type="text" placeholder="Enter Email" value={formValues.email}
//                       onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
//                       sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
//                       }}
//                     />
//                   </Box>
//                 </Box><br />

//                 <Box sx={{ display: "flex", justifyContent:"space-between", gap: 3, mb: 2 }}>
//                   {/* Phone */}
//                   <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
//                     <label style={{ fontWeight: 600 }}>Phone</label>
//                     <Box component="input" type="number" placeholder="Enter Your Phone Number" value={formValues.phone}
//                       onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
//                       sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
//                       }}
//                     />
//                   </Box>

//                   {/* Address */}
//                   <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
//                     <label style={{ fontWeight: 600 }}>Address</label>
//                     <TextField placeholder="Address" multiline rows={2} fullWidth value={formValues.address}
//                       onChange={(e) => setFormValues({ ...formValues, address: e.target.value })}
//                       sx={{
//                         "& .MuiOutlinedInput-root.Mui-focused fieldset": {
//                           borderColor: "#1e293b",
//                         }
//                       }}
//                     />
//                   </Box>
//                 </Box><br />
//               </Paper>         

//               {/* Payment Information */}
//               <Paper sx={{width:"30%", p:3}}>
//                 <h3 style={{margin:0}}>Payment Information</h3>

//                 <Divider sx={{my:2}} />

//                 <Box sx={{ mb: 2 }}>
//                   {/* Payment Method */}
//                   <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
//                     <label style={{ fontWeight: 600 }}>Payment Method</label>
//                     <Box component="select" value={formValues.method}
//                       onChange={(e) => setFormValues({ ...formValues, method: e.target.value })}
//                       sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
//                       }}>
//                       <option value="" disabled>Select Payment Method</option>
//                       {paymentmethod.map((paym) => (
//                         <option key={paym} value={paym}>{paym}</option>
//                       ))}
//                     </Box>
//                   </Box><br />

//                   {/* Payment Status */}
//                   <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
//                     <label style={{ fontWeight: 600 }}>Payment Status</label>
//                     <Box component="select" value={formValues.status}
//                       onChange={(e) => setFormValues({ ...formValues, status: e.target.value })}
//                       sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
//                       }}>
//                       <option value="" disabled>Select Payment Method</option>
//                       {paymentstatus.map((pays) => (
//                         <option key={pays} value={pays}>{pays}</option>
//                       ))}
//                     </Box>
//                   </Box>
//                 </Box><br />
//               </Paper>
//             </Box>
//           </DialogContent>
  
//           <DialogActions style={{background:"#f5f7fa"}}>
//             <Button onClick={() => setOpen(false)} sx={{ color: "#1e293b" }}>Cancel</Button>
//             <Button
//               variant="contained"
//               onClick={handleSaveSales}
//               sx={{ background: "#1e293b", "&:hover": { background: "#0f172a" } }}
//             >
//               {editIndex !== null ? "Update" : "Save"}
//             </Button>
//           </DialogActions>
//         </Dialog>
  
//         <Divider sx={{ my: 3 }} />

//         {/* SALES TABLE */}
//         <h3>Sales List</h3>
  
//         <Paper sx={{ p: 3, borderRadius: 3 }}>
  
//           <h3 style={{ marginBottom: 0 }}>Sales ({sales.length})</h3>
//           <p style={{ color: "#6b7280" }}>
//             List of all sales transactions
//           </p>

//           <TableContainer sx={{ mt: 2,
//                 width: "100%",
//                 overflowX: "auto",
//                 pb: 1,
//                 '&::-webkit-scrollbar': { height: '8px' },
//                 "&::-webkit-scrollbar-thumb": { backgroundColor: "#9ca3af", borderRadius: 10 },
//               }}
//             >
//             <Table sx={{ width: "100%", tableLayout: "fixed" }}>
//               <TableHead 
//                 sx={{ background: "#1e293b",
//                   "& .MuiTableCell-root": { color: "#fff", fontSize: "16px" }
//                 }}
//               >
//                 <TableRow>
//                   <TableCell><strong>Invoice #</strong></TableCell>
//                   <TableCell><strong>Customer</strong></TableCell>
//                   <TableCell><strong>Items</strong></TableCell>
//                   <TableCell><strong>Price</strong></TableCell>
//                   <TableCell><strong>Payment In</strong></TableCell>
//                   <TableCell><strong>Payment Status</strong></TableCell>
//                   <TableCell><strong>Date</strong></TableCell>
//                   <TableCell><strong>Actions</strong></TableCell>
//                 </TableRow>
//               </TableHead>

//               <TableBody
//                 sx={{
//                   background: "linear-gradient(180deg, #F9F9FB 0%, #f3f3f3ff 100%)",
//                   "& .MuiTableCell-root": { color: "#000000ff", fontSize: "16px",
//                     borderBottom: "1px solid rgba(0, 0, 0, 0.1)", maxWidth: 200,
//                     whiteSpace: "nowrap", overflow:"hidden", textOverflow:"ellipsis"
//                   }
//                 }}
//               >
//                 {sales.length === 0 ? (
//                   <TableRow>
//                     <TableCell colSpan={8} align="center" sx={{ py: 6 }}>
//                       No sales added yet
//                     </TableCell>
//                   </TableRow>
//                 ) : (
//                   sales.map((item, index) => (
//                     <TableRow key={index}>

//                       {/* Invoice Number */}
//                       <TableCell>
//                         <strong>INV-{item.date.replaceAll("-", "")}-{index + 1}</strong>
//                       </TableCell>

//                       {/* Customer */}
//                       <TableCell>
//                         <b>{item.customername}</b> <br />
//                         <small style={{ color: "#6b7280" }}> {item.email} </small>
//                       </TableCell>

//                       {/* Items */}
//                       <TableCell>
//                         {item.product.split(",").length} item(s)
//                         <br />
//                         <span style={{ color: "#6b7280" }}>{item.product}</span>
//                       </TableCell>

//                       {/* Total */}
//                       <TableCell>₹ {item.unitprice}</TableCell>

//                       {/* Payment In */}
//                       <TableCell>
//                         <span style={{ background: "#e5e7eb", padding: "4px 10px", borderRadius: "20px",
//                             fontSize: "13px"
//                           }}>
//                           {item.method}
//                         </span>
//                       </TableCell>

//                       {/* Payment Status */}
//                       <TableCell>
//                         <span style={{
//                           background: item.status === "Completed" ? "#22c55e" : "#f96216ff",
//                           padding: "4px 10px",
//                           borderRadius: "20px",
//                           fontSize: "13px",
//                           color: "#fff"
//                         }}>
//                           {item.status}
//                         </span>
//                       </TableCell>

//                       {/* Date */}
//                       <TableCell> {item.date} </TableCell>

//                       {/* Actions */}
//                       <TableCell sx={{ display: "flex", gap: 1 }}>

//                         {/* Delete */}
//                         <Tooltip title="Delete">
//                           <IconButton sx={{ color: "#dc2626" }} onClick={() => handleDelete(index)}>
//                             <RiDeleteBin6Line />
//                           </IconButton>
//                         </Tooltip>

//                         {/* Edit */}
//                         <Tooltip title="Edit">
//                           <IconButton sx={{ color: "#3b82f6" }} onClick={() => handleEdit(index)}>
//                             <FaEdit />
//                           </IconButton>
//                         </Tooltip>
                        
//                       </TableCell>
//                     </TableRow>
//                   ))
//                 )}

//               </TableBody>

//             </Table>
//           </TableContainer>
//         </Paper>
//     </Box>
//   )
// }

// export default AddSales



import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Paper, Table, 
        TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip 
} from '@mui/material';
import { useGlobal } from './GlobalContext';
import { useEffect, useState } from 'react';
import AddIcon from "@mui/icons-material/Add";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const AddSales = () => {
  const {sales, setSales} = useGlobal();
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formValues, setFormValues] = 
        useState({ date: "", customername: "", email: "", phone: "", address: "", 
          status: "", method: "", items: [] });
  const [itemValues, setItemValues] = useState({ product: "", quantity: "", unitprice: "", total: ""})
  // Bill dialog state
  const [billOpen, setBillOpen] = useState(false);
  const [billData, setBillData] = useState(null);

  useEffect(() => {
      localStorage.setItem("sales", JSON.stringify(sales));
  }, [sales]);

  // Auto-update total when qty or price changes
  useEffect(() => {
    const total = Number(itemValues.quantity) * Number(itemValues.unitprice)
    setItemValues((prev) => ({...prev, total: total || ""}))
  }, [itemValues.quantity, itemValues.unitprice])

  // Add new item inside formValues.items[]
  const handleAddItem = () => {
    if (!itemValues.product || !itemValues.quantity || !itemValues.unitprice) {
      alert("Enter all item fields");
      return;
    }

    const updatedItems = [...formValues.items, itemValues];
    setFormValues({ ...formValues, items: updatedItems });
    setItemValues({ product: "", quantity: "", unitprice: "", total: "" });
  };

  // Delete Items
  const handleDeleteItem = (index) => {
    const updated = formValues.items.filter((_, i) => i !== index);
    setFormValues({ ...formValues, items: updated });
  };

  // Subtotal
  const computeSubtotal = () => {  
    return formValues.items.reduce(
      (acc, it) => acc + Number(it.quantity || 0) * Number(it.unitprice || 0),
      0
    );
  }

  // Handle add or edit sales
  const handleSaveSales = () => {
    if (!formValues.date || !formValues.customername || !formValues.email || 
        !formValues.phone || !formValues.address || !formValues.status || 
        !formValues.method) {
      alert("All fields are required!");
      return;
    }

    if (formValues.items.length === 0) {
      alert("Add at least one item");
      return;
    }

    const saleData = { ...formValues, subtotal: computeSubtotal(),
      date: formValues.date || new Date().toISOString().split("T")[0]
    };

    if (editIndex !== null) {
      const updated = [...sales];
      updated[editIndex] = saleData;
      setSales(updated);
    } else {
      setSales([...sales, saleData]);
    }
  
    setFormValues({ date: "", customername: "", email: "", phone: "", address: "", 
      status: "", method: "", items: [] });
    setItemValues({ product: "", quantity: "", unitprice: "", total: ""})
    setEditIndex(null);
    setOpen(false);
  };

  // Handle edit button click
  const handleEdit = (index) => {
    setFormValues(sales[index]);
    setEditIndex(index);
    setOpen(true);
  };
  
  // Handle delete button click
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const updated = sales.filter((_, i) => i !== index);
      setSales(updated);
    }
  };

  const onCancle = () => {
    setOpen(false);
    setFormValues({ date: "", customername: "", email: "", phone: "", address: "", 
      status: "", method: "", items: [] });
  }

  const handleOpenBill = (data) => {
    setBillData({ ...data});
    setBillOpen(true);
  };

  const paymentmethod = ["Cash", "Online", "Credit"]
  const paymentstatus = ["Paid", "Pending"]

  return(
    <Box>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>Sales</h2>
  
          <Button variant="contained"
            onClick={() => { setOpen(true); setEditIndex(null); }}
            sx={{ background: "#1e293b", fontSize: "16px", fontWeight: 600, 
                "&:hover": { background: "#0f172a" }
              }} >
            <AddIcon /> &nbsp; Add Sales
          </Button>
      </Box>

      {/* POPUP FORM */}
        <Dialog open={open} onClose={() => setOpen(false)} sx={{zIndex:2000}} maxWidth="lg" fullWidth>
          <DialogTitle sx={{ fontWeight: 700 }}>
            {editIndex !== null ? "Edit Sales Details" : "Add Sales Details"}
          </DialogTitle>

          <Divider />
  
          <DialogContent sx={{ mt: 1, background:"#f5f7fa" }}>
            {/* Sales Items */}
            <Paper sx={{p:3}}>
              <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <h3 style={{margin:0}}>Sales Item</h3>
                <Button variant="contained"
                  onClick={handleAddItem}
                  sx={{ background: "#1e293b", fontSize: "16px", fontWeight: 600, 
                      "&:hover": { background: "#0f172a" }
                    }} >
                  Add 
                </Button>
              </Box>

              <Divider sx={{my:2}} />

              <Table>
                <TableHead sx={{ 
                      "& .MuiTableCell-root": { color: "#000", fontSize: "16px" }
                    }}
                  >
                  <TableRow>
                    <TableCell><strong>Product</strong></TableCell>
                    <TableCell><strong>Quantity</strong></TableCell>
                    <TableCell><strong>Unit Price</strong></TableCell>
                    <TableCell><strong>Total</strong></TableCell>
                    <TableCell><strong>Actions</strong></TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    {/* Product */}
                    <TableCell>
                      <Box component="input" type="text" placeholder="Enter Product" value={itemValues.product}
                        onChange={(e) => setItemValues({ ...itemValues, product: e.target.value })}
                        sx={{ padding: "8px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
                        }}
                      />
                    </TableCell>

                    {/* Quantity */}
                    <TableCell>
                      <Box component="input" type="number" placeholder="Enter Quantity" value={itemValues.quantity}
                        onChange={(e) => setItemValues({ ...itemValues, quantity: e.target.value })}
                        sx={{ padding: "8px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
                        }}
                      />
                    </TableCell>

                    {/* Unit Price */}
                    <TableCell>
                      <Box component="input" type="number" placeholder="Enter Unit Price" value={itemValues.unitprice}
                        onChange={(e) => setItemValues({ ...itemValues, unitprice: e.target.value })}
                        sx={{ padding: "8px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
                        }}
                      />
                    </TableCell>

                    {/* Total */}
                    <TableCell>
                      <Box sx={{ padding: "6px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px" }}>
                        ₹ {itemValues.total || 0}
                      </Box>
                    </TableCell>

                    {/* Delete Action */}
                    <TableCell> 
                      <IconButton disabled> <RiDeleteBin6Line /> </IconButton>
                    </TableCell>
                  </TableRow>

                  {/* List existing items */}
                  {formValues.items.map((it, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{it.product}</TableCell>
                      <TableCell>{it.quantity}</TableCell>
                      <TableCell>{it.unitprice}</TableCell>
                      <TableCell>₹ {it.total}</TableCell>
                      <TableCell>
                        <Tooltip title="Delete" sx={{ml:"1px"}}>
                          <IconButton color="error" onClick={() => handleDeleteItem(idx)}>
                            <RiDeleteBin6Line />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                      <TableCell>
                        
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>

            <Divider sx={{my:3}} />

            {/* Customer And Payment */}
            <Box sx={{display:"flex", gap:2}}>
              {/* Customer Information */}
              <Paper sx={{width:"70%", p:3}}>
                <h3 style={{margin:0}}>Customer Information</h3>

                <Divider sx={{my:2}} />

                <Box sx={{ display: "flex", justifyContent:"space-between", gap: 3, mb: 2 }}>
                  {/* Customer Name */}
                  <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                    <label style={{ fontWeight: 600 }}>Customer Name</label>
                    <Box component="input" type="text" placeholder="Enter Customer Name" value={formValues.customername} 
                      onChange={(e) => setFormValues({ ...formValues, customername: e.target.value })}
                      sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
                      }}
                    />
                  </Box>

                  {/* Email */}
                  <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                    <label style={{ fontWeight: 600 }}>Email</label>
                    <Box component="input" type="text" placeholder="Enter Email" value={formValues.email}
                      onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                      sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
                      }}
                    />
                  </Box>
                </Box><br />

                <Box sx={{ display: "flex", justifyContent:"space-between", gap: 3, mb: 2 }}>
                  {/* Phone */}
                  <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                    <label style={{ fontWeight: 600 }}>Phone</label>
                    <Box component="input" type="number" placeholder="Enter Your Phone Number" value={formValues.phone}
                      onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                      sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
                      }}
                    />
                  </Box>

                  {/* Address */}
                  <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                    <label style={{ fontWeight: 600 }}>Address</label>
                    <TextField placeholder="Address" multiline rows={2} fullWidth value={formValues.address}
                      onChange={(e) => setFormValues({ ...formValues, address: e.target.value })}
                      sx={{
                        "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                          borderColor: "#1e293b",
                        }
                      }}
                    />
                  </Box>
                </Box><br />
              </Paper>         

              {/* Payment Information */}
              <Paper sx={{width:"30%", p:3}}>
                <h3 style={{margin:0}}>Payment Information</h3>

                <Divider sx={{my:2}} />

                <Box sx={{ mb: 2 }}>
                  {/* Date */}
                  <Box sx={{ flex: 1, display:"flex", flexDirection: "column", gap: 0.5}}>
                    <label style={{ fontWeight: 600 }}>Date</label>
                    <Box component="input" type="date" value={formValues.date}
                      onChange={(e) => setFormValues({ ...formValues, date: e.target.value })}
                      sx={{ padding: "12px 14px", border: "1px solid #ccc", 
                        borderRadius: "8px", fontSize: "16px",
                      }}
                    />
                  </Box><br />

                  {/* Payment Method */}
                  <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                    <label style={{ fontWeight: 600 }}>Payment Method</label>
                    <Box component="select" value={formValues.method}
                      onChange={(e) => setFormValues({ ...formValues, method: e.target.value })}
                      sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
                      }}>
                      <option value="" disabled>Select Payment Method</option>
                      {paymentmethod.map((paym) => (
                        <option key={paym} value={paym}>{paym}</option>
                      ))}
                    </Box>
                  </Box><br />

                  {/* Payment Status */}
                  <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                    <label style={{ fontWeight: 600 }}>Payment Status</label>
                    <Box component="select" value={formValues.status}
                      onChange={(e) => setFormValues({ ...formValues, status: e.target.value })}
                      sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
                      }}>
                      <option value="" disabled>Select Payment Method</option>
                      {paymentstatus.map((pays) => (
                        <option key={pays} value={pays}>{pays}</option>
                      ))}
                    </Box>
                  </Box>
                </Box><br />
              </Paper>
            </Box>
          </DialogContent>
  
          <DialogActions style={{background:"#f5f7fa"}}>
            <Button onClick={onCancle} sx={{ color: "#1e293b" }}>Cancel</Button>
            <Button
              variant="contained"
              onClick={handleSaveSales}
              sx={{ background: "#1e293b", "&:hover": { background: "#0f172a" } }}
            >
              {editIndex !== null ? "Update" : "Save"}
            </Button>
          </DialogActions>
        </Dialog>
  
        <Divider sx={{ my: 3 }} />

        {/* SALES TABLE */}
        <h3>Sales List</h3>
  
        <Paper sx={{ p: 3, borderRadius: 3 }}>
  
          <h3 style={{ marginBottom: 0 }}>Sales ({sales.length})</h3>
          <p style={{ color: "#6b7280" }}>
            List of all sales transactions
          </p>

            <TableContainer>
              <Table>
                <TableHead sx={{ background: "#1e293b",
                    "& .MuiTableCell-root": { color: "#fff", fontSize: "15px" }
                  }}
                >
                  <TableRow>
                    <TableCell><strong>Invoice #</strong></TableCell>
                    <TableCell><strong>Customer</strong></TableCell>
                    <TableCell><strong>Items</strong></TableCell>
                    <TableCell><strong>Unit Price</strong></TableCell>
                    <TableCell><strong>Total</strong></TableCell>
                    <TableCell><strong>Payment In</strong></TableCell>
                    <TableCell><strong>Payment Status</strong></TableCell>
                    <TableCell><strong>Date</strong></TableCell>
                    <TableCell><strong>Actions</strong></TableCell>
                  </TableRow>
                </TableHead>

                <TableBody
                  sx={{ background: "linear-gradient(180deg, #F9F9FB 0%, #f3f3f3ff 100%)",
                    "& .MuiTableCell-root": { color: "#000000ff", fontSize: "16px",
                      borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                    }
                  }}
                >
                  {sales.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={9} align="center" sx={{ py: 6 }}>
                        No sales added yet
                      </TableCell>
                    </TableRow>
                  ) : (
                    sales.map((item, index) => (
                      <TableRow key={index}>

                        {/* Invoice Number */}
                        <TableCell>
                          <strong>INV-{(item.date || "").replaceAll("-", "")}-{index + 1}</strong>
                        </TableCell>

                        {/* Customer */}
                        <TableCell>
                          <b>{item.customername}</b> <br />
                          <small style={{ color: "#6b7280" }}> {item.email} </small>
                        </TableCell>

                        {/* Items */}
                        <TableCell>
                          {item.items.length} item(s) <br />
                          <span style={{ color: "#6b7280" }}>
                            {item.items.map(i => i.product).join(",")}
                          </span>
                        </TableCell>

                        {/* Unit Price */}
                        <TableCell>₹ {item.items.map(i => i.unitprice).join(", ")}</TableCell>

                        {/* Total Price */}
                        <TableCell>₹ {item.subtotal}</TableCell>

                        {/* Payment In */}
                        <TableCell>
                          <span style={{ background: "#e5e7eb", padding: "4px 10px", borderRadius: "20px",
                              fontSize: "13px"
                            }}>
                            {item.method}
                          </span>
                        </TableCell>

                        {/* Payment Status */}
                        <TableCell>
                          <span style={{
                            background: item.status === "Paid" ? "#22c55e" : "#f96216ff",
                            padding: "4px 10px",
                            borderRadius: "20px",
                            fontSize: "13px",
                            color: "#fff"
                          }}>
                            {item.status}
                          </span>
                        </TableCell>

                        {/* Date */}
                        <TableCell> {item.date} </TableCell>

                        {/* Actions */}
                        <TableCell>
                          <Box sx={{display:"flex", justifyContent: "center", alignItems:" center"}}>
                            {/* View Bill */}
                            <Tooltip title="View Invoice">
                              <IconButton onClick={() => handleOpenBill(item)}> 👁️ </IconButton>
                            </Tooltip>

                            {/* Delete */}
                            <Tooltip title="Delete" sx={{ml:"1px"}}>
                              <IconButton sx={{ color: "#dc2626" }} onClick={() => handleDelete(index)}>
                                <RiDeleteBin6Line />
                              </IconButton>
                            </Tooltip>

                            {/* Edit */}
                            <Tooltip title="Edit">
                              <IconButton sx={{ color: "#3b82f6" }} onClick={() => handleEdit(index)}>
                                <FaEdit />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))
                  )}

                </TableBody>

              </Table>
            </TableContainer>

        </Paper>

        {/* Bill Dialog */}
        <Dialog open={billOpen} onClose={() => setBillOpen(false)} maxWidth="md" fullWidth sx={{zIndex:2000}}>
          <Box sx={{ background:"#f5f7fa", p: 3}}>
            <DialogTitle sx={{ fontWeight: 700, textAlign: "center" }}>Sales Invoice</DialogTitle>
            <DialogContent dividers sx={{ p: 4 }}>
              {billData && (
                <Box sx={{}}>
                  <Box sx={{ textAlign: "center", mb: 3 }}>
                    <h2 style={{ margin: 0 }}>Your Company Name</h2>
                    <p style={{ margin: 0,color: "#555" }}>Address Line 1</p>
                    <p style={{ margin: 0,color: "#555" }}>Phone: 9876543210</p>
                  </Box>           

                  <Divider sx={{ my: 2 }} />

                  <Box sx={{display:"flex", justifyContent:"space-between", gap: 2}}>
                    <Box sx={{ width:"50%", borderRadius: 3, py: 1, px: 2 }} component={Paper}>
                      <h3>Customer Details : - </h3>
                      <p style={{color: "#555"}}><strong>Name:</strong> <br /> {billData.customername}</p>
                      <p style={{color: "#555"}}><strong>Email:</strong> <br /> {billData.email}</p>
                      <p style={{color: "#555"}}><strong>Phone:</strong> <br /> {billData.phone}</p>
                      <p style={{color: "#555"}}><strong>Address:</strong> <br /> {billData.address}</p>
                    </Box>

                    <Box sx={{ width:"50%", borderRadius: 3, py: 1, px: 2 }} component={Paper}>
                      <h3>Sales Summary : -</h3>
                      <Box sx={{ display: "flex", justifyContent: "space-between"}}>
                        <Box sx={{color:"#555"}}>
                          <p><strong>Status</strong></p>
                          <p><strong>Total Amount:</strong></p>
                          <p><strong>Payment Method:</strong></p>
                          <p><strong>Payment Status:</strong></p>
                          <p><strong>Date:</strong></p>
                        </Box>
                        <Box sx={{color:"#555"}}>
                          <p>{billData.status}</p>
                          <p>₹ {billData.subtotal}</p>
                          <p>{billData.method}</p>
                          <p>{billData.status}</p>
                          <p>{billData.date}</p>
                        </Box>
                      </Box>
                    </Box>  
                  </Box>

                  <Box sx={{ borderRadius: 3, py: 1, px: 2, mt: 3 }} component={Paper}>
                    <h3 style={{ marginBottom: 0 }}>Items ({billData.items.length})</h3>
                    <p style={{ marginTop: "5px", color: "#6b7280" }}>
                      List of all sales transactions
                    </p>

                    <Table>
                      <TableHead sx={{ background: "#f1f5f9" }}>
                        <TableRow>
                          <TableCell><strong>Product</strong></TableCell>
                          <TableCell><strong>Quantity</strong></TableCell>
                          <TableCell><strong>Unit Price</strong></TableCell>
                          <TableCell><strong>Total Price</strong></TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {billData.items.map((it, idx) => (
                          <TableRow key={idx}>
                            <TableCell>{it.product}</TableCell>
                            <TableCell>{it.quantity}</TableCell>
                            <TableCell>₹ {it.unitprice}</TableCell>
                            <TableCell>₹ {it.total}</TableCell>
                          </TableRow>
                        ))}

                        {/* Total row */}
                        <TableRow>
                          <TableCell colSpan={3} align="right" sx={{fontSize: "16px"}}>
                            <strong>Total:</strong>
                          </TableCell>
                          <TableCell sx={{fontSize: "16px"}}>
                            <b>₹ {billData.subtotal}</b>
                          </TableCell>
                        </TableRow>

                      </TableBody>
                    </Table>
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <p style={{ textAlign: "center", marginTop: "15px", color: "#555" }}>
                    Thank you for your business!
                  </p>
                </Box>
              )}
            </DialogContent>

            <DialogActions>
              <Button onClick={() => setBillOpen(false)} sx={{color: "#0f172a"}}>Close</Button>
              <Button
                variant="contained"
                onClick={() => window.print()}
                sx={{ background: "#1e293b", "&:hover": { background: "#0f172a" } }}
              >
                Print
              </Button>
            </DialogActions>
          </Box>
        </Dialog>
    </Box>
  )
}

export default AddSales