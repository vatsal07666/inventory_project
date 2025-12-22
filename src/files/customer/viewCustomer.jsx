import { Table, TableHead, TableRow, TableCell, TableBody, Paper, TableContainer } from "@mui/material";
import { useSelector } from "react-redux";


const ViewCustomer = () => {
    const { list: customers } = useSelector((state) => state.customer);

    return (
        <Paper sx={{ p: 3, borderRadius: 3 }}>
            <h3 style={{margin:0}}>Customers ({customers.length})</h3>
            <p style={{ color: "#6b7280", margin: 0 }}> List of All Customers </p> <br />

            <TableContainer>
                <Table>
                    <TableHead sx={{ background: "#1e293b",
                            "& .MuiTableCell-root": { color: "#fff", fontSize: "16px", fontWeight: 600 }
                        }}>
                        <TableRow>
                            <TableCell>Customer Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Phone</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody sx={{
                            background: "linear-gradient(180deg,#F9F9FB 0%, #f3f3f3ff 100%)",
                            "& .MuiTableCell-root": { color: "#000000ff", fontSize: "16px",
                                borderBottom: "1px solid rgba(0, 0, 0, 0.2)"
                            }
                        }}>
                        {customers.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} align="center" sx={{ py: 10 }}>
                                No customers added yet
                                </TableCell>
                            </TableRow>
                        ) : (
                                customers.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.customer}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.address}</TableCell>
                                        <TableCell>{item.phone}</TableCell>
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

export default ViewCustomer;
