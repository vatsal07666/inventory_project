// import { Table, TableHead, TableRow, TableCell, TableBody, Paper, TableContainer, Tooltip, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, Divider, Box } from "@mui/material";
// import { useGlobal } from "./GlobalContext";
// import { useState } from "react";
// import { FaFileInvoice } from "react-icons/fa6";

// const ViewSales = () => {
//   const { sales } = useGlobal();

//   const [billOpen, setBillOpen] = useState(false);
//   const [billData, setBillData] = useState(null);

//   // Generate random Invoice Number
//   const generateInvoiceNumber = () => {
//     const random = Math.random().toString(36).substring(2, 8).toUpperCase();
//     return `INV-${random}`;
//   };

//   const handleOpenBill = (data) => {
//     const invoiceNumber = generateInvoiceNumber();
//     setBillData({ ...data, invoice: invoiceNumber });
//     setBillOpen(true);
//   };

//   return (
//     <div>
//       <h2>Sales List</h2><br />

//       <TableContainer component={Paper} elevation={0}>
//         <Table>
//           <TableHead sx={{
//             background: "#1e293b",
//             "& .MuiTableCell-root": {
//               color: "#fff",
//               fontSize: "16px",
//               fontWeight: 600
//             }
//           }}>
//             <TableRow>
//               <TableCell>Index</TableCell>
//               <TableCell>Date</TableCell>
//               <TableCell>Sales Order No.</TableCell>
//               <TableCell>Customer Name</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Price</TableCell>
//               <TableCell>Payment</TableCell>
//               <TableCell>Bill / Invoice</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody sx={{
//             background: "linear-gradient(180deg, #F9F9FB 0%, #f3f3f3 100%)",
//             "& .MuiTableCell-root": {
//               color: "#000",
//               fontSize: "16px",
//               borderBottom: "1px solid rgba(0, 0, 0, 0.2)"
//             }
//           }}>
//             {sales.length === 0 ? (
//               <TableRow>
//                 <TableCell colSpan={8} align="center" sx={{ py: 10 }}>
//                   No sales added yet
//                 </TableCell>
//               </TableRow>
//             ) : (
//               sales.map((item, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{index + 1}</TableCell>
//                   <TableCell>{item.date}</TableCell>
//                   <TableCell>{item.salesorder}</TableCell>
//                   <TableCell>{item.customername}</TableCell>
//                   <TableCell>{item.status}</TableCell>
//                   <TableCell>{item.price}</TableCell>
//                   <TableCell>{item.payment}</TableCell>
//                   <TableCell>
//                     <Tooltip title="Bill">
//                       <IconButton
//                         sx={{
//                           borderColor: "#22c55e",
//                           color: "#22c55e",
//                           "&:hover": { borderColor: "#16a34a", color: "#16a34a" }
//                         }}
//                         onClick={() => handleOpenBill(item)}
//                       >
//                         <FaFileInvoice />
//                       </IconButton>
//                     </Tooltip>
//                   </TableCell>
//                 </TableRow>
//               ))
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Bill Dialog */}
//       <Dialog open={billOpen} onClose={() => setBillOpen(false)} maxWidth="sm" fullWidth>
//         <DialogTitle sx={{ textAlign: "center" }}>Invoice</DialogTitle>
//         <DialogContent dividers>
//           {billData && (
//             <Box sx={{ p: 2 }}>
//               <h3>Invoice No: {billData.invoice}</h3>
//               <p><strong>Date:</strong> {billData.date}</p>
//               <p><strong>Sales Order No:</strong> {billData.salesorder}</p>
//               <p><strong>Customer:</strong> {billData.customername}</p>
//               <p><strong>Status:</strong> {billData.status}</p>
//               <p><strong>Payment:</strong> {billData.payment}</p>
//               <p><strong>Amount:</strong> ₹{billData.price}</p>
//               <Divider sx={{ my: 2 }} />
//               <p style={{ textAlign: "center" }}>Thank you for your business!</p>
//             </Box>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setBillOpen(false)}>Close</Button>
//           <Button variant="contained" onClick={() => window.print()}>Print</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default ViewSales;


// import {
//   Table, TableHead, TableRow, TableCell, TableBody,
//   Paper, TableContainer, Tooltip, IconButton,
//   Dialog, DialogTitle, DialogContent, DialogActions, Button, Divider, Box
// } from "@mui/material";
// import { useGlobal } from "./GlobalContext";
// import { useState } from "react";
// import { FaFileInvoice } from "react-icons/fa6";

