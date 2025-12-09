// import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Paper, Table, 
//         TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip 
// } from '@mui/material';
// import { useGlobal } from './GlobalContext';
// import { useEffect, useState } from 'react';
// import AddIcon from "@mui/icons-material/Add";
// import { FaEdit } from "react-icons/fa";
// import { RiDeleteBin6Line } from "react-icons/ri";

// function AddSales() {
//   const {sales, setSales} = useGlobal();
//     const [open, setOpen] = useState(false);
//     const [editIndex, setEditIndex] = useState(null);
//     const [formValues, setFormValues] = useState({ date: "" ,item: "", customername: "", email: "", mobile: "", 
//         price: "", payment: "", status: "", method: "" });
  

//     // Bill dialog state
//     const [billOpen, setBillOpen] = useState(false);
//     const [billData, setBillData] = useState(null);
    
//     useEffect(() => {
//       localStorage.setItem("sales", JSON.stringify(sales));
//     }, [sales]);

//     // Handle add or edit sales
//     const handleSaveSales = () => {
//       if (!formValues.date || !formValues.item || !formValues.customername || !formValues.email ||  !formValues.mobile || 
//           !formValues.price || !formValues.payment || !formValues.status || !formValues.method) {
//         alert("All fields are required!");
//         return;
//       }
  
//       const newSales = {
//         ...formValues,
//         price: Number(formValues.price),
//         mobile: Number(formValues.mobile)
//       };
  
//       if (editIndex !== null) {
//         const updated = [...sales];
//         updated[editIndex] = newSales;
//         setSales(updated);
//       } else {
//         // Adding new sales
//         setSales([...sales, newSales]);
//       }
  
//       setFormValues({ date: "", item: "", customername: "", email: "", mobile: "", address: "", price: "", 
//                       payment: "", status: "", method: "" });
//       setEditIndex(null);
//       setOpen(false);
//     };
  
//     // Handle edit button click
//     const handleEdit = (index) => {
//       setFormValues(sales[index]);
//       setEditIndex(index);
//       setOpen(true);
//     };
  
//     // Handle delete button click
//     const handleDelete = (index) => {
//       if (window.confirm("Are you sure you want to delete this product?")) {
//         const updated = sales.filter((_, i) => i !== index);
//         setSales(updated);
//       }
//     };

//     const handleOpenBill = (data) => {
//       setBillData({ ...data});
//       setBillOpen(true);
//     };

//     const paymentmethod = ["Cash", "Online", "Credit"]
//     const paymentstatus = ["Paid", "Pending"]

//     return (
//       <Box>
//         <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <h2>Sales</h2>
  
//           <Button
//             variant="contained"
//             onClick={() => { setOpen(true); setEditIndex(null); }}
//             sx={{
//               background: "#1e293b", fontSize: "16px", fontWeight: 600, "&:hover": { background: "#0f172a" }
//             }} >
//             <AddIcon /> &nbsp; Add Sales
//           </Button>
//         </Box>
  
//         {/* POPUP FORM */}
//         <Dialog open={open} onClose={() => setOpen(false)} sx={{zIndex:2000}} maxWidth="lg" fullWidth>
//           <DialogTitle sx={{ fontWeight: 700 }}>
//             {editIndex !== null ? "Edit Sales Details" : "Add Sales Details"}
//           </DialogTitle>

//           <Divider />
  
//           <DialogContent sx={{ mt: 1, background:"#f5f7fa" }}>
//             <Paper sx={{p:3}}>
//               <h3 style={{margin:0}}>Customer Information</h3>

//               <Divider sx={{my:2}} />

//               <Box sx={{ display: "flex", justifyContent:"space-between", gap: 3, mb: 2 }}>
//                 {/* Customer Name */}
//                 <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
//                   <label style={{ fontWeight: 600 }}>Customer Name</label>
//                   <Box component="input" type="text" placeholder="Enter Customer Name" value={formValues.customername} 
//                     onChange={(e) => setFormValues({ ...formValues, customername: e.target.value })}
//                     sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
//                     }}
//                   />
//                 </Box>

