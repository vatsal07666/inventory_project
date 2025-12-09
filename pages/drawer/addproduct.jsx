import { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Divider, Table, TableHead,
  TableRow, TableCell, TableBody, Paper, TableContainer, Box, IconButton, Tooltip
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useGlobal } from "./GlobalContext";

const AddProduct = () => {
  const {products, setProducts} = useGlobal();
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // null means adding
  const [formValues, setFormValues] = useState({ product: "", sku: "", category: "", supplier: "", price: "", quantity: "" });

  // Update localStorage whenever products change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Handle add or edit product
  const handleSaveProduct = () => {
    if (!formValues.product || !formValues.sku|| !formValues.category || !formValues.supplier|| !formValues.price ||
       !formValues.quantity) {
      alert("All fields are required!");
      return;
    }

    const newProduct = {
      ...formValues,
      price: Number(formValues.price),
      quantity: Number(formValues.quantity)
    };

    if (editIndex !== null) {
      const updated = [...products];
      updated[editIndex] = newProduct;
      setProducts(updated);
    } else {
      // Adding new product
      setProducts([...products, newProduct]);
    }

    setFormValues({ product: "", sku: "", category: "", supplier: "", price: "", quantity: "" });
    setEditIndex(null);
    setOpen(false);
  };

  // Handle edit button click
  const handleEdit = (index) => {
    setFormValues(products[index]);
    setEditIndex(index);
    setOpen(true);
  };

  // Handle delete button click
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const updated = products.filter((_, i) => i !== index);
      setProducts(updated);
    }
  };


  const categories = ["Electronics", "Home Appliances", "Fashion", "Sports"];
  const suppliers = ["Global Electronics Ltd", "Home Supply", "Fashion World Inc", "SportsPro Equipment"]

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Products</h2>

        <Button
          variant="contained"
          onClick={() => { setOpen(true); setEditIndex(null); }}
          sx={{
            background: "#1e293b", fontSize: "16px", fontWeight: 600, "&:hover": { background: "#0f172a" }
          }} >
          <AddIcon /> &nbsp; Add Product
        </Button>
      </Box>

      {/* POPUP FORM */}
      <Dialog open={open} onClose={() => setOpen(false)} sx={{ zIndex: 2000 }} maxWidth="md" fullWidth>
        <DialogTitle sx={{ fontWeight: 700 }}>
          {editIndex !== null ? "Edit Product Details" : "Add New Product"}
        </DialogTitle>

        <Divider />

        <DialogContent sx={{ mt: 1 }}>
          <Box sx={{ display: "flex", justifyContent:"space-between", gap: 3, mb: 2 }}>
            {/* SKU */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
              <label style={{ fontWeight: 600 }}>SKU</label>
              <Box component="input" type="text" placeholder="Enter SKU" value={formValues.sku}
                onChange={(e) => setFormValues({ ...formValues, sku: e.target.value })}
                sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
                }}
              />
            </Box>

            {/* Product Name */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
              <label style={{ fontWeight: 600 }}>Product Name</label>
              <Box component="input" type="text" placeholder="Enter product name" value={formValues.product}
                onChange={(e) => setFormValues({ ...formValues, product: e.target.value })}
                sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
                }}
              />
            </Box>
          </Box><br />

          <Box sx={{ display: "flex", justifyContent:"space-between", gap: 3, mb: 2 }}>
            {/* Category */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
              <label style={{ fontWeight: 600 }}>Category</label>
              <Box component="select" value={formValues.category}
                onChange={(e) => setFormValues({ ...formValues, category: e.target.value })}
                sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
                }}>
                <option value="" disabled>Select Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </Box>
            </Box>

            {/* Supplier */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
              <label style={{ fontWeight: 600 }}>Supplier</label>
              <Box component="select" value={formValues.supplier}
                onChange={(e) => setFormValues({ ...formValues, supplier: e.target.value })}
                sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
                }} >
                  <option value="" disabled>Select Supplier</option>
                  {suppliers.map((sup) => (
                    <option key={sup} value={sup}>{sup}</option>
                  ))}
              </Box>
            </Box>
          </Box><br />

          <Box sx={{ display: "flex", justifyContent:"space-between", gap: 3, mb: 2 }}>
            {/* Quantity */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
              <label style={{ fontWeight: 600 }}>Quantity</label>
              <Box component="input" type="number" placeholder="Enter Quantity" value={formValues.quantity}
                onChange={(e) => setFormValues({ ...formValues, quantity: e.target.value })}
                sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
                }}
              />
            </Box>

            {/* Selling Price */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
              <label style={{ fontWeight: 600 }}>Selling Price</label>
              <Box component="input" type="number" placeholder="Enter Selling Price" value={formValues.price}
                onChange={(e) => setFormValues({ ...formValues, price: e.target.value })}
                sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
                }}
              />
            </Box>
          </Box><br />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)} sx={{ color: "#1e293b" }}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleSaveProduct}
            sx={{ background: "#1e293b", "&:hover": { background: "#0f172a" } }}
          >
            {editIndex !== null ? "Update" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>


      <Divider sx={{ my: 3 }} />

      {/* PRODUCT TABLE */}
      <h2>Product List</h2>

      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <h3 style={{margin:0}}>Products ({products.length})</h3>
        <p style={{ color: "#6b7280", }}> List of All Products </p>

        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead
              sx={{
                background: "#1e293b",
                "& .MuiTableCell-root": {
                  color: "#fff",
                  fontSize: "16px"
                }
              }}
            >
              <TableRow>
                <TableCell><strong>Product</strong></TableCell>
                <TableCell><strong>SKU</strong></TableCell>
                <TableCell><strong>Category</strong></TableCell>
                <TableCell><strong>Supplier</strong></TableCell>
                <TableCell><strong>Price</strong></TableCell>
                <TableCell><strong>Quantity</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>

            <TableBody
              sx={{
                background: "linear-gradient(180deg, #F9F9FB 0%, #f3f3f3ff 100%)",
                "& .MuiTableCell-root": {
                  color: "#000000ff",
                  fontSize: "16px",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
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
                  <TableRow key={index}>
                    <TableCell>{item.product}</TableCell>
                    <TableCell>{item.sku}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.supplier}</TableCell>
                    <TableCell>₹ {item.price}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell sx={{ display: "flex", gap: 1 }}>
                      <Tooltip title="Delete">
                        <IconButton onClick={() => handleDelete(index)}
                            sx={{
                              borderColor:"#ef4444", color: "#ef4444", transition: "0.2s",
                              "&:hover": { transform: "scale(1.05)", color: "#dc2626" }
                            }}
                        >
                          <RiDeleteBin6Line />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Edit">
                        <IconButton
                          sx={{
                            color: "#3b82f6", transition: "0.2s",
                            "&:hover": { transform: "scale(1.15)", color: "#2563eb" }
                          }}
                          onClick={() => handleEdit(index)}
                        >
                          <FaEdit />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default AddProduct;