// const ViewSales = () => {
//   const { sales } = useGlobal();

//   const [billOpen, setBillOpen] = useState(false);
//   const [billData, setBillData] = useState(null);

//   // Generate random Invoice Number
//   const generateInvoiceNumber = () => {
//     const random = Math.random().toString(36).substring(2, 8).toUpperCase();
//     return `INV-${random}`;
//   };

//   // Open Bill and generate invoice if it doesn't exist
//   const handleOpenBill = (data) => {
//     const invoiceNumber = generateInvoiceNumber();
//     setBillData({ ...data, invoice: invoiceNumber });
//     setBillOpen(true);
//   };

//   return (
//     <Paper sx={{ p: 3, borderRadius: 3, minWidth:"max-content", overflowX:"auto" }}>
//       <h3 style={{margin:0}}>Sales ({sales.length})</h3>
//       <p style={{ color: "#6b7280", }}> List of All Sales </p>
//       <TableContainer component={Paper} elevation={0}>
//         <Table sx={{width: "100%"}}>
//           <TableHead sx={{
//             background: "#1e293b",
//             "& .MuiTableCell-root": {
//               color: "#fff",
//               fontSize: "16px",
//               fontWeight: 600
//             }
//           }}>
//             <TableRow>
//               <TableCell>Invoice #</TableCell>
//               <TableCell>Customer</TableCell>
//               <TableCell>Items</TableCell>
//               <TableCell>Unit Price</TableCell>
//               <TableCell>Total</TableCell>
//               <TableCell>Payment In</TableCell>
//               <TableCell>Payment Status</TableCell>
//               <TableCell>Date</TableCell>
//               <TableCell>Invoice</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody sx={{
//             background: "linear-gradient(180deg, #F9F9FB 0%, #f3f3f3 100%)",
//             "& .MuiTableCell-root": {
//               color: "#000",
//               fontSize: "16px",
//               borderBottom: "1px solid rgba(0, 0, 0, 0.2)"
//             }
//           }}>
//             {sales.length === 0 ? (
//               <TableRow>
//                 <TableCell colSpan={9} align="center" sx={{ py: 10 }}>
//                   No sales added yet
//                 </TableCell>
//               </TableRow>
//             ) : (
//               sales.map((item, index) => (
//                 <TableRow key={index}>
//                   {/* Invoice */}
//                   <TableCell>
//                     {billData.invoice}
//                   </TableCell>

//                   {/* Customer & Email */}
//                   <TableCell>
//                     <b>{item.customername}</b> <br />
//                     <small style={{ color: "#6b7280" }}> {item.email} </small>
//                   </TableCell>

//                   {/* Items */}
//                   <TableCell>
//                     {item.items.length} item(s) <br />
//                     <span style={{ color: "#6b7280" }}>
//                       {item.items.map(i => i.product).join(",")}
//                     </span>
//                   </TableCell>

//                   {/* Unit Price */}
//                   <TableCell>₹ {item.items.map(i => i.unitprice).join(", ")}</TableCell>

//                   {/* Total */}
//                   <TableCell>₹ {item.subtotal}</TableCell>

//                   {/* Payment Method */}
//                   <TableCell>
//                     <span style={{ background: "#e5e7eb", padding: "4px 10px", borderRadius: "20px",
//                         fontSize: "13px"
//                       }}>
//                       {item.method}
//                     </span>
//                   </TableCell>

//                   {/* Payment Status */}
//                   <TableCell>
//                     <span style={{ background: item.status === "Paid" ? "#22c55e" : "#f96216ff",
//                         padding: "4px 10px", borderRadius: "20px", fontSize: "13px",
//                         color: "#fff"
//                       }}>
//                       {item.status}
//                     </span>
//                   </TableCell>

//                   {/* Date */}
//                   <TableCell>{item.date}</TableCell>