//                 {/* Email */}
//                 <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
//                   <label style={{ fontWeight: 600 }}>Email</label>
//                   <Box component="input" type="text" placeholder="Enter Email" value={formValues.email}
//                     onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
//                     sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
//                     }}
//                   />
//                 </Box>
//               </Box><br />

//               <Box sx={{ display: "flex", justifyContent:"space-between", gap: 3, mb: 2 }}>
//                 {/* Phone */}
//                 <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
//                   <label style={{ fontWeight: 600 }}>Phone</label>
//                   <Box component="input" type="number" placeholder="Enter Quantity" value={formValues.phone}
//                     onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
//                     sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
//                     }}
//                   />
//                 </Box>

//                 {/* Address */}
//                 <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
//                   <label style={{ fontWeight: 600 }}>Address</label>
//                   <TextField placeholder="Address" multiline rows={2} fullWidth value={formValues.address}
//                     onChange={(e) => setFormValues({ ...formValues, address: e.target.value })}
//                     sx={{
//                       "& .MuiOutlinedInput-root.Mui-focused fieldset": {
//                         borderColor: "#1e293b",
//                       }
//                     }}
//                   />
//                 </Box>
//               </Box><br />
//             </Paper> 

//             <Divider sx={{my:3}} />

//             <Paper sx={{p:3}}>
//               <h3 style={{margin:0}}>Sales Item</h3>

//               <Divider sx={{my:2}} />

//               <Table>
//                 <TableHead sx={{ 
//                                 "& .MuiTableCell-root": { color: "#000", fontSize: "16px" }}}
//                   >
//                   <TableRow>
//                     <TableCell><strong>Product</strong></TableCell>
//                     <TableCell><strong>Quantity</strong></TableCell>
//                     <TableCell><strong>Unit Price</strong></TableCell>
//                   </TableRow>
//                 </TableHead>

//                 <TableBody>
//                   <TableCell>
//                     <Box component="input" type="text" value={formValues.phone}
//                       onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
//                       sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
//                       }}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Box component="input" type="number" value={formValues.Quantity}
//                       onChange={(e) => setFormValues({ ...formValues, Quantity: e.target.value })}
//                       sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
//                       }}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Box component="input" type="number" value={formValues.price}
//                       onChange={(e) => setFormValues({ ...formValues, price: e.target.value })}
//                       sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
//                       }}
//                     />
//                   </TableCell>
//                 </TableBody>

//                 <Divider sx={{my: 1}} />
//               </Table>
//             </Paper>

//             <Divider sx={{my:3}} />

//             <Paper sx={{p:3}}>
//               <h3 style={{margin:0}}>Payment Information</h3>

//               <Divider sx={{my:2}} />

//               <Box sx={{ display: "flex", justifyContent:"space-between", gap: 3, mb: 2 }}>
//                 {/* Payment Method */}
//                 <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
//                   <label style={{ fontWeight: 600 }}>Payment Method</label>
//                   <Box component="select" value={formValues.method}
//                     onChange={(e) => setFormValues({ ...formValues, method: e.target.value })}
//                     sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
//                     }}>
//                     <option value="" disabled>Select Payment Method</option>
//                     {paymentmethod.map((paym) => (
//                       <option key={paym} value={paym}>{paym}</option>
//                     ))}
//                   </Box>
//                 </Box>

//                 {/* Payment Status */}
//                 <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
//                   <label style={{ fontWeight: 600 }}>Payment Status</label>
//                   <Box component="select" value={formValues.status}
//                     onChange={(e) => setFormValues({ ...formValues, status: e.target.value })}
//                     sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
//                     }}>
//                     <option value="" disabled>Select Payment Method</option>
//                     {paymentstatus.map((pays) => (
//                       <option key={pays} value={pays}>{pays}</option>
//                     ))}
//                   </Box>
//                 </Box>
//               </Box><br />
//             </Paper>
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

//           <TableContainer sx={{ mt: 2 }}>
//             <Table>

