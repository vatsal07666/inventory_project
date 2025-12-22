import { Table, TableHead, TableRow, TableCell, TableBody, Paper, TableContainer } from "@mui/material";
import { useSelector } from "react-redux";


const ViewPurchase = () => {
    const { list: purchases } = useSelector((state) => state.purchase);

    return (
        <Paper sx={{ p: 3, borderRadius: 3 }}>
            <h3 style={{margin:0}}>Purchases ({purchases.length})</h3>
            <p style={{ color: "#6b7280", margin: 0 }}> List of All Purchases </p> <br />

            <TableContainer>
                <Table>
                    <TableHead sx={{ background: "#1e293b",
                            "& .MuiTableCell-root": { color: "#fff", fontSize: "16px", fontWeight: 600 }
                        }}>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Supplier</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Purchase Price</TableCell>
                            <TableCell>Purchase Date</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody sx={{
                            background: "linear-gradient(180deg,#F9F9FB 0%, #f3f3f3ff 100%)",
                            "& .MuiTableCell-root": { color: "#000000ff", fontSize: "16px",
                                borderBottom: "1px solid rgba(0, 0, 0, 0.2)"
                            }
                        }}>
                        {purchases.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} align="center" sx={{ py: 10 }}>
                                No purchases added yet
                                </TableCell>
                            </TableRow>
                        ) : (
                                purchases.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.product}</TableCell>
                                        <TableCell>{item.category}</TableCell>
                                        <TableCell>{item.supplier}</TableCell>
                                        <TableCell>{item.quantity}</TableCell>
                                        <TableCell>₹ {item.price}</TableCell>
                                        <TableCell>{item.purchaseDate}</TableCell>
                                    </TableRow>
                                ))
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default ViewPurchase;
