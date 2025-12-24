import { ErrorMessage, Field, Form, Formik,  } from "formik";
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Divider, Table, TableHead,
  TableRow, TableCell, TableBody, Paper, TableContainer, Box, IconButton, Tooltip
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { addPurchase, deletePurchase, resetDeleteState, resetUIState, setDeleteIndex, 
    setDeleteOpen, setEditIndex, setOpen, updatePurchase 
} from "./purchaseSlice";

const AddPurchase = () => {
    const { list: purchases, open, editIndex, deleteOpen, deleteIndex } = useSelector((state) => state.purchase)
    const dispatch = useDispatch();

    const categories = ["Electronics", "Home Appliances", "Fashion", "Sports"];
    const suppliers = ["Global Electronics Ltd", "Home Supply", "Fashion World Inc", "SportsPro Equipment"];

    const initialValues = { product: "", category: "", purchaseDate: "", supplier: "", quantity: "", price: "" };
    
    const validationSchema = Yup.object({
        product: Yup.string().required("Product is required*"),
        category: Yup.string().required("Category is required*"),
        purchaseDate: Yup.date().required("Purchase Date is required*").max(new Date(), "Purchase date cannot be in the future*"),
        supplier: Yup.string().required("Supplier is required*"),
        quantity: Yup.number().typeError("Quantity must be a number*").required("Quantity is Requaired*").min(0, "Quantity cannot be negative*"),
        price: Yup.number().typeError("Price must be a number*").required("Price is required*").min(0, "Price cannot be negative*"),
    });

    const handleSubmit = (values, { resetForm }) => {
        const purchaseData = { 
            ...values,
            quantity: Number(values.quantity), 
            price: Number(values.price), 
        };
    
        if (editIndex !== null) {
            dispatch(updatePurchase({ index: editIndex, purchase: purchaseData }));
        } else {
            dispatch(addPurchase(purchaseData));
        }
    
        resetForm();
        dispatch(resetUIState())
    };
    
    const handleEdit = (index) => {
        if (document.activeElement) document.activeElement.blur(); 
        dispatch(setEditIndex(index));
        dispatch(setOpen(true))
    };
    
    const handleDelete = (index) => {
        if (document.activeElement) document.activeElement.blur(); 
        dispatch(setDeleteIndex(index));
        dispatch(setDeleteOpen(true))
    };
    
    
    const confirmDelete = () => {
        dispatch(deletePurchase(deleteIndex));
        dispatch(resetDeleteState())
    }

    const handleOpenDialog = () => { 
        if (document.activeElement) document.activeElement.blur();
        dispatch(setOpen(true)) 
    };

    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2>Purchase</h2>
                <Button variant="contained" onClick={handleOpenDialog}
                    sx={{ background: "#1e293b", fontSize: "16px", fontWeight: 600, 
                        "&:hover": { background: "#0f172a" } 
                    }}
                >
                    <AddIcon /> &nbsp; Add Purchase
                </Button>
            </Box>

            {/* POPUP FORM */}
            <Dialog open={open} onClose={() => dispatch(resetUIState())} sx={{zIndex:2000}} maxWidth="md" fullWidth>
                <DialogTitle sx={{ fontWeight: 700 }}>
                    {editIndex !== null ? "Edit Purchase Details" : "Add Purchase Details"}
                </DialogTitle>

                <Divider />

                <DialogContent sx={{ mt: 1 }}>
                    <Formik initialValues={editIndex !== null ? purchases[editIndex] : initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        enableReinitialize
                    >
                        {() => (
                            <Form>
                                <Box sx={{ display: "flex", justifyContent:"space-between", gap: 3, mb: 2 }}>
                                    {/* Product Name */}
                                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{ fontWeight: 600 }}>Product Name</label>
                                        <Field name="product" as="input" placeholder="Enter product name"
                                            style={{ padding: "12px 14px", border: "1px solid #ccc", 
                                                borderRadius: "8px", fontSize: "16px" }}
                                        />
                                        <ErrorMessage name="product" component="small" style={{ color: "red", fontWeight: 600 }} />
                                    </Box>

                                    {/* Category */}
                                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{ fontWeight: 600 }}>Category</label>
                                        <Field name="category" as="select"
                                            style={{ padding: "12px 14px", border: "1px solid #ccc", 
                                                borderRadius: "8px", fontSize: "16px" }}
                                        >
                                            <option value="" disabled>Select Category</option>
                                            {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                                        </Field>
                                        <ErrorMessage name="category" component="small" style={{ color: "red", fontWeight: 600 }} />
                                    </Box>
                                </Box><br />

                                <Box sx={{ display: "flex", justifyContent:"space-between", gap: 3, mb: 2 }}>
                                    {/* Supplier */}
                                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{ fontWeight: 600 }}>Supplier</label>
                                        <Field name="supplier" as="select"
                                            style={{ padding: "12px 14px", border: "1px solid #ccc", 
                                                borderRadius: "8px", fontSize: "16px" }}
                                        >
                                            <option value="" disabled>Select Supplier</option>
                                            {suppliers.map((sup) => <option key={sup} value={sup}>{sup}</option>)}
                                        </Field>
                                        <ErrorMessage name="supplier" component="small" style={{ color: "red", fontWeight: 600 }} />
                                    </Box>
                                </Box><br />

                                <Box sx={{ display: "flex", justifyContent:"space-between", gap: 3, mb: 2 }}>
                                    {/* Purchase Date */}
                                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{ fontWeight: 600 }}>Purchase Date</label>
                                        <Field name="purchaseDate" type="date"
                                            style={{ padding: "12px 14px", border: "1px solid #ccc", 
                                                borderRadius: "8px", fontSize: "16px" }}
                                        />
                                        <ErrorMessage name="purchaseDate" component="small" style={{ color: "red", fontWeight: 600 }} />
                                    </Box>

                                    {/* Quantity */}
                                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{ fontWeight: 600 }}>Quantity</label>
                                        <Field name="quantity" type="number" placeholder="Enter Quantity"
                                            style={{ padding: "12px 14px", border: "1px solid #ccc", 
                                                borderRadius: "8px", fontSize: "16px" }}
                                        />
                                        <ErrorMessage name="quantity" component="small" style={{ color: "red", fontWeight: 600 }} />
                                    </Box>

                                    {/* Purchase Price */}
                                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{ fontWeight: 600 }}>Product Price</label>
                                        <Field name="price" type="number" placeholder="Enter purchase price"
                                            style={{ padding: "12px 14px", border: "1px solid #ccc", 
                                                borderRadius: "8px", fontSize: "16px" }}
                                        />
                                        <ErrorMessage name="price" component="small" style={{ color: "red", fontWeight: 600 }} />
                                    </Box>
                                </Box><br />

                                <DialogActions>
                                    <Button onClick={() => dispatch(resetUIState())} sx={{ color: "#1e293b" }}>Cancel</Button>
                                    <Button type="submit" variant="contained"
                                        sx={{ background: "#1e293b", "&:hover": { background: "#0f172a" } }}
                                    >
                                        {editIndex !== null ? "Update" : "Save"}
                                    </Button>
                                </DialogActions>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog>

            <Divider sx={{ my: 3 }} />

            {/* PRODUCT TABLE */}
            <h2>Purchase List</h2>

            <Paper sx={{ p: 3, borderRadius: 3 }}>
                <h3 style={{margin:0}}>Purchases ({purchases.length})</h3>
                <p style={{ color: "#6b7280", margin: 0 }}> List of All Purchases </p> <br />

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
                                <TableCell><strong>Product</strong></TableCell>
                                <TableCell><strong>Category</strong></TableCell>
                                <TableCell><strong>Supplier</strong></TableCell>
                                <TableCell><strong>Quantity</strong></TableCell>
                                <TableCell><strong>Purchase Price</strong></TableCell>
                                <TableCell><strong>Purchase Date</strong></TableCell>
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
                        {purchases.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={8} align="center" sx={{ py: 10 }}>
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
                                            <IconButton onClick={() => handleDelete(index)}
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
                                                    onClick={() => handleEdit(index)}
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
                    Delete Purchase?
                </DialogTitle>

                <DialogContent>
                    <p style={{ fontSize: "16px" }}>
                        Are you sure you want to delete this purchase?
                    </p>
                </DialogContent>

                <DialogActions>
                    <Button sx={{color:"#1e293b"}} onClick={() => dispatch(setDeleteOpen(false))}>Cancel</Button>
                    <Button onClick={confirmDelete} variant="contained"
                        sx={{ background: "#ef4444", transition:"0.2s ease-in-out", 
                            "&:hover": { background: "#fff", color: "#ef4444", fontWeight:600 } }}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default AddPurchase