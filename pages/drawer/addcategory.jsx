import { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Divider, Table, TableHead,
  TableRow, TableCell, TableBody, Paper, TableContainer, Box, IconButton, Tooltip
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useGlobal } from "./GlobalContext";

const AddCategory = () => {
  const { categories, setCategories } = useGlobal();
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formValues, setFormValues] = useState({ name: "", category: "" });

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const handleSaveCategory = () => {
    if (!formValues.name || !formValues.category) {
      alert("All fields are required!");
      return;
    }

    const newCategory = { ...formValues };
    if (editIndex !== null) {
      const updated = [...categories];
      updated[editIndex] = newCategory;
      setCategories(updated);
    } else {
      setCategories([...categories, newCategory]);
    }

    setFormValues({ name: "", category: "" });
    setEditIndex(null);
    setOpen(false);
  };

  const handleEdit = (index) => {
    setFormValues(categories[index]);
    setEditIndex(index);
    setOpen(true);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      const updated = categories.filter((_, i) => i !== index);
      setCategories(updated);
    }
  };

  const category = ["Electronics", "Home Appliances", "Fashion", "Sports"];

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Category</h2>
        <Button
          variant="contained"
          onClick={() => { setOpen(true); setEditIndex(null); }}
          sx={{ background: "#1e293b", fontSize: "16px", fontWeight: 600,
            "&:hover": { background: "#0f172a" }
          }}
        >
          <AddIcon /> &nbsp; Add Category
        </Button>
      </Box>

      {/* POPUP FORM */}
      <Dialog open={open} onClose={() => setOpen(false)} sx={{zIndex:2000}} maxWidth="md" fullWidth>
        <DialogTitle sx={{ fontWeight: 700 }}>
          {editIndex !== null ? "Edit Category Details" : "Add Category Details"}
        </DialogTitle>

        <Divider />

        <DialogContent sx={{ mt: 1 }}>
          <Box sx={{display:"flex", flexDirection:"column", gap:3}}>
            {/* SKU */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
              <label style={{ fontWeight: 600 }}>NAME</label>
              <Box component="input" type="text" placeholder="Enter " value={formValues.name}
                onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
                }}
              />
            </Box>

            {/* Category */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
              <label style={{ fontWeight: 600 }}>Category</label>
              <Box component="select" value={formValues.category}
                onChange={(e) => setFormValues({ ...formValues, category: e.target.value })}
                sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
                }}>
                <option value="" disabled>Select Category</option>
                {category.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </Box>
            </Box>
          </Box><br />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)} sx={{ color: "#1e293b" }}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleSaveCategory}
            sx={{ background: "#1e293b", "&:hover": { background: "#0f172a" } }}
          >
            {editIndex !== null ? "Update" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>

      <Divider sx={{ my: 3 }} />

      {/* CATEGORY TABLE */}
      <h3>Category List</h3>
      <br />

      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <h3 style={{margin:0}}>Categories ({categories.length})</h3>
        <p style={{ color: "#6b7280", }}> List of All Categories </p>

        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead sx={{
              background: "#1e293b",
              "& .MuiTableCell-root": { color: "#fff", fontSize: "16px", fontWeight: 600 }
            }}>
              <TableRow>
                <TableCell>Index</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody sx={{
              background: "linear-gradient(180deg, #F9F9FB 0%, #f3f3f3ff 100%)",
              "& .MuiTableCell-root": { color: "#000000ff", fontSize: "16px", borderBottom: "1px solid rgba(255,255,255,0.1)" }
            }}>
              {categories.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} align="center" sx={{ py: 10 }}>
                    No categories added yet
                  </TableCell>
                </TableRow>
              ) : (
                categories.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell sx={{ display: "flex", gap: 1 }}>
                      <Tooltip title="Delete">
                        <IconButton
                          sx={{ color: "#ef4444", transition: "0.2s", "&:hover": { transform: "scale(1.15)", color: "#dc2626" } }}
                          onClick={() => handleDelete(index)}
                        >
                          <RiDeleteBin6Line  />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Edit">
                        <IconButton
                          sx={{ color: "#3b82f6", transition: "0.2s", "&:hover": { transform: "scale(1.15)", color: "#2563eb" } }}
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

export default AddCategory;