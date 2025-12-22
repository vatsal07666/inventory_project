import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Divider, Table, TableHead,
    TableRow, TableCell, TableBody, Paper, TableContainer, Box, IconButton, Tooltip
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import { FiEye } from "react-icons/fi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addItemDraft, addSales, deleteSales, removeItemDraft, resetDeleteState, resetItemDraft, resetUIState, setBillData, setBillOpen, 
    setDeleteIndex, setDeleteOpen, setEditIndex, setOpen, updateSales 
} from "./salesSlice";

const AddSales = () => {
    const { list: sales, open, editIndex, deleteOpen, deleteIndex, billOpen, billData, itemDraft } = useSelector((state) => state.sales);
    const dispatch = useDispatch();

    const initialValues = { 
        customer: "", email: "", phone: "", address: "", date: "", method: "", status: "", product: "", 
        quantity: "", unitprice: "", items: [] 
    }

    const paymentmethod = ["Cash", "Online", "Credit"]
    const paymentstatus = ["Paid", "Pending"]

    const validationSchema = Yup.object({
        date: Yup.date().required("Date is required*").max(new Date(), "Date cannot be in the future*"),
        customer: Yup.string().required("Customer Name is required*"),
        email: Yup.string().email("Enter a valid email*").required("Email is required*"),
        address: Yup.string().required("Address is required*"),
        phone: Yup.string().matches(/^[0-9]{10}$/, "Phone must be exactly 10 digits*")
            .required("Phone is Requaired*"),
        status: Yup.string().required("Status is required*"),
        method: Yup.string().required("Method is required*"),
    });

    const generateRandomInvoice = (length = 6) =>
        `INV-${Array.from({ length }, () => 
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(Math.random() * 36))).join('')}`;

    // Add new item inside formValues.items[]
    const handleAddItem = (values, { setFieldValue }) => {
        if (!values.product || !values.quantity || !values.unitprice) {
            alert("Enter all item fields");
            return;
        }

        dispatch(addItemDraft({ 
            product: values.product, 
            quantity: Number(values.quantity), 
            unitprice: Number(values.unitprice), 
            total: Number(values.quantity) * Number(values.unitprice) 
        }));
        setFieldValue("product", "");
        setFieldValue("quantity", "");
        setFieldValue("unitprice", "");
    };

    // Delete Items
    const handleDeleteItem = (index) => {
        dispatch(removeItemDraft(index));
    };

    // Subtotal
    const computeSubtotal = (items) => {  
        return items.reduce((acc, i) => acc + Number(i.quantity || 0) * Number(i.unitprice || 0),0);
    }

    const handleSubmit = (values, { resetForm }) => {
        if (itemDraft.length === 0) {
            alert("Add at least one item");
            return;
        }

        const salesData = { 
            ...values, 
            items: itemDraft, 
            subtotal: computeSubtotal(itemDraft),
            invoice: generateRandomInvoice()
        };

        if (editIndex !== null) {
            dispatch(updateSales({ index: editIndex, sale: salesData }));
        } else {
            dispatch(addSales(salesData));
        }

        resetForm({ values: {...values, product:"", quantity:"", unitprice:""} });
        dispatch(resetItemDraft())
        dispatch(resetUIState())
    };

    const handleEdit = (index) => { 
        if (document.activeElement) document.activeElement.blur();
        dispatch(setEditIndex(index));
        dispatch(setOpen(true));
        
        // Pre-fill itemDraft for editing
        dispatch(resetItemDraft());
        sales[index].items.forEach(item => dispatch(addItemDraft(item)));
    };

    const handleDelete = (index) => { 
        if (document.activeElement) document.activeElement.blur();
        dispatch(setDeleteIndex(index));
        dispatch(setDeleteOpen(true))
    };

    const confirmDelete = () => {
        dispatch(deleteSales(deleteIndex));
        dispatch(resetDeleteState())
    }

    const handleOpenBill = (data) => {
        if (document.activeElement) document.activeElement.blur();
        dispatch(setBillData({ ...data}));
        dispatch(setBillOpen(true));
    };

    const handleOpenDialog = () => { 
        if (document.activeElement) document.activeElement.blur();
        dispatch(setOpen(true)) 
    };

    return(
        <Box id="root">
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2>Sales</h2>
                <Button variant="contained" onClick={handleOpenDialog}
                    sx={{ background: "#1e293b", fontSize: "16px", fontWeight: 600, 
                        "&:hover": { background: "#0f172a" } 
                    }}
                >
                    <AddIcon /> &nbsp; Add Sales
                </Button>
            </Box>

            <Dialog open={open} onClose={() => dispatch(setOpen(false))} disableEnforceFocus={false} 
                sx={{ zIndex: 2000 }} maxWidth="lg" fullWidth
            >
                <DialogTitle sx={{ fontWeight: 700, display: "flex", justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    {editIndex !== null ? "Edit Sales Details" : "Add New Sales"}

                    <IconButton onClick={() => dispatch(resetUIState())}>
                        <RxCrossCircled />
                    </IconButton>
                </DialogTitle>

                <Divider />

                <DialogContent sx={{ mt: 1, background:"#f5f7fa" }}>
                    <Formik 
                        initialValues={
                            editIndex !== null ? sales[editIndex] : initialValues
                        }
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        enableReinitialize
                    >
                        {({values, setFieldValue}) => (
                            <Form>
                                {/* Sales Items */}
                                <Paper sx={{p:3}}>
                                    <Box sx={{display:"flex", justifyContent:"space-between"}}>
                                        <h3 style={{margin:0}}>Sales Item</h3>
                                        <Button variant="contained"
                                            onClick={() => handleAddItem(values, { setFieldValue })}
                                            sx={{ background: "#1e293b", fontSize: "16px", fontWeight: 600, 
                                                "&:hover": { background: "#0f172a" }
                                            }}
                                        >
                                            Add 
                                        </Button>
                                    </Box>

                                    <Divider sx={{my:2}} />

                                    <Table>
                                        <TableHead sx={{ 
                                                "& .MuiTableCell-root": { color: "#000", fontSize: "15px" }
                                            }}
                                        >
                                            <TableRow>
                                                <TableCell><strong>Product</strong></TableCell>
                                                <TableCell><strong>Quantity</strong></TableCell>
                                                <TableCell><strong>Unit Price</strong></TableCell>
                                                <TableCell><strong>Total</strong></TableCell>
                                                <TableCell><strong>Actions</strong></TableCell>
                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            <TableRow>
                                                {/* Product */}
                                                <TableCell>
                                                    <Field name="product" type="text" placeholder="Enter Product" 
                                                        style={{ padding: "8px 14px", border: "1px solid #ccc", borderRadius: "8px", 
                                                            fontSize: "16px",
                                                        }}
                                                    />
                                                </TableCell>

                                                {/* Quantity */}
                                                <TableCell>
                                                    <Field name="quantity" type="number" placeholder="Enter Quantity" 
                                                        style={{ padding: "8px 14px", border: "1px solid #ccc", borderRadius: "8px", 
                                                            fontSize: "16px",
                                                        }}
                                                    />
                                                </TableCell>

                                                {/* Unit Price */}
                                                <TableCell>
                                                    <Field name="unitprice" type="number" placeholder="Enter Unit Price" 
                                                        style={{ padding: "8px 14px", border: "1px solid #ccc", borderRadius: "8px", 
                                                            fontSize: "16px",
                                                        }}
                                                    />
                                                </TableCell>

                                                {/* Total */}
                                                <TableCell>
                                                    ₹ {(values.quantity || 0) * (values.unitprice || 0)}
                                                </TableCell>

                                                {/* Delete Action */}
                                                <TableCell> 
                                                    <IconButton disabled> <RiDeleteBin6Line /> </IconButton>
                                                </TableCell>
                                            </TableRow>

                                            {/* List existing items */}
                                            {itemDraft.map((it, idx) => (
                                                <TableRow key={idx}>
                                                    <TableCell>{it.product}</TableCell>
                                                    <TableCell>{it.quantity}</TableCell>
                                                    <TableCell>{it.unitprice}</TableCell>
                                                    <TableCell>₹ {it.total}</TableCell>
                                                    <TableCell>
                                                        <Tooltip title="Delete" sx={{ml:"1px"}}>
                                                        <IconButton color="error" onClick={() => handleDeleteItem(idx)}>
                                                            <RiDeleteBin6Line />
                                                        </IconButton>
                                                        </Tooltip>
                                                    </TableCell>
                                                    <TableCell>
                                                        
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Paper>

                                <Divider sx={{my:3}} />

                                {/* Customer And Payment */}
                                <Box sx={{display:"flex", gap:2}}>
                                    {/* Customer Information */}
                                    <Paper sx={{width:"70%", p:3}}>
                                        <h3 style={{margin:0}}>Customer Information</h3>

                                        <Divider sx={{my:2}} />

                                        <Box sx={{ display: "flex", justifyContent:"space-between", gap: 3, mb: 2 }}>
                                            {/* Customer Name */}
                                            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                                <label style={{ fontWeight: 600 }}>Customer Name</label>
                                                <Field name="customer" type="text" placeholder="Enter Customer Name" 
                                                    style={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", 
                                                        fontSize: "16px",
                                                    }}
                                                />
                                                <ErrorMessage name="customer" component="small" style={{ color: "red", fontWeight: 600 }} />
                                            </Box>

                                            {/* Email */}
                                            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                                <label style={{ fontWeight: 600 }}>Email</label>
                                                <Field name="email" type="email" placeholder="Enter Email"
                                                    style={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", 
                                                            fontSize: "16px" 
                                                    }}
                                                />
                                                <ErrorMessage name="email" component="small" style={{ color: "red", fontWeight: 600 }} />
                                            </Box>
                                        </Box><br />

                                        <Box sx={{ display: "flex", justifyContent:"space-between", gap: 3, mb: 2 }}>
                                            {/* Phone */}
                                            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                                <label style={{ fontWeight: 600 }}>Phone</label>
                                                <Field name="phone" type="number" placeholder="Enter Your Phone Number" 
                                                    style={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", 
                                                        fontSize: "16px",
                                                    }}
                                                />
                                                <ErrorMessage name="phone" component="small" style={{ color: "red", fontWeight: 600 }} />
                                            </Box>

                                            {/* Address */}
                                            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                                <label style={{ fontWeight: 600 }}>Address</label>
                                                <Field name="address" as="textarea" placeholder="Enter Address"
                                                    style={{ padding: "12px 14px", border: "1px solid #ccc", 
                                                        borderRadius: "8px", fontSize: "16px", fontFamily: "Arial, sans-serif",}}
                                                />
                                                <ErrorMessage name="address" component="small" style={{ color: "red", fontWeight: 600 }} />
                                            </Box>
                                        </Box><br />
                                    </Paper>         

                                    {/* Payment Information */}
                                    <Paper sx={{width:"30%", p:3}}>
                                        <h3 style={{margin:0}}>Payment Information</h3>

                                        <Divider sx={{my:2}} />

                                        <Box sx={{ mb: 2 }}>
                                            {/* Date */}
                                            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                                <label style={{ fontWeight: 600 }}>Date</label>
                                                <Field name="date" type="date"
                                                    style={{ padding: "12px 14px", border: "1px solid #ccc", 
                                                        borderRadius: "8px", fontSize: "16px" }}
                                                />
                                                <ErrorMessage name="date" component="small" style={{ color: "red", fontWeight: 600 }} />
                                            </Box><br />

                                            {/* Payment Method */}
                                            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                                <label style={{ fontWeight: 600 }}>Payment Method</label>
                                                <Field name="method" as="select"
                                                    style={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", 
                                                        fontSize: "16px",
                                                    }}
                                                >
                                                    <option value="" disabled>Select Payment Method</option>
                                                    {paymentmethod.map((paym) => (
                                                        <option key={paym} value={paym}>{paym}</option>
                                                    ))}
                                                </Field>
                                                <ErrorMessage name="method" component="small" style={{ color: "red", fontWeight: 600 }} />
                                            </Box><br />

                                            {/* Payment Status */}
                                            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                                <label style={{ fontWeight: 600 }}>Payment Status</label>
                                                <Field name="status" as="select" 
                                                    style={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", 
                                                        fontSize: "16px",
                                                    }}
                                                >
                                                    <option value="" disabled>Select Payment Method</option>
                                                    {paymentstatus.map((pays) => (
                                                        <option key={pays} value={pays}>{pays}</option>
                                                    ))}
                                                </Field>
                                                <ErrorMessage name="status" component="small" style={{ color: "red", fontWeight: 600 }} />
                                            </Box>
                                        </Box><br />
                                    </Paper>
                                </Box><br />

                                <DialogActions style={{background:"#f5f7fa"}}>
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

            {/* SALES TABLE */}
            <h3>Sales List</h3>
    
            <Paper sx={{ p: 3, borderRadius: 3 }}>
    
                <h3 style={{ marginBottom: 0 }}>Sales ({sales.length})</h3>
                <p style={{ color: "#6b7280" }}>
                    List of all sales transactions
                </p>

                <TableContainer>
                    <Table>
                        <TableHead sx={{ background: "#1e293b",
                                "& .MuiTableCell-root": { color: "#fff", fontSize: "15px" }
                            }}
                        >
                            <TableRow>
                                <TableCell><strong>Invoice #</strong></TableCell>
                                <TableCell><strong>Customer</strong></TableCell>
                                <TableCell><strong>Items</strong></TableCell>
                                <TableCell><strong>Unit Price</strong></TableCell>
                                <TableCell><strong>Total</strong></TableCell>
                                <TableCell><strong>Payment In</strong></TableCell>
                                <TableCell><strong>Payment Status</strong></TableCell>
                                <TableCell><strong>Date</strong></TableCell>
                                <TableCell><strong>Actions</strong></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody
                            sx={{ background: "linear-gradient(180deg, #F9F9FB 0%, #f3f3f3ff 100%)",
                                "& .MuiTableCell-root": { color: "#000000ff", fontSize: "15px",
                                    borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
                                }
                            }}
                        >
                            {sales.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={9} align="center" sx={{ py: 6 }}>
                                        No sales added yet
                                    </TableCell>
                                </TableRow>
                            ) : (
                                sales.map((item, index) => (
                                    <TableRow key={index}>

                                        {/* Invoice Number */}
                                        <TableCell>
                                            <strong>{item.invoice}</strong>
                                        </TableCell>

                                        {/* Customer */}
                                        <TableCell>
                                            <b>{item.customer}</b> <br />
                                            <small style={{ color: "#6b7280" }}> {item.email} </small>
                                        </TableCell>

                                        {/* Items */}
                                        <TableCell>
                                            {item.items.length} item(s) <br />
                                            <span style={{ color: "#6b7280" }}>
                                                {item.items.map(i => i.product).join(",")}
                                            </span>
                                        </TableCell>

                                        {/* Unit Price */}
                                        <TableCell>₹ {item.items.map(i => i.unitprice).join(", ")}</TableCell>

                                        {/* Total Price */}
                                        <TableCell>₹ {item.subtotal}</TableCell>

                                        {/* Payment In */}
                                        <TableCell>
                                            <span style={{ background: "#e5e7eb", padding: "4px 10px", borderRadius: "20px",
                                                    fontSize: "13px"
                                                }}
                                            >
                                                {item.method}
                                            </span>
                                        </TableCell>

                                        {/* Payment Status */}
                                        <TableCell>
                                            <span style={{ background: item.status === "Paid" ? "#22c55e" : "#f96216ff",
                                                    padding: "4px 10px", borderRadius: "20px", fontSize: "13px", color: "#fff"
                                                }}
                                            >
                                                {item.status}
                                            </span>
                                        </TableCell>

                                        {/* Date */}
                                        <TableCell> {item.date} </TableCell>

                                        {/* Actions */}
                                        <TableCell>
                                            <Box sx={{display:"flex", gap: 1}}>
                                                {/* View Bill */}
                                                <Tooltip title="View Invoice" component={Paper} 
                                                    slotProps={{
                                                        tooltip: {
                                                            sx:{ fontSize: "12px", px: 2, color:"#16a34a", background: "#e5ffeeff",
                                                                letterSpacing: 1, fontWeight: 600
                                                            }
                                                        }
                                                    }}
                                                >
                                                    <IconButton onClick={() => handleOpenBill(item)}
                                                        sx={{
                                                            background:"#fff", color: "#16a34a", transition: "0.2s ease-in-out",
                                                            "&:hover": { background: "#16a34a", color:"#fff" }
                                                        }}    
                                                    > 
                                                        <FiEye /> 
                                                    </IconButton>
                                                </Tooltip>

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

            {/* Bill Dialog */}
            <Dialog open={billOpen} onClose={() => dispatch(setBillOpen(false))} maxWidth="md" fullWidth sx={{zIndex:2000}}>
                <Box sx={{ background:"#f5f7fa", p: 3}}>
                    <DialogTitle sx={{ fontWeight: 700, textAlign: "center" }}>Sales Invoice</DialogTitle>

                    <DialogContent dividers sx={{ p: 4 }}>
                        {billData && (
                            <Box sx={{}}>
                                <Box sx={{ textAlign: "center", mb: 3 }}>
                                    <h2 style={{ margin: 0 }}>Your Company Name</h2>
                                    <p style={{ margin: 0,color: "#555" }}>Address Line 1</p>
                                    <p style={{ margin: 0,color: "#555" }}>Phone: 9876543210</p>
                                </Box>           

                                <Divider sx={{ my: 2 }} />

                                <Box sx={{display:"flex", justifyContent:"space-between", gap: 2}}>
                                    <Box sx={{ width:"50%", borderRadius: 3, py: 1, px: 2 }} component={Paper}>
                                        <h3>Customer Details : - </h3>
                                        <p style={{color: "#555"}}><strong>Name:</strong> <br /> {billData.customer}</p>
                                        <p style={{color: "#555"}}><strong>Email:</strong> <br /> {billData.email}</p>
                                        <p style={{color: "#555"}}><strong>Phone:</strong> <br /> {billData.phone}</p>
                                        <p style={{color: "#555"}}><strong>Address:</strong> <br /> {billData.address}</p>
                                    </Box>

                                    <Box sx={{ width:"50%", borderRadius: 3, py: 1, px: 2 }} component={Paper}>
                                        <h3>Sales Summary : -</h3>
                                        <Box sx={{ display: "flex", justifyContent: "space-between"}}>
                                            <Box sx={{color:"#555"}}>
                                                <p><strong>Status</strong></p>
                                                <p><strong>Total Amount:</strong></p>
                                                <p><strong>Payment Method:</strong></p>
                                                <p><strong>Payment Status:</strong></p>
                                                <p><strong>Date:</strong></p>
                                            </Box>
                                            <Box sx={{color:"#555"}}>
                                                <p>{billData.status}</p>
                                                <p>₹ {billData.subtotal}</p>
                                                <p>{billData.method}</p>
                                                <p>{billData.status}</p>
                                                <p>{billData.date}</p>
                                            </Box>
                                        </Box>
                                    </Box>  
                                </Box>

                                <Box sx={{ borderRadius: 3, py: 1, px: 2, mt: 3 }} component={Paper}>
                                    <h3 style={{ marginBottom: 0 }}>Items ({billData.items.length})</h3>
                                    <p style={{ marginTop: "5px", color: "#6b7280" }}>
                                        List of all sales transactions
                                    </p>

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
                                            {billData.items.map((it, idx) => (
                                                <TableRow key={idx}>
                                                    <TableCell>{it.product}</TableCell>
                                                    <TableCell>{it.quantity}</TableCell>
                                                    <TableCell>₹ {it.unitprice}</TableCell>
                                                    <TableCell>₹ {it.total}</TableCell>
                                                </TableRow>
                                            ))}

                                            {/* Total row */}
                                            <TableRow>
                                                <TableCell colSpan={3} align="right" sx={{fontSize: "16px"}}>
                                                    <strong>Total:</strong>
                                                </TableCell>
                                                <TableCell sx={{fontSize: "16px"}}>
                                                    <b>₹ {billData.subtotal}</b>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Box>

                                <Divider sx={{ my: 2 }} />

                                <p style={{ textAlign: "center", marginTop: "15px", color: "#555" }}>
                                    Thank you for your business!
                                </p>
                            </Box>
                        )}
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={() => dispatch(setBillOpen(false))} sx={{color: "#0f172a"}}>Close</Button>
                        <Button variant="contained" onClick={() => window.print()}
                            sx={{ background: "#1e293b", "&:hover": { background: "#0f172a" } }}
                        >
                            Print
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>

            {/* DELETE CONFIRMATION POPUP */}
            <Dialog open={deleteOpen} onClose={() => dispatch(setDeleteOpen(false))}>
                <DialogTitle sx={{ fontWeight: 600 }}>
                    Delete Sales?
                </DialogTitle>

                <DialogContent>
                    <p style={{ fontSize: "16px" }}>
                        Are you sure you want to delete this sale?
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

export default AddSales;