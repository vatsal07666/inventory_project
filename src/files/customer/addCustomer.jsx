import {
  Dialog, DialogTitle, DialogContent, DialogActions, Button, Divider, Table, TableHead, TableRow, TableCell, 
  TableBody, Paper, TableContainer, Box, IconButton, Tooltip,
} from "@mui/material";
import * as Yup from "yup";
import AddIcon from "@mui/icons-material/Add";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer, deleteCustomer, resetDeleteState, resetUIState, setCustomer, setDeleteId, setDeleteOpen, setEditId, setOpen, updateCustomer } from "./customerSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { useCallback, useEffect } from "react";

const AddCustomer = () => {
    const { list: customers = [], open, editId, deleteOpen, deleteId } = useSelector((state) => state.customer);
    const dispatch = useDispatch();

    const initialValues = { customer: "", email: "", address: "", phone: "" }

    const validationSchema = Yup.object({
        customer: Yup.string().required("Customer is required*"),
        email: Yup.string().email("Enter a valid email*").required("Email is required*"),
        address: Yup.string().required("Address is required*"),
        phone: Yup.string().matches(/^[0-9]{10}$/, "Phone must be exactly 10 digits*")
            .required("Phone is Requaired*"),
    });

    const token = "VnE3L3X3en8nd34P";
    const headers = { Authorization: token, "Content-Type": "application/json" };

    // ---------- GET ----------
    const fetchCustomer = useCallback(() => {
        axios.get("https://generateapi.techsnack.online/api/customer", { 
            headers: { Authorization: token, "Content-Type": "application/json" }
        })
        .then((getRes) => {
            console.log("GET response:", getRes.data);
            dispatch(setCustomer(getRes.data.Data));
        })
        .catch((err) => {
            console.error("GET error:", err);
        })
    }, [dispatch])

    useEffect(() => {
        fetchCustomer();
    }, [fetchCustomer])
    
    const handleSubmit = (values, { resetForm }) => {
        const customerData = { 
            customer: values.customer, 
            email: values.customer,
            address: values.address,
            phone: Number(values.phone) 
        };

        if(editId !== null) {
            // ---------- PATCH ----------
            axios.patch( `https://generateapi.techsnack.online/api/customer/${editId}`, 
                customerData, { headers } 
            )
            .then((patchRes) => {
                console.log("PATCH response:", patchRes.data);
                dispatch(updateCustomer(patchRes.data.Data));
                resetForm();
                dispatch(resetUIState());
                toast.success("Customer Updated Successfully....");
                fetchCustomer();
            })
            .catch(() => toast.error("Failed to Update Customer!"))
        } else {
            // ---------- POST ----------
            axios.post( "https://generateapi.techsnack.online/api/customer", customerData, 
                {headers} 
            )
            .then((postRes) => {
                console.log("POST response: ", postRes.data);
                dispatch(addCustomer(postRes.data.Data));
                toast.success("Customer Added Successfully....");
                resetForm();
                dispatch(resetUIState());
                fetchCustomer();
            })
            .catch(() => toast.error("Failed to Add Customer!"))
        }
    };
    
    // ---------- DELETE ----------
    const confirmDelete = () => {
        if (document.activeElement) document.activeElement.blur();
        axios.delete( `https://generateapi.techsnack.online/api/customer/${deleteId}`, 
            { headers } 
        )
        .then(() => {
            dispatch(deleteCustomer(deleteId));
            dispatch(resetDeleteState());
            toast.success("Customer Deleted Successfully....")
            fetchCustomer();
        })
        .catch(() => toast.error("Failed to Delete Customer!"))
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

    const editCustomer = editId ? customers.find(item => item._id === editId) : initialValues;

    return(
        <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2>Customers</h2>
                <Button variant="contained" onClick={handleOpenDialog}
                    sx={{ background: "#1e293b", fontSize: "16px", fontWeight: 600, 
                        "&:hover": { background: "#0f172a" } 
                    }}
                >
                    <AddIcon /> &nbsp; Add Customer
                </Button>
            </Box>
        
            <Dialog open={open} onClose={() => dispatch(resetUIState())} sx={{ zIndex: 2000 }} maxWidth="md" fullWidth>
                <DialogTitle sx={{ fontWeight: 700 }}>
                    {editId !== null ? "Edit Customer Details" : "Add New Customer"}
                </DialogTitle>
            
                <Divider />
            
                <DialogContent sx={{ mt: 1 }}>
                    <Formik
                        initialValues={editCustomer}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        enableReinitialize
                    >
                        {() => (
                            <Form>
                                {/* First Row: Customer & Email */}
                                <Box sx={{ display: "flex", justifyContent: "space-between", gap: 3, mb: 2 }}>
                                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{ fontWeight: 600 }}>Customer Name</label>
                                        <Field name="customer" as="input" placeholder="Enter Customer name"
                                            style={{ padding: "12px 14px", border: "1px solid #ccc", 
                                                borderRadius: "8px", fontSize: "16px" }}
                                        />
                                        <ErrorMessage name="customer" component="small" style={{ color: "red", fontWeight: 600 }} />
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

                                {/* Second Row: Address & Phone */}
                                
                                <Box sx={{ display: "flex", justifyContent: "space-between", gap: 3, mb: 2 }}>
                                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{ fontWeight: 600 }}>Address</label>
                                        <Field name="address" as="textarea" placeholder="Enter Address"
                                            style={{ padding: "12px 14px", border: "1px solid #ccc", 
                                                borderRadius: "8px", fontSize: "16px", fontFamily: "Arial, sans-serif" }}
                                        />
                                        <ErrorMessage name="address" component="small" style={{ color: "red", fontWeight: 600 }} />
                                    </Box>
                                    
                                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{ fontWeight: 600 }}>Phone</label>
                                        <Field name="phone" type="number" placeholder="Enter Phone"
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

            {/* CUSTOMER TABLE */}
            <h2>Customer List</h2>

            <Paper sx={{ p: 3, borderRadius: 3 }}>
                <h3 style={{margin:0}}>Customers ({customers.length})</h3>
                <p style={{ color: "#6b7280", margin: 0 }}> List of All Customers </p> <br />

                <TableContainer component={Paper} elevation={0}>
                    <Table>
                        <TableHead
                            sx={{ background: "#1e293b",
                                "& .MuiTableCell-root": { color: "#fff", fontSize: "16px", 
                                    borderRight: "1px solid rgba(255, 255, 255, 0.1)"
                                }
                            }}
                        >
                            <TableRow>
                                <TableCell><strong>Customer</strong></TableCell>
                                <TableCell><strong>Email</strong></TableCell>
                                <TableCell><strong>Address</strong></TableCell>
                                <TableCell><strong>Phone</strong></TableCell>
                                <TableCell><strong>Actions</strong></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody
                            sx={{
                                background: "linear-gradient(180deg, #F9F9FB 0%, #f3f3f3ff 100%)",
                                "& .MuiTableCell-root": { color: "#000000ff", fontSize: "15px",
                                    borderBottom: "1px solid rgba(0, 0, 0, 0.1)", letterSpacing: 0.5,
                                    borderRight: "1px solid rgba(126, 126, 126, 0.1)"
                                }
                            }}
                        >
                        {customers.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={8} align="center" sx={{ py: 10 }}>
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
                    Delete Customer?
                </DialogTitle>

                <DialogContent>
                    <p style={{ fontSize: "16px" }}>
                        Are you sure you want to delete this customer?
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
    )
}

export default AddCustomer;