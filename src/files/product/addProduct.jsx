import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Divider, Table, 
    TableHead, TableRow, TableCell, TableBody, Paper, TableContainer, Box, IconButton,
    Tooltip, 
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addProduct, deleteProduct, resetDeleteState, resetUIState, setDeleteId, 
    setDeleteOpen, setEditId, setOpen, setProducts, updateProduct,
} from "./productSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useCallback, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const AddProduct = () => {
    const { list: products = [], open, deleteOpen, deleteId, editId } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    
    const categories = ["Electronics", "Home Appliances", "Fashion", "Sports"];
    const suppliers = ["Global Electronics Ltd", "Home Supply", "Fashion World Inc", "SportsPro Equipment"];

    const initialValues = { productname: "", sku: "", category: "", supplier: "", stock: "", costprice: "", sellingprice: "", };

    const validationSchema = Yup.object({
        productname: Yup.string().required("Product is required*"),
        sku: Yup.string().required("SKU is required*"),
        category: Yup.string().required("Category is required*"),
        supplier: Yup.string().required("Supplier is required*"),
        stock: Yup.number().typeError("Stock must be a number*").required("Stock is Requaired*").min(0, "Stock cannot be negative*"),
        costprice: Yup.number().typeError("Cost Price must be a number*").required("Cost Price is required*"),
        sellingprice: Yup.number().typeError("Selling Price must be a number*").required("Selling Price is required*"),
    });

    const token = "sqqVgyC2NtNy2hR6";
    const headers = { Authorization: token, "Content-Type": "application/json" };

    // ---------- GET ----------
    const fetchProducts = useCallback(() => {
        axios.get("https://generateapi.techsnack.online/api/product", { 
            headers: { Authorization: token, "Content-Type": "application/json" }
        })
        .then((getRes) => {
            console.log("GET response:", getRes.data);
            dispatch(setProducts(getRes.data.Data));
        })
        .catch((err) => {
            console.error("GET error:", err);
        })
    }, [dispatch])

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])

    // ---------- Submit ----------
    const handleSubmit = (values, { resetForm }, dirty) => {
        const productData = { 
            productname: values.productname,
            sku: values.sku,
            category: values.category,
            supplier: values.supplier, 
            stock: Number(values.stock), 
            costprice: Number(values.costprice), 
            sellingprice: Number(values.sellingprice) 
        };
        
        // ---------- PATCH ----------
        if(editId !== null && !dirty){
            toast.info("Nothing Changed");
            return;
        }

        if(editId !== null) {
            axios.patch( `https://generateapi.techsnack.online/api/product/${editId}`, 
                productData, { headers } 
            )
            .then((patchRes) => {
                console.log("PATCH response:", patchRes.data);
                dispatch(updateProduct(patchRes.data.Data));
                resetForm();
                dispatch(resetUIState());
                toast.success("Product Updated Successfully....");
                fetchProducts();
            })
            .catch(() => toast.error("Failed to Update Product!"))
        } else {
            // ---------- POST ----------
            axios.post( "https://generateapi.techsnack.online/api/product", productData, 
                {headers} 
            )
            .then((postRes) => {
                console.log("POST response: ", postRes.data);
                dispatch(addProduct(postRes.data.Data));
                toast.success("Product Added Successfully....");
                resetForm();
                dispatch(resetUIState());
                fetchProducts();
            })
            .catch(() => toast.error("Failed to Add Product!"))
        }
    };

    // ---------- DELETE ----------
    const confirmDelete = () => {
        if (document.activeElement) document.activeElement.blur();
        axios.delete( `https://generateapi.techsnack.online/api/product/${deleteId}`, 
            { headers } 
        )
        .then(() => {
            dispatch(deleteProduct(deleteId));
            dispatch(resetDeleteState());
            toast.success("Product Deleted Successfully....")
            fetchProducts();
        })
        .catch(() => toast.error("Failed to Delete Product!"))
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

    const editProduct = products.find(item => item._id === editId) || initialValues;
    
    return(
        <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2>Products</h2>
                <Button variant="contained" onClick={handleOpenDialog}
                    sx={{ background: "#1e293b", fontSize: "16px", fontWeight: 600, 
                        "&:hover": { background: "#0f172a" } 
                    }}
                >
                    <AddIcon /> &nbsp; Add Product
                </Button>
            </Box>

            <Dialog open={open} onClose={() => dispatch(resetUIState())} 
                sx={{ zIndex: 2000 }} maxWidth="md" fullWidth 
            >
                <DialogTitle sx={{ fontWeight: 700 }}>
                    {editId !== null ? "Edit Product Details" : "Add New Product"}
                </DialogTitle>

                <Divider />
            
                <DialogContent sx={{ mt: 1 }}>
                    <Formik
                        initialValues={editProduct}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        enableReinitialize
                    >
                        {() => (
                            <Form>
                                {/* First Row: Product & SKU */}
                                <Box sx={{ display: "flex", justifyContent: "space-between", gap: 3, mb: 2 }}>
                                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{ fontWeight: 600 }}>Product Name</label>
                                        <Field name="productname" as="input" placeholder="Enter product name"
                                            style={{ padding: "12px 14px", border: "1px solid #ccc", 
                                                borderRadius: "8px", fontSize: "16px" }}
                                        />
                                        <ErrorMessage name="productname" component="small" style={{ color: "red", fontWeight: 600 }} />
                                    </Box>
                                    
                                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{ fontWeight: 600 }}>SKU</label>
                                        <Field name="sku" as="input" placeholder="Enter SKU"
                                            style={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", 
                                                    fontSize: "16px" }}
                                        />
                                        <ErrorMessage name="sku" component="small" style={{ color: "red", fontWeight: 600 }} />
                                    </Box>
                                </Box>

                                <br />

                                {/* Second Row: Category & Supplier */}
                                <Box sx={{ display: "flex", justifyContent: "space-between", gap: 3, mb: 2 }}>
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
                                </Box>

                                <br />

                                {/* Third Row: Stock, Cost & Selling Price */}
                                <Box sx={{ display: "flex", justifyContent: "space-between", gap: 3, mb: 2 }}>
                                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{fontWeight: 600}}>Stock</label>
                                        <Field name="stock" type="number" placeholder="Enter Stock (Units)"
                                            style={{ padding: "12px 14px", border: "1px solid #ccc", 
                                                borderRadius: "8px", fontSize: "16px" }}
                                        />
                                        <ErrorMessage name="stock" component="small" style={{ color: "red", fontWeight: 600 }} />
                                    </Box>
                                    
                                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{ fontWeight: 600 }}>Cost Price</label>
                                        <Field name="costprice" type="number" placeholder="Enter Cost Price"
                                            style={{ padding: "12px 14px", border: "1px solid #ccc", 
                                                borderRadius: "8px", fontSize: "16px" }}
                                        />
                                        <ErrorMessage name="costprice" component="small" style={{ color: "red", fontWeight: 600 }} />
                                    </Box>

                                    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{ fontWeight: 600 }}>Selling Price</label>
                                        <Field name="sellingprice" type="number" placeholder="Enter Selling Price"
                                            style={{ padding: "12px 14px", border: "1px solid #ccc", 
                                                borderRadius: "8px", fontSize: "16px" }}
                                        />
                                        <ErrorMessage name="sellingprice" component="small" style={{ color: "red", fontWeight: 600 }} />
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
            <h2>Product List</h2>

            <Paper sx={{ p: 3, borderRadius: 3 }}>
                <h3 style={{margin:0}}>Products ({products.length})</h3>
                <p style={{ color: "#6b7280", margin: 0 }}> List of All Products </p> <br />

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
                                <TableCell><strong>Product Name</strong></TableCell>
                                <TableCell><strong>SKU</strong></TableCell>
                                <TableCell><strong>Category</strong></TableCell>
                                <TableCell><strong>Supplier</strong></TableCell>
                                <TableCell><strong>Stock</strong></TableCell>
                                <TableCell><strong>Cost Price</strong></TableCell>
                                <TableCell><strong>Selling Price</strong></TableCell>
                                <TableCell><strong>Actions</strong></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody
                            sx={{
                                background: "linear-gradient(180deg, #F9F9FB 0%, #f3f3f3ff 100%)",
                                "& .MuiTableCell-root": { color: "#000", fontSize: "16px",
                                    borderBottom: "1px solid rgba(0, 0, 0, 0.1)", letterSpacing: 0.5,
                                    borderRight: "1px solid rgba(126, 126, 126, 0.1)"
                                }
                            }}
                        >
                        {products.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={8} align="center" sx={{ py: 10 }}>
                                    No products added yet
                                </TableCell>
                            </TableRow>
                        ) : (
                            products.map((item, index) => (
                                <TableRow key={item._id ?? index}>
                                    <TableCell>{item.productname}</TableCell>
                                    <TableCell>{item.sku}</TableCell>
                                    <TableCell>{item.category}</TableCell>
                                    <TableCell>{item.supplier}</TableCell>
                                    <TableCell>{item.stock} units</TableCell>
                                    <TableCell>₹ {item.costprice}</TableCell>
                                    <TableCell>₹ {item.sellingprice}</TableCell>
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
                                                <IconButton 
                                                    sx={{
                                                        background:"#fff", color: "#ef4444", transition: "0.2s",
                                                        "&:hover": { background: "#dc2626", color:"#fff" }
                                                    }}
                                                    onClick={() => handleDelete(item)}
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
            <Dialog open={deleteOpen} onClose={() => dispatch(resetDeleteState())}>
                <DialogTitle sx={{ fontWeight: 600 }}>
                    Delete Product?
                </DialogTitle>

                <DialogContent>
                    <p style={{ fontSize: "16px" }}>
                        Are you sure you want to delete this product?
                    </p>
                </DialogContent>

                <DialogActions>
                    <Button sx={{color:"#1e293b"}} onClick={() => dispatch(resetDeleteState())}>Cancel</Button>
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

export default AddProduct;