//                   <TableCell>
//                     <Tooltip title="Bill">
//                       <IconButton
//                         sx={{ borderColor: "#22c55e", color: "#22c55e",
//                           "&:hover": { borderColor: "#16a34a", color: "#16a34a" }
//                         }}
//                         onClick={() => handleOpenBill(index)}
//                       >
//                         <FaFileInvoice />
//                       </IconButton>
//                     </Tooltip>
//                   </TableCell>
//                 </TableRow>
//               ))
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Bill Dialog */}
//       <Dialog open={billOpen} onClose={() => setBillOpen(false)} maxWidth="md" fullWidth>
//         <DialogTitle sx={{ textAlign: "center" }}>Invoice</DialogTitle>
//         <DialogContent dividers>
//           {billData && (
//             <>
//               <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
//                 <Box>
//                   <h2 style={{ margin: 0 }}>Company Name</h2>
//                   <p style={{ margin: 0, color: "#555" }}>Address Line 1</p>
//                   <p style={{ margin: 0, color: "#555" }}>Phone: 9876543210</p>
//                 </Box>
//                 <Box>
//                   <h2 style={{ margin: 0 }}>Invoice</h2>
//                   <p style={{ margin: 0, color: "#555" }}>
//                     {billData.invoice}
//                   </p>
//                   <p style={{ margin: 0, color: "#555" }}>Phone: <strong>{billData.phone}</strong></p>
//                 </Box>
//               </Box>
//             </>
//           )}
//         </DialogContent>
        
//         <DialogActions>
//           <Button onClick={() => setBillOpen(false)}>Close</Button>
//           <Button variant="contained" onClick={() => window.print()}>Print</Button>
//         </DialogActions>
//       </Dialog>
//     </Paper>
//   );
// };

// export default ViewSales;



import {
  Table, TableHead, TableRow, TableCell, TableBody,
  Paper, TableContainer, Tooltip, IconButton,
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, Divider, Box
} from "@mui/material";
import { useGlobal } from "./GlobalContext";
import { useState } from "react";
import { FaFileInvoice } from "react-icons/fa6";

