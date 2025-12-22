import {
    Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, Divider, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow, Paper, IconButton, Tooltip
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { addCategory, resetUIState, setDeleteIndex, setDeleteOpen, setEditIndex, setOpen, updateCategory, 
    deleteCategory, resetDeleteState } from "./categorySlice";

const AddCategory = () => {
    const { list: categories, open, editIndex, deleteOpen, deleteIndex } = useSelector(state => state.category);
    const dispatch = useDispatch();

    const categoryOptions = ["Electronics", "Home Appliances", "Fashion", "Sports"];

    const initialValues = { category: "", description: "" };
    
    const validationSchema = Yup.object({
        category: Yup.string().required("Category is required*"),
        description: Yup.string().required("Description is required*"),
    });

    const handleSubmit = (values, { resetForm }) => {
        const categoryData = {...values}

        if (editIndex !== null) {
        dispatch(updateCategory({ index: editIndex, category: categoryData }));
        } else {
        dispatch(addCategory(categoryData));
        }

        resetForm();
        dispatch(resetUIState());
    };

    const handleEdit = (index) => {
        if (document.activeElement) document.activeElement.blur();
        dispatch(setEditIndex(index));
        dispatch(setOpen(true));
    };

    const handleDelete = (index) => {
        if (document.activeElement) document.activeElement.blur();
        dispatch(setDeleteIndex(index));
        dispatch(setDeleteOpen(true))
    };

    const confirmDelete = () => {
        dispatch(deleteCategory(deleteIndex));
        dispatch(resetDeleteState())
    }

    const handleOpenDialog = () => { 
        if (document.activeElement) document.activeElement.blur();
        dispatch(setOpen(true)) 
    };

    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2>Categories</h2>
                <Button variant="contained" onClick={handleOpenDialog}
                    sx={{ background: "#1e293b", fontSize: "16px", fontWeight: 600, 
                        "&:hover": { background: "#0f172a" } 
                    }}
                >
                    <AddIcon /> &nbsp; Add Category
                </Button>
            </Box>

            <Dialog open={open} onClose={() => dispatch(resetUIState())} sx={{ zIndex: 2000 }} maxWidth="md" fullWidth>
                <DialogTitle>
                    {editIndex !== null ? "Edit Category" : "Add Category"}
                </DialogTitle>

                <Divider />

                <DialogContent>
                    <Formik
                        initialValues={editIndex !== null ? categories[editIndex] : initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        enableReinitialize
                    >
                        {() => (
                            <Form>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                                    {/* Category Dropdown */}
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{ fontWeight: 600 }}>Category</label>

                                        <Field name="category" as="select"
                                            style={{ padding: "12px 14px", border: "1px solid #ccc", 
                                                borderRadius: "8px", fontSize: "16px" }}
                                        >
                                            <option value="" disabled>Select Category</option>
                                            {categoryOptions.map((cat) => ( <option key={cat} value={cat}> {cat} </option> ))}
                                        </Field>
                                        <ErrorMessage name="category" component="small" style={{ color: "red", fontWeight: 600 }} />
                                    </Box>

                                    {/* Description Field */}
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                                        <label style={{ fontWeight: 600 }}>Description</label>

                                        <Field name="description" as="textarea" placeholder="Enter Description"
                                            style={{ padding: "12px 14px", border: "1px solid #ccc", 
                                                borderRadius: "8px", fontSize: "16px", fontFamily: "Arial, sans-serif" }}
                                        />
                                        <ErrorMessage name="description" component="small" style={{ color: "red", fontWeight: 600 }} />
                                    </Box>
                                </Box>

                                <br />
                                
                                {/* Dialog Action Buttons */}
                                <DialogActions>
                                    <Button onClick={() => dispatch(resetUIState())} sx={{ color: "#1e293b" }}> 
                                        Cancel 
                                    </Button>

                                    <Button variant="contained" type="submit"
                                        sx={{  background: "#1e293b", "&:hover": { background: "#0f172a" } }}
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
            
            <Paper sx={{ p: 3, borderRadius: 3 }}>
                <h3 style={{margin:0}}>Categories ({categories.length})</h3>
                <p style={{ color: "#6b7280", margin: 0 }}> List of All Categories </p> <br />

                <TableContainer>
                    <Table>
                        <TableHead sx={{ background: "#1e293b",
                                "& .MuiTableCell-root": { color: "#fff", fontSize: "16px" }
                            }}
                        >
                            <TableRow>
                                <TableCell>Category</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody 
                            sx={{
                                background: "linear-gradient(180deg, #F9F9FB 0%, #f3f3f3ff 100%)",
                                "& .MuiTableCell-root": { color: "#000000ff", fontSize: "15px",
                                    borderBottom: "1px solid rgba(0, 0, 0, 0.1)", letterSpacing: 0.5
                                }
                            }}
                        >
                            {categories.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={3} align="center">No categories added</TableCell>
                                </TableRow>
                            ) : categories.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.category}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell>
                                        <Box sx={{display: "flex", gap: 1}}>
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
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>


            {/* DELETE CONFIRMATION POPUP */}
            <Dialog open={deleteOpen} onClose={() => dispatch(setDeleteOpen(false))}>
                <DialogTitle sx={{ fontWeight: 600 }}>
                    Delete Category?
                </DialogTitle>
            
                <DialogContent>
                    <p style={{ fontSize: "16px" }}>
                        Are you sure you want to delete this category?
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
    );
};

export default AddCategory;
