import { Table, TableHead, TableRow, TableCell, TableBody, Paper, TableContainer } from "@mui/material";
import { useSelector } from "react-redux";


const ViewUser = () => {
    const { list: users } = useSelector((state) => state.user);

    return (
        <Paper sx={{ p: 3, borderRadius: 3 }}>
            <h3 style={{margin:0}}>Users ({users.length})</h3>
            <p style={{ color: "#6b7280", margin: 0 }}> List of All Users </p> <br />

            <TableContainer>
                <Table>
                    <TableHead sx={{ background: "#1e293b",
                            "& .MuiTableCell-root": { color: "#fff", fontSize: "16px", fontWeight: 600 }
                        }}>
                        <TableRow>
                            <TableCell>Full Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Phone</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody sx={{
                            background: "linear-gradient(180deg,#F9F9FB 0%, #f3f3f3ff 100%)",
                            "& .MuiTableCell-root": { color: "#000000ff", fontSize: "16px",
                                borderBottom: "1px solid rgba(0, 0, 0, 0.2)"
                            }
                        }}>
                        {users.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} align="center" sx={{ py: 10 }}>
                                No users added yet
                                </TableCell>
                            </TableRow>
                        ) : (
                                users.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.fullname}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.role}</TableCell>
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

export default ViewUser;
