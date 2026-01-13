import { useDispatch, useSelector } from "react-redux"
import {
  Table, TableHead, TableRow, TableCell, TableBody,
  Paper, TableContainer, Tooltip, IconButton,
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, Divider, Box
} from "@mui/material";
import { FaFileInvoice } from "react-icons/fa6";
import { setBillData, setBillOpen } from "./salesSlice";

const ViewSales = () => {
    const { list: sales, billData, billOpen } = useSelector((state) => state.sales);
    const dispatch = useDispatch();

    const companyNumber = "9876504567"
    const companyEmail = "info@company.com" 

    // Correct handling of bill
    const handleOpenBill = (item) => { 
        if (document.activeElement) document.activeElement.blur();
        dispatch(setBillData(item));
        dispatch(setBillOpen(true));
    };

    return(
        <Paper sx={{ p: 3, borderRadius: 3 }}>
            <h3 style={{ margin: 0 }}>Sales ({sales.length})</h3>
            <p style={{ color: "#6b7280" }}>View All Sales</p>

            <TableContainer component={Paper} elevation={0} sx={{overflowX: "auto", maxWidth: 944}}>
                <Table sx={{ width: "100%" }}>
                    <TableHead
                        sx={{ background: "#1e293b",
                            "& .MuiTableCell-root": { color: "#fff", fontSize: "16px", 
                                fontWeight: 600, borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                                whiteSpace: "nowrap" 
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
                        sx={{ background: "linear-gradient(180deg, #F9F9FB 0%, #f3f3f3 100%)",
                            "& .MuiTableCell-root": { color: "#000", fontSize: "16px",
                                borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                                borderRight: "1px solid rgba(126, 126, 126, 0.1)",
                                whiteSpace: "nowrap"
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
                            sales.map((item, index) => {
                                // Parse items if it's a string
                                const itemsList = typeof item.items === 'string' 
                                    ? JSON.parse(item.items || "[]") 
                                    : (Array.isArray(item.items) ? item.items : []);

                               return (
                                    <TableRow key={item._id ?? index}>

                                        {/* Invoice number (generated live for table display only) */}
                                        <TableCell><strong>{item.invoice}</strong></TableCell>

                                        <TableCell>
                                            <b>{item.customer}</b> <br />
                                            <small style={{ color: "#6b7280" }}>{item.email}</small>
                                        </TableCell>

                                        <TableCell>
                                            {itemsList.length} item(s) <br />
                                            <span style={{ color: "#6b7280" }}>
                                                {itemsList.map(i => i.product).join(", ")}
                                                (<small>x</small>{itemsList.map(i => i.quantity).join(", ")})
                                            </span>
                                        </TableCell>

                                        <TableCell>
                                            ₹ {itemsList.map(i => i.unitprice).join(", ")}
                                        </TableCell>

                                        <TableCell>₹ {item.subtotal}</TableCell>

                                        <TableCell>
                                            <span
                                                style={{ background: "#e5e7eb", padding: "4px 10px", borderRadius: "20px",
                                                    fontSize: "13px"
                                                }}
                                            >
                                                {item.method}
                                            </span>
                                        </TableCell>

                                        <TableCell>
                                            <span
                                                style={{
                                                    background: item.status === "Paid" ? "#22c55e" : "#f96216ff",
                                                    padding: "4px 10px", borderRadius: "20px", fontSize: "13px",
                                                    color: "#fff"
                                                }}
                                            >
                                                {item.status}
                                            </span>
                                        </TableCell>

                                        <TableCell>{item.date.split("T")[0]}</TableCell>

                                        <TableCell>
                                            <Tooltip title="Bill / Invoice" component={Paper} 
                                                slotProps={{
                                                    tooltip: {
                                                        sx:{ fontSize: "12px", px: 2, color:"#16a34a", background: "#e5ffeeff",
                                                            letterSpacing: 1, fontWeight: 600
                                                        }
                                                    }
                                                }}
                                            >
                                                <IconButton
                                                    sx={{ background: "#fff", color: "#16a34a", transition: "0.2s ease-in-out",
                                                        "&:hover": { background: "#16a34a", color: "#fff" }
                                                    }}
                                                    onClick={() => handleOpenBill(item)}
                                                >
                                                    <FaFileInvoice />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                               )
                            })
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Bill Dialog */}
            <Dialog open={billOpen} onClose={() => dispatch(setBillOpen(false))} maxWidth="md" fullWidth sx={{zIndex: 2000}}>
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
                                        <p style={{ margin: 0 }}> <strong>Date: </strong> {billData.date.split("T")[0]} </p>
                                        <p style={{ margin: 0 }}> <strong>Status: </strong> {billData.status} </p>
                                    </Box>
                                </Box>

                                <Box sx={{display: "flex", justifyContent:"space-between", gap: 3}}>
                                    <Box component={Paper} elevation={0} sx={{px: 4, py: 2, width: "50%"}}>
                                        <h2> <strong>Bill To:</strong> </h2>
                                        <p style={{margin: 0}}> <strong>Customer Name: </strong> {billData.customer}</p>
                                        <p style={{margin: 0}}> <strong>Email: </strong> {billData.email}</p>
                                        <p style={{margin: 0}}> <strong>Phone: </strong> {billData.phone}</p>
                                        <p style={{margin: 0}}> <strong>Address: </strong> {billData.address}</p>
                                    </Box>
                                    
                                    <Box component={Paper} elevation={0} sx={{px: 4, py: 2, width: "50%"}}>
                                        <h2> <strong>Payment Status:</strong> </h2>
                                        <p style={{margin: 0}}> <strong>Payment Method: </strong> {billData.method}</p>
                                        <p style={{margin: 0 }}>
                                        <strong>Payment Status: </strong> 
                                        <span style={{ background: billData.status === "Paid" ? "#22c55e" : "#f96216ff",
                                                padding: "4px 10px", fontWeight: 600, borderRadius: "20px", fontSize: "13px",
                                                color: "#fff"
                                            }}
                                        >
                                            {billData.status}
                                        </span>
                                        </p>
                                    </Box>
                                </Box>

                                <Divider sx={{my: 2}} /><br />

                                {/* List existing items */}
                                {(() => {
                                    const billItems =
                                        typeof billData.items === "string"
                                            ? JSON.parse(billData.items || "[]")
                                            : Array.isArray(billData.items) ? billData.items : [];

                                    return (
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
                                            {billItems.map((it, idx) => (
                                                <TableRow key={idx}>
                                                <TableCell>{it.product}</TableCell>
                                                <TableCell>{it.quantity}</TableCell>
                                                <TableCell>₹ {it.unitprice}</TableCell>
                                                <TableCell>
                                                    ₹ {it.total ?? it.quantity * it.unitprice}
                                                </TableCell>
                                                </TableRow>
                                            ))}

                                            {/* Total row */}
                                            <TableRow>
                                                <TableCell colSpan={3} align="right" sx={{ fontSize: "16px" }}>
                                                    <strong>Total:</strong>
                                                </TableCell>
                                                <TableCell sx={{ fontSize: "16px" }}>
                                                    <b>₹ {billData.subtotal}</b>
                                                </TableCell>
                                            </TableRow>
                                            </TableBody>
                                        </Table>
                                    );
                                })()}

                                <Box sx={{textAlign: "center", color: "#808080", mt: "50px"}}>
                                    <p style={{margin: 0, fontSize: "14.5px"}}>Thank you for your business!</p>
                                    <p style={{margin: 0, fontSize: "14.5px"}}>This is a computer-generated invoice.</p>
                                </Box>
                            </>
                        )}

                    </DialogContent>

                    <DialogActions sx={{mt:2}}>
                        <Button onClick={() => dispatch(setBillOpen(false))} sx={{color: "#0f172a"}}>Close</Button>
                        <Button variant="contained" onClick={() => window.print()}
                            sx={{ background: "#1e293b", "&:hover": { background: "#0f172a" } }}
                        >
                            Print
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </Paper>
    )
}

export default ViewSales