//               <TableHead 
//                 sx={{
//                   background: "#1e293b",
//                   "& .MuiTableCell-root": {
//                     color: "#fff",
//                     fontSize: "16px"
//                   }
//                 }}
//               >
//                 <TableRow>
//                   <TableCell><strong>Invoice #</strong></TableCell>
//                   <TableCell><strong>Customer</strong></TableCell>
//                   <TableCell><strong>Items</strong></TableCell>
//                   <TableCell><strong>Total</strong></TableCell>
//                   <TableCell><strong>Payment</strong></TableCell>
//                   <TableCell><strong>Status</strong></TableCell>
//                   <TableCell><strong>Date</strong></TableCell>
//                   <TableCell><strong>Actions</strong></TableCell>
//                 </TableRow>
//               </TableHead>

//               <TableBody>

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
//                         {item.item.split(",").length} item(s)
//                         <br />
//                         <span style={{ color: "#6b7280" }}>{item.item}</span>
//                       </TableCell>

//                       {/* Total */}
//                       <TableCell>₹{item.price}</TableCell>

//                       {/* Payment */}
//                       <TableCell>
//                         <span style={{ background: "#e5e7eb", padding: "4px 10px", borderRadius: "20px",
//                             fontSize: "13px"
//                           }}>
//                           {item.payment}
//                         </span>
//                       </TableCell>

//                       {/* Status */}
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
//                       <TableCell>{item.date}</TableCell>

//                       {/* Actions */}
//                       <TableCell sx={{ display: "flex", gap: 1 }}>
                        
//                         {/* View Bill */}
//                         <Tooltip title="View Invoice">
//                           <IconButton onClick={() => handleOpenBill(item)}> 👁️ </IconButton>
//                         </Tooltip>

//                         {/* Edit */}
//                         <Tooltip title="Edit">
//                           <IconButton sx={{ color: "#3b82f6" }} onClick={() => handleEdit(index)}>
//                             <FaEdit />
//                           </IconButton>
//                         </Tooltip>

//                         {/* Delete */}
//                         <Tooltip title="Delete">
//                           <IconButton sx={{ color: "#dc2626" }} onClick={() => handleDelete(index)}>
//                             <RiDeleteBin6Line />
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

//         {/* Bill Dialog */}
//       <Dialog open={billOpen} onClose={() => setBillOpen(false)} maxWidth="md" fullWidth sx={{zIndex:2000}}>
//         <Box sx={{ background:"#f5f7fa", p: 3}}>
//           <DialogTitle sx={{ fontWeight: 700, textAlign: "center" }}>Sales Invoice</DialogTitle>
//         <DialogContent dividers sx={{ p: 4 }}>
//           {billData && (
//             <Box sx={{}}>
//               <Box sx={{ textAlign: "center", mb: 3 }}>
//                 <h2 style={{ margin: 0 }}>Your Company Name</h2>
//                 <p style={{ margin: 0,color: "#555" }}>Address Line 1</p>
//                 <p style={{ margin: 0,color: "#555" }}>Phone: 9876543210</p>
//               </Box>           

//               <Divider sx={{ my: 2 }} />

//               <Box sx={{display:"flex", justifyContent:"space-between", gap: 2}}>
//                 <Box sx={{ width:"50%", borderRadius: 3, py: 1, px: 2 }} component={Paper}>
//                   <h3><i>Customer Details : - </i></h3>
//                   <p style={{color: "#555"}}><strong>Name:</strong> <br /> {billData.customername}</p>
//                   <p style={{color: "#555"}}><strong>Email:</strong> <br /> {billData.email}</p>
//                   <p style={{color: "#555"}}><strong>Phone:</strong> <br /> {billData.mobile}</p>
//                 </Box>

//                 <Box sx={{ width:"50%", borderRadius: 3, py: 1, px: 2 }} component={Paper}>
//                   <h3 style={{}}><i>Order Summary : -</i></h3>
//                   <Box sx={{ display: "flex", justifyContent: "space-between"}}>
//                     <Box sx={{color:"#555"}}>
//                       <p><strong>Date:</strong></p>
//                       <p><strong>Items</strong></p>
//                       <p><strong>Amount:</strong></p>
//                       <p><strong>Payment:</strong></p>
//                       <p><strong>Status:</strong></p>
//                     </Box>
//                     <Box sx={{color:"#555"}}>
//                       <p>{billData.date}</p>
//                       <p>{billData.item}</p>
//                       <p>₹ {billData.price}</p>
//                       <p>{billData.payment}</p>
//                       <p>{billData.status}</p>
//                     </Box>
//                   </Box>
//                 </Box>  
//               </Box>

