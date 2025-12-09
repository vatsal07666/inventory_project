import { useState, useEffect } from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Divider,
  Table, TableHead, TableRow, TableCell, TableBody, Paper, TableContainer, Box,
  IconButton, Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useGlobal } from "./GlobalContext";

const AddCustomer = () => {
  const { customers, setCustomers } = useGlobal();
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [formValues, setFormValues] = useState({ customer: "", email: "", address: "", phone: ""});

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);

  // Save user (add or edit)
  const handleSaveCustomer = () => {
    if (!formValues.customer || !formValues.email || !formValues.address || !formValues.phone) {
      alert("All fields are required!");
      return;
    }

    if (editIndex !== null) {
      const updated = [...customers];
      updated[editIndex] = formValues;
      setCustomers(updated);
    } else {
      setCustomers([...customers, formValues]);
    }

    setFormValues({ customer: "", email: "", address: "", phone: "" });
    setEditIndex(null);
    setOpen(false);
  };

  // Edit user
  const handleEdit = (index) => {
    setFormValues(customers[index]);
    setEditIndex(index);
    setOpen(true);
  };

  // Delete user
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      setCustomers(customers.filter((_, i) => i !== index));
    }
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Customers</h2>

        <Button
          variant="contained"
          onClick={() => { setOpen(true); setEditIndex(null); }}
          sx={{
            background: "#1e293b", fontSize: "16px", fontWeight: 600,
            "&:hover": { background: "#0f172a" }
          }}
        >
          <AddIcon /> &nbsp; Add Customer
        </Button>
      </Box>

      {/* POPUP FORM */}
      <Dialog open={open} onClose={() => setOpen(false)} sx={{zIndex:2000}} maxWidth="md" fullWidth>
        <DialogTitle sx={{ fontWeight: 700 }}>
          {editIndex !== null ? "Edit Customer Details" : "Add Customer Details"}
        </DialogTitle>

        <Divider />

        <DialogContent sx={{ mt: 1 }}>
          <Box sx={{ display: "flex", justifyContent:"space-between", gap: 3, mb: 2 }}>
            {/* Customer */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
              <label style={{ fontWeight: 600 }}>Customer</label>
              <Box component="input" type="text" placeholder="Enter Customer" value={formValues.customer}
                onChange={(e) => setFormValues({ ...formValues, customer: e.target.value })}
                sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
                }}
              />
            </Box>

            {/* Email */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
              <label style={{ fontWeight: 600 }}>Email</label>
              <Box component="input" type="text" placeholder="Enter Email" value={formValues.email}
                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
                }}
              />
            </Box>
          </Box><br />

          {/* Address */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
            <label style={{ fontWeight: 600 }}>Address</label>
            <TextField placeholder="Address" multiline rows={4} fullWidth value={formValues.address}
              onChange={(e) => setFormValues({ ...formValues, address: e.target.value })}
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                  borderColor: "#1e293b",
                }
              }}
            />
          </Box><br />

          {/* Phone */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
            <label style={{ fontWeight: 600 }}>Phone</label>
            <Box component="input" type="number" placeholder="Enter Your Phone Number" value={formValues.phone}
              onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
              sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
              }}
            />
          </Box> <br />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)} sx={{ color: "#1e293b" }}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleSaveCustomer}
            sx={{ background: "#1e293b", "&:hover": { background: "#0f172a" } }}
          >
            {editIndex !== null ? "Update" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>

      <Divider sx={{ my: 3 }} />

      {/* USERS TABLE */}
      <h3>Customer List</h3>
      <br />

      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <h3 style={{margin:0}}>Customers ({customers.length})</h3>
        <p style={{ color: "#6b7280", }}> List of All Customers </p>

        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead
              sx={{
                background: "#1e293b",
                "& .MuiTableCell-root": {
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 600
                }
              }}
            >
              <TableRow>
                <TableCell>Index</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody
              sx={{
                background: "linear-gradient(180deg, #F9F9FB 0%, #f3f3f3ff 100%)",
                "& .MuiTableCell-root": {
                  color: "#000",
                  fontSize: "16px",
                  borderBottom: "1px solid rgba(0,0,0,0.1)"
                }
              }}
            >
              {customers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 10 }}>
                    No customers added yet
                  </TableCell>
                </TableRow>
              ) : (
                customers.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.customer}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.address}</TableCell>
                    <TableCell>{item.phone}</TableCell>

                    <TableCell sx={{ display: "flex", gap: 1 }}>
                      <Tooltip title="Delete">
                        <IconButton
                          sx={{
                              color: "#ef4444",
                              "&:hover": { transform: "scale(1.05)", color: "#dc2626" }
                          }}
                          onClick={() => handleDelete(index)}
                        >
                          <RiDeleteBin6Line />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Edit">
                        <IconButton
                          sx={{
                            color: "#3b82f6",
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

export default AddCustomer;
