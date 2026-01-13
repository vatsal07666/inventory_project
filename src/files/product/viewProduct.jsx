import { Table, TableHead, TableRow, TableCell, TableBody, Paper, TableContainer } from "@mui/material";
import { useSelector } from "react-redux";


const ViewProduct = () => {
    const { list: products } = useSelector((state) => state.product);

    return (
        <Paper sx={{ p: 3, borderRadius: 3 }}>
            <h3 style={{margin:0}}>Products ({products.length})</h3>
            <p style={{ color: "#6b7280", margin: 0 }}> List of All Products </p> <br />

            <TableContainer sx={{overflowX: "auto", maxWidth: 944}}>
                <Table sx={{width: "100%"}}>
                    <TableHead sx={{ background: "#1e293b",
                            "& .MuiTableCell-root": { color: "#fff", fontSize: "16px",
                                fontWeight: 600, borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                                whiteSpace: "nowrap"
                            }
                        }}
                    >
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell>SKU</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Supplier</TableCell>
                            <TableCell>Stock</TableCell>
                            <TableCell>Cost Price</TableCell>
                            <TableCell>Selling Price</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody sx={{
                            background: "linear-gradient(180deg,#F9F9FB 0%, #f3f3f3ff 100%)",
                            "& .MuiTableCell-root": { color: "#000000ff", fontSize: "16px",
                                borderBottom: "1px solid rgba(0, 0, 0, 0.2)", 
                                borderRight: "1px solid rgba(126, 126, 126, 0.1)",
                                whiteSpace: "nowrap"
                            }
                        }}>
                        {products.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} align="center" sx={{ py: 10 }}>
                                No products added yet
                                </TableCell>
                            </TableRow>
                        ) : (
                                products.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.productname}</TableCell>
                                        <TableCell>{item.sku}</TableCell>
                                        <TableCell>{item.category}</TableCell>
                                        <TableCell>{item.supplier}</TableCell>
                                        <TableCell>{item.stock} units</TableCell>
                                        <TableCell>₹ {item.costprice}</TableCell>
                                        <TableCell>₹ {item.sellingprice}</TableCell>
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

export default ViewProduct;