//               <Box sx={{ borderRadius: 3, py: 1, px: 2, mt: 3 }} component={Paper}>
//                   <h3 style={{ marginBottom: 0 }}>Items ({billData.item.split(",").length})</h3>
//                   <p style={{ marginTop: "5px", color: "#6b7280" }}>
//                     List of all sales transactions
//                   </p>

//                   <Table>
//                     <TableHead sx={{ background: "#f1f5f9" }}>
//                       <TableRow>
//                         <TableCell><strong>Product</strong></TableCell>
//                         <TableCell><strong>Quantity</strong></TableCell>
//                       </TableRow>
//                     </TableHead>

//                     <TableBody>
//                       <TableRow>
//                         <TableCell>{billData.item}</TableCell>
//                         <TableCell></TableCell>
//                       </TableRow>
//                     </TableBody>
//                   </Table>
//               </Box>

//               <Divider sx={{ my: 2 }} />

//               <p style={{ textAlign: "center", marginTop: "15px", color: "#555" }}>
//                 Thank you for your business!
//               </p>
//             </Box>
//           )}
//         </DialogContent>

//         <DialogActions>
//           <Button onClick={() => setBillOpen(false)} sx={{color: "#0f172a"}}>Close</Button>
//           <Button
//             variant="contained"
//             onClick={() => window.print()}
//             sx={{ background: "#1e293b", "&:hover": { background: "#0f172a" } }}
//           >
//             Print
//           </Button>
//         </DialogActions>
//         </Box>
//       </Dialog>
//       </Box>
//     );
// }

// export default AddSales



import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Paper, Table, 
  TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip 
} from '@mui/material';
import { useGlobal } from './GlobalContext';
import { useEffect, useState } from 'react';
import AddIcon from "@mui/icons-material/Add";