const ViewSales = () => {
  const { sales } = useGlobal();

  const companyNumber = "9876504567"
  const companyEmail = "info@company.com" 

  const [billOpen, setBillOpen] = useState(false);
  const [billData, setBillData] = useState(null);

  // Generate random Invoice Number
  const generateInvoiceNumber = (date, index) => {
    // INV-20251208-01
    return `INV-${date.replaceAll("-","")}-${String(index + 1).padStart(2, "0")}`;
  };

  // Correct handling of bill
  const handleOpenBill = (item, index) => {
    const invoiceNumber = generateInvoiceNumber(item.date, index);
    setBillData({ ...item, invoice: invoiceNumber, });
    setBillOpen(true);
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <h3 style={{ margin: 0 }}>Sales ({sales.length})</h3>
      <p style={{ color: "#6b7280" }}>List of All Sales</p>

      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ width: "100%" }}>
          <TableHead
            sx={{
              background: "#1e293b",
              "& .MuiTableCell-root": {
                color: "#fff",
                fontSize: "16px",
                fontWeight: 600
              }
            }}
          >
            <TableRow>
              <TableCell>Invoice #</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Items</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Payment In</TableCell>
              <TableCell>Payment Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Invoice</TableCell>
            </TableRow>
          </TableHead>

          <TableBody
            sx={{
              background: "linear-gradient(180deg, #F9F9FB 0%, #f3f3f3 100%)",
              "& .MuiTableCell-root": {
                color: "#000",
                fontSize: "16px",
                borderBottom: "1px solid rgba(0, 0, 0, 0.2)"
              }
            }}
          >
            {sales.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} align="center" sx={{ py: 10 }}>
                  No sales added yet
                </TableCell>
              </TableRow>
            ) : (
              sales.map((item, index) => (
                <TableRow key={index}>

                  {/* Invoice number (generated live for table display only) */}
                  <TableCell>{generateInvoiceNumber(item.date, index)}</TableCell>

                  <TableCell>
                    <b>{item.customername}</b>
                    <br />
                    <small style={{ color: "#6b7280" }}>{item.email}</small>
                  </TableCell>

                  <TableCell>
                    {item.items.length} item(s) <br />
                    <span style={{ color: "#6b7280" }}>
                      {item.items.map((i) => i.product).join(", ")}
                    </span>
                  </TableCell>

                  <TableCell>
                    ₹ {item.items.map((i) => i.unitprice).join(", ")}
                  </TableCell>

                  <TableCell>₹ {item.subtotal}</TableCell>

                  <TableCell>
                    <span
                      style={{
                        background: "#e5e7eb",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        fontSize: "13px"
                      }}
                    >
                      {item.method}
                    </span>
                  </TableCell>

                  <TableCell>
                    <span
                      style={{
                        background:
                          item.status === "Paid" ? "#22c55e" : "#f96216ff",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        fontSize: "13px",
                        color: "#fff"
                      }}
                    >
                      {item.status}
                    </span>
                  </TableCell>

                  <TableCell>{item.date}</TableCell>

                  <TableCell>
                    <Tooltip title="Bill">
                      <IconButton
                        sx={{
                          borderColor: "#22c55e",
                          color: "#22c55e",
                          "&:hover": {
                            borderColor: "#16a34a",
                            color: "#16a34a"
                          }
                        }}
                        onClick={() => handleOpenBill(item, index)}
                      >
                        <FaFileInvoice />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Bill Dialog */}
      <Dialog open={billOpen} onClose={() => setBillOpen(false)} maxWidth="md" fullWidth sx={{zIndex: 2000}}>
        <Box sx={{ background:"#f5f7fa", p: 3}}>
          <DialogTitle sx={{ textAlign: "center" }}>Invoice</DialogTitle>
          <DialogContent dividers>
            {billData && (
              <>
                <Box component={Paper} elevation={0} sx={{ p: 4, display: "flex", justifyContent: "space-between", mb: 3 }}>
                  <Box>
                    <h2 style={{ marginBottom: 0 }}> <strong>Company Name</strong> </h2>
                    <p style={{ margin: 0 }}>Address Line 1</p>
                    <p style={{ margin: 0 }}> <strong>Phone: </strong> {companyNumber}</p>
                    <p style={{ margin: 0 }}> <strong>Email: </strong> {companyEmail  }</p>
                  </Box>

                  <Box>
                    <h2 style={{ marginBottom: 0 }}>Invoice</h2>
                    <p style={{ margin: 0 }}> <strong>Invoice #: </strong> {billData.invoice} </p>
                    <p style={{ margin: 0 }}> <strong>Date: </strong> {billData.date} </p>
                    <p style={{ margin: 0 }}> <strong>Status: </strong> {billData.status} </p>
                  </Box>
                </Box>

                <Box sx={{display: "flex", justifyContent:"space-between", gap: 3}}>
                  <Box component={Paper} elevation={0} sx={{px: 4, py: 2, width: "50%"}}>
                    <h2> <strong>Bill To:</strong> </h2>
                    <p style={{margin: 0}}> <strong>Customer Name: </strong> {billData.customername}</p>
                    <p style={{margin: 0}}> <strong>Email: </strong> {billData.email}</p>
                    <p style={{margin: 0}}> <strong>Phone: </strong> {billData.phone}</p>
                    <p style={{margin: 0}}> <strong>Address: </strong> {billData.address}</p>
                  </Box>
                  
                  <Box component={Paper} elevation={0} sx={{px: 4, py: 2, width: "50%"}}>
                    <h2> <strong>Payment Status:</strong> </h2>
                    <p style={{margin: 0}}> <strong>Payment Method: </strong> {billData.method}</p>
                    <p style={{margin: 0 }}>
                      <strong>Payment Status: </strong> 
                      <span style={{ background: billData.status === "Paid" ? "#a8ffc8ff" : "#f96216ff",
                          padding: "4px 10px", fontWeight: 600,
                          borderRadius: "20px",
                          fontSize: "13px",
                          color: "#008731ff"}}>
                        {billData.status}
                      </span>
                    </p>
                  </Box>
                </Box>

                <Divider sx={{my: 2}} /><br />

                <Table>
                  <TableHead sx={{ 
                        "& .MuiTableCell-root": { color: "#000", fontSize: "16px" }
                      }}
                    >
                    <TableRow>
                      <TableCell><strong>Items</strong></TableCell>
                      <TableCell><strong>Quantity</strong></TableCell>
                      <TableCell><strong>Unit Price</strong></TableCell>
                      <TableCell><strong>Total</strong></TableCell>
                    </TableRow>
                  </TableHead>
                
                  <TableBody>
                    {/* List existing items */}
                    {billData.items.map((it, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{it.product}</TableCell>
                        <TableCell>{it.quantity}</TableCell>
                        <TableCell>{it.unitprice}</TableCell>
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

                <Box sx={{textAlign: "center", color: "#808080", mt: "50px"}}>
                  <p style={{margin: 0, fontSize: "14.5px"}}>Thank you for your business!</p>
                  <p style={{margin: 0, fontSize: "14.5px"}}>This is a computer-generated invoice.</p>
                </Box>
              </>
            )}

          </DialogContent>

          <DialogActions sx={{mt:2}}>
            <Button onClick={() => setBillOpen(false)} sx={{color: "#0f172a"}}>Close</Button>
            <Button variant="contained" onClick={() => window.print()}
              sx={{ background: "#1e293b", "&:hover": { background: "#0f172a" } }}
              >
              Print
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Paper>
  );
};

export default ViewSales;


