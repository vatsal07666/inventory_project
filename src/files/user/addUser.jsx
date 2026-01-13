import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Divider, Table, TableHead,
    TableRow, TableCell, TableBody, Paper, TableContainer, Box, IconButton, Tooltip
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, resetDeleteState, resetUIState, setDeleteId, setDeleteOpen, setEditId, setOpen, setUser, updateUser } from "./userSlice";
import axios from "axios";
import { useCallback, useEffect } from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
    const { list: users = [], open, editId, deleteOpen, deleteId } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const roles = ["Admin", "Manager", "Customer"];

    const initialValues = { fullname: "", email: "", role: "", phone: "" };

    const validationSchema = Yup.object({
        fullname: Yup.string().required("Product is required*"),
        email: Yup.string().email("Enter a valid email").required("Email is requaired*"),
        role: Yup.string().required("Choose role"),
        phone: Yup.string().matches(/^[0-9]{10}$/, "Phone must be exactly 10 digits*").required("Phone is Requaired*"),
    });

    const token = "gyJe9cJXUdjCoaX0";
    const headers = { Authorization: token, "Content-Type": "application/json" };
    
    // ---------- GET ----------
    const fetchUser = useCallback(() => {
        axios.get("https://generateapi.techsnack.online/api/user", { 
            headers: { Authorization: token, "Content-Type": "application/json" }
        })
        .then((getRes) => {
            console.log("GET response:", getRes.data);
            dispatch(setUser(getRes.data.Data));
        })
        .catch((err) => {
            console.error("GET error:", err);
        })
    }, [dispatch])

    useEffect(() => {
        fetchUser();
    }, [fetchUser])

    const handleSubmit = (values, { resetForm }) => {
        const userData = {  
            fullname: values.fullname,
            email: values.email,
            role: values.role,
            phone: Number(values.phone) 
        };

        if(editId !== null) {
            // ---------- PATCH ----------
            axios.patch( `https://generateapi.techsnack.online/api/user/${editId}`, 
                userData, { headers } 
            )
            .then((patchRes) => {
                console.log("PATCH response:", patchRes.data);
                dispatch(updateUser(patchRes.data.Data));
                resetForm();
                dispatch(resetUIState());
                toast.success("User Updated Successfully....");
                fetchUser();
            })
            .catch(() => toast.error("Failed to Update User!"))
        } else {
            // ---------- POST ----------
            axios.post( "https://generateapi.techsnack.online/api/user", userData, 
                {headers} 
            )
            .then((postRes) => {
                console.log("POST response: ", postRes.data);
                dispatch(addUser(postRes.data.Data));
                toast.success("User Added Successfully....");
                resetForm();
                dispatch(resetUIState());
                fetchUser();
            })
            .catch(() => toast.error("Failed to Add User!"))
        }
    };

    // ---------- DELETE ----------
    const confirmDelete = () => {
        if (document.activeElement) document.activeElement.blur();
        axios.delete( `https://generateapi.techsnack.online/api/user/${deleteId}`, 
            { headers } 
        )
        .then(() => {
            dispatch(deleteUser(deleteId));
            dispatch(resetDeleteState());
            toast.success("User Deleted Successfully....")
            fetchUser();
        })
        .catch(() => toast.error("Failed to Delete User!"))
    }

    const handleDelete = (item) => {
        if (document.activeElement) document.activeElement.blur();
        dispatch(setDeleteOpen(true));
        dispatch(setDeleteId(item._id));
    }

    const handleEdit = (item) => {
        if (document.activeElement) document.activeElement.blur();
        dispatch(setOpen(true));
        dispatch(setEditId(item._id));
    }

    const handleOpenDialog = () => { 
        if (document.activeElement) document.activeElement.blur();
        dispatch(setOpen(true)) 
    };

    const editUser = editId ? users.find(item => item._id === editId) : initialValues;

    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2>Users</h2>
                <Button variant="contained" onClick={handleOpenDialog}
                    sx={{ background: "#1e293b", fontSize: "16px", fontWeight: 600, 
                        "&:hover": { background: "#0f172a" } 
                    }}
                >
                    <AddIcon /> &nbsp; Add User
                </Button>
            </Box>

            <Dialog open={open} onClose={() => dispatch(resetUIState())} sx={{ zIndex: 2000 }} maxWidth="md" fullWidth>
                <DialogTitle sx={{ fontWeight: 700 }}>
                    {editId !== null ? "Edit User Details" : "Add New User"}
                </DialogTitle>

                <Divider />

                <DialogContent sx={{ mt: 1 }}>
                    <Formik
                        initialValues={editUser}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        enableReinitialize
                    >
                        {() => (
                            <Form>
                                {/* First Row: Fullname & Email */}
                                <Box sx={{ display: "flex", justifyContent: "space-between", gap: 3, mb: 2 }}>
                                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{ fontWeight: 600 }}>Full Name</label>
                                        <Field name="fullname" as="input" placeholder="Enter fullname"
                                            style={{ padding: "12px 14px", border: "1px solid #ccc", 
                                                borderRadius: "8px", fontSize: "16px" }}
                                        />
                                        <ErrorMessage name="fullname" component="small" style={{ color: "red", fontWeight: 600 }} />
                                    </Box>
                                    
                                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{ fontWeight: 600 }}>Email</label>
                                        <Field name="email" type="email" placeholder="Enter Email"
                                            style={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", 
                                                    fontSize: "16px" }}
                                        />
                                        <ErrorMessage name="email" component="small" style={{ color: "red", fontWeight: 600 }} />
                                    </Box>
                                </Box>

                                <br />

                                {/* Second Row: Role & Phone */}
                                <Box sx={{ display: "flex", justifyContent: "space-between", gap: 3, mb: 2 }}>
                                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{ fontWeight: 600 }}>Role</label>
                                        <Field name="role" as="select"
                                            style={{ padding: "12px 14px", border: "1px solid #ccc", 
                                                borderRadius: "8px", fontSize: "16px" }}
                                        >
                                            <option value="" disabled>Select Role</option>
                                            {roles.map((rol) => <option key={rol} value={rol}>{rol}</option>)}
                                        </Field>
                                        <ErrorMessage name="category" component="small" style={{ color: "red", fontWeight: 600 }} />
                                    </Box>

                                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{ fontWeight: 600 }}>Phone</label>
                                        <Field name="phone" as="input" inputMode="numeric" placeholder="Enter Phone"
                                            style={{ padding: "12px 14px", border: "1px solid #ccc", 
                                                borderRadius: "8px", fontSize: "16px" }}
                                        />
                                        <ErrorMessage name="phone" component="small" style={{ color: "red", fontWeight: 600 }} />
                                    </Box>
                                </Box>

                                <DialogActions>
                                    <Button onClick={() => dispatch(resetUIState())} sx={{ color: "#1e293b" }}>
                                        Cancel
                                    </Button>
                                    
                                    <Button type="submit" variant="contained" 
                                        sx={{ background: "#1e293b", "&:hover": { background: "#0f172a" } }}
                                    >
                                        {editId !== null ? "Update" : "Save"}
                                    </Button>
                                </DialogActions>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog>

            {/* Table section remains the same */}
            <Divider sx={{ my: 3 }} />
            
            {/* PRODUCT TABLE */}
            <h2>User List</h2>

            <Paper sx={{ p: 3, borderRadius: 3 }}>
                <h3 style={{margin:0}}>Users ({users.length})</h3>
                <p style={{ color: "#6b7280", margin: 0 }}> List of All Users </p> <br />

                <TableContainer component={Paper} elevation={0} sx={{overflowX: "auto", maxWidth: 944}}>
                    <Table sx={{width: "100%"}}>
                        <TableHead
                            sx={{ background: "#1e293b",
                                "& .MuiTableCell-root": { color: "#fff", fontSize: "16px", 
                                    borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                                    whiteSpace: "nowrap"
                                }
                            }}
                        >
                            <TableRow>
                                <TableCell><strong>Full Name</strong></TableCell>
                                <TableCell><strong>Email</strong></TableCell>
                                <TableCell><strong>Role</strong></TableCell>
                                <TableCell><strong>Phone</strong></TableCell>
                                <TableCell><strong>Actions</strong></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody
                            sx={{
                                background: "linear-gradient(180deg, #F9F9FB 0%, #f3f3f3ff 100%)",
                                "& .MuiTableCell-root": { color: "#000000ff", fontSize: "15px",
                                    borderBottom: "1px solid rgba(0, 0, 0, 0.1)", letterSpacing: 0.5,
                                    borderRight: "1px solid rgba(126, 126, 126, 0.1)", whiteSpace: "noWrap"
                                }
                            }}
                        >
                        {users.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={8} align="center" sx={{ py: 10 }}>
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
                                    <TableCell>
                                        <Box sx={{display:"flex", gap: 1}}>
                                            {/* Delete */}
                                            <Tooltip title="Delete" component={Paper}
                                                slotProps={{
                                                    tooltip: {
                                                        sx:{ fontSize: "12px", px: 2, color:"#ef4444", background: "#ffddddff",
                                                            letterSpacing: 1, fontWeight: 600
                                                        }
                                                    }
                                                }}
                                            >
                                            <IconButton onClick={() => handleDelete(item)}
                                                    sx={{
                                                        background:"#fff", color: "#ef4444", transition: "0.2s",
                                                        "&:hover": { background: "#dc2626", color:"#fff" }
                                                    }}
                                                >
                                                    <RiDeleteBin6Line />
                                                </IconButton>
                                            </Tooltip>
                                            
                                            {/* Edit */}
                                            <Tooltip title="Edit" component={Paper}
                                                slotProps={{
                                                    tooltip: {
                                                        sx:{ fontSize: "12px", px: 2, color:"#2563eb", background: "#dee9ffff",
                                                            letterSpacing: 1, fontWeight: 600
                                                        }
                                                    }
                                                }}
                                            >
                                            <IconButton
                                                    sx={{
                                                        background: "#fff", color:"#2563eb", transition: "0.2s",
                                                        "&:hover": { background: "#2563eb", color:"#fff" }
                                                    }}
                                                    onClick={() => handleEdit(item)}
                                                >
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

            {/* DELETE CONFIRMATION POPUP */}
            <Dialog open={deleteOpen} onClose={() => dispatch(setDeleteOpen(false))}>
                <DialogTitle sx={{ fontWeight: 600 }}>
                    Delete User?
                </DialogTitle>

                <DialogContent>
                    <p style={{ fontSize: "16px" }}>
                        Are you sure you want to delete this user?
                    </p>
                </DialogContent>

                <DialogActions>
                    <Button sx={{color:"#1e293b"}} onClick={() => dispatch(setDeleteOpen(false))}>Cancel</Button>
                    <Button onClick={confirmDelete} variant="contained"
                        sx={{ background: "#ef4444" }}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

        </Box>
    );
};

export default AddProduct;