const AddSales = () => {

  const { sales, setSales } = useGlobal();

  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [salesItems, setSalesItems] = useState([]);
  const [items, setItems] = useState({ product: "", quantity: "", unitprice: "" });

  const [customerInfo, setCustomerInfo] = useState({ customername: "", email: "", phone: "", address: "" });

  const [paymentInfo, setPaymentInfo] = useState({ date: "", method: "", status: "" });

  useEffect(() => {
    localStorage.setItem("sales", JSON.stringify(sales));
  }, [sales]);

  // Add Single Sales Item
  const handleAddSalesItem = () => {
    if (!items.product || !items.quantity || !items.unitprice) {
      alert("Please fill all item fields");
      return;
    }

    setSalesItems([...salesItems, items]);

    setItems({ product: "", quantity: "", unitprice: "" });
  };

  // Calculate Totals
  const subtotal = salesItems.reduce(
    (acc, item) => acc + Number(item.quantity) * Number(item.unitprice),
    0
  );

  const tax = subtotal * 0.10;   // 10% GST (optional)
  const grandTotal = subtotal + tax;

  // Save Sales
  const handleSaveSales = () => {
    if (salesItems.length === 0) {
      alert("Add at least one item");
      return;
    }

    if (!customerInfo.customername || !customerInfo.email || !customerInfo.phone || !customerInfo.address) {
      alert("Customer information is required");
      return;
    }

    if (!paymentInfo.date || !paymentInfo.method || !paymentInfo.status) {
      alert("Payment details are required");
      return;
    }

    const newSales = { ...customerInfo, ...paymentInfo, items: salesItems, subtotal, tax, grandTotal };

    if (editIndex !== null) {
      const updated = [...sales];
      updated[editIndex] = newSales;
      setSales(updated);
    } else {
      setSales([...sales, newSales]);
    }

    // Reset
    setSalesItems([]);
    setCustomerInfo({ customername: "", email: "", phone: "", address: "" });
    setPaymentInfo({ date: "", method: "", status: "" });
    setEditIndex(null);
    setOpen(false);
  };

  const paymentmethod = ["Cash", "Online", "Credit"];
  const paymentstatus = ["Paid", "Pending"];

  return (
    <Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Sales</h2>
        <Button variant="contained"
          onClick={() => { setOpen(true); setEditIndex(null); }}
          sx={{ background: "#1e293b", fontSize: "16px", fontWeight: 600 }}
        >
          <AddIcon /> Add Sales
        </Button>
      </Box>

      {/* Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="lg" fullWidth>

        <DialogTitle sx={{ fontWeight: 700 }}>
          {editIndex !== null ? "Edit Sales" : "Add Sales"}
        </DialogTitle>

        <Divider />

        <DialogContent sx={{ background: "#f5f7fa" }}>

          {/* SALES ITEM SECTION */}
          <Box sx={{display:"flex", justifyContent:"space-between", gap:2}}>

            <Paper sx={{ p: 3, width:"70%" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <h3 style={{ margin: 0 }}>Sales Items</h3>
                <Button variant="contained" onClick={handleAddSalesItem} sx={{ background: "#1e293b" }}>
                  <AddIcon /> Add Item
                </Button>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Input Row */}
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <input type="text" placeholder="Product" value={items.product}
                  onChange={(e) => setItems({ ...items, product: e.target.value })}
                  style={{ padding: "10px", flex: 1 }}
                />
                <input type="number" placeholder="Qty" value={items.quantity}
                  onChange={(e) => setItems({ ...items, quantity: e.target.value })}
                  style={{ padding: "10px", width: "120px" }}
                />
                <input type="number" placeholder="Unit Price" value={items.unitprice}
                  onChange={(e) => setItems({ ...items, unitprice: e.target.value })}
                  style={{ padding: "10px", width: "150px" }}
                />
              </Box>

              {/* Table */}
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell>Unit Price</TableCell>
                    <TableCell>Total</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {salesItems.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell>{item.product}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>{item.unitprice}</TableCell>
                      <TableCell>{item.quantity * item.unitprice}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>

            {/* SEPARATE TOTAL BOX */}
            <Paper sx={{ p: 3, mt: 3, background: "#fff", width:"30%" }}>
              <h3 style={{ marginTop: 0 }}>Totals</h3>

              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <strong>Subtotal:</strong>
                <span>₹ {subtotal}</span>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <strong>Tax (10%):</strong>
                <span>₹ {tax.toFixed(2)}</span>
              </Box>

              <Divider sx={{ my: 1 }} />

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <strong>Grand Total:</strong>
                <strong>₹ {grandTotal.toFixed(2)}</strong>
              </Box>
            </Paper>

          </Box>


          {/* CUSTOMER + PAYMENT */}
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            
            {/* Customer */}
            <Paper sx={{ p: 3, width: "70%" }}>
              <h3>Customer Info</h3>
              <Divider sx={{ my: 1 }} />

              <input type="text" placeholder="Customer Name" value={customerInfo.customername}
                onChange={(e) => setCustomerInfo({ ...customerInfo, customername: e.target.value })}
                style={{ padding: 10, width: "100%", marginBottom: 12 }}
              />

              <input type="text" placeholder="Email" value={customerInfo.email}
                onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                style={{ padding: 10, width: "100%", marginBottom: 12 }}
              />

              <input type="number" placeholder="Phone" value={customerInfo.phone}
                onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                style={{ padding: 10, width: "100%", marginBottom: 12 }}
              />

              <TextField placeholder="Address" multiline rows={2} fullWidth value={customerInfo.address}
                onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
              />
            </Paper>

            {/* Payment */}
            <Paper sx={{ p: 3, width: "30%" }}>
              <h3>Payment Info</h3>
              <Divider sx={{ my: 1 }} />

              <input type="date" value={paymentInfo.date}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, date: e.target.value })}
                style={{ padding: 10, width: "100%", marginBottom: 12 }}
              />

              <select value={paymentInfo.method} onChange={(e) => setPaymentInfo({ ...paymentInfo, method: e.target.value })}
                style={{ padding: 10, width: "100%", marginBottom: 12 }}
              >
                <option value="">Select Payment Method</option>
                {paymentmethod.map(p => <option key={p} value={p}>{p}</option>)}
              </select>

              <select value={paymentInfo.status}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, status: e.target.value })}
                style={{ padding: 10, width: "100%" }}
              >
                <option value="">Select Payment Status</option>
                {paymentstatus.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </Paper>

          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveSales}>
            {editIndex !== null ? "Update" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
};

export default AddSales;