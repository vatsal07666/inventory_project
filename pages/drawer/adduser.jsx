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

const AddUser = () => {
  const { users, setUsers } = useGlobal();
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [formValues, setFormValues] = useState({ fullname: "", email: "", role: "", phone: ""});

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Save user (add or edit)
  const handleSaveUser = () => {
    if (!formValues.fullname || !formValues.email || !formValues.role || !formValues.phone) {
      alert("All fields are required!");
      return;
    }

    if (editIndex !== null) {
      const updated = [...users];
      updated[editIndex] = formValues;
      setUsers(updated);
    } else {
      setUsers([...users, formValues]);
    }

    setFormValues({ fullname: "", email: "", role: "", phone: "" });
    setEditIndex(null);
    setOpen(false);
  };

  // Edit user
  const handleEdit = (index) => {
    setFormValues(users[index]);
    setEditIndex(index);
    setOpen(true);
  };

  // Delete user
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((_, i) => i !== index));
    }
  };

  const userOptions = ["Admin", "Manager", "Customer"]

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Users</h2>

        <Button
          variant="contained"
          onClick={() => { setOpen(true); setEditIndex(null); }}
          sx={{
            background: "#1e293b", fontSize: "16px", fontWeight: 600,
            "&:hover": { background: "#0f172a" }
          }}
        >
          <AddIcon /> &nbsp; Add User
        </Button>
      </Box>

      {/* POPUP FORM */}
      <Dialog open={open} onClose={() => setOpen(false)} sx={{zIndex:2000}} maxWidth="md" fullWidth>
        <DialogTitle sx={{ fontWeight: 700 }}>
          {editIndex !== null ? "Edit User Details" : "Add User Details"}
        </DialogTitle>

        <DialogContent sx={{ mt: 1 }}>
          <Box sx={{ display: "flex", justifyContent:"space-between", gap: 3, mb: 2 }}>
            {/* Full Name */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
              <label style={{ fontWeight: 600 }}>Full Name</label>
              <Box component="input" type="text" placeholder="Enter Your Full Name" value={formValues.fullname}
                onChange={(e) => setFormValues({ ...formValues, fullname: e.target.value })}
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

          <Box sx={{ display: "flex", justifyContent:"space-between", gap: 3, mb: 2 }}>
            {/* Role */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
              <label style={{ fontWeight: 600 }}>User</label>
              <Box component="select" value={formValues.role}
                onChange={(e) => setFormValues({ ...formValues, role: e.target.value })}
                sx={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px",
                }}>
                <option value="" disabled>Select User</option>
                {userOptions.map((u) => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </Box>
            </Box>

            {/* Phone */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
              <label style={{ fontWeight: 600 }}>Phone</label>
              <Box component="input" type="number" placeholder="Enter Your Phone Number" value={formValues.phone}
                onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
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
            onClick={handleSaveUser}
            sx={{ background: "#1e293b", "&:hover": { background: "#0f172a" } }}
          >
            {editIndex !== null ? "Update" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>

      <Divider sx={{ my: 3 }} />

      {/* USERS TABLE */}
      <h3>User List</h3>
      <br />

      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <h3 style={{margin:0}}>Users ({users.length})</h3>
        <p style={{ color: "#6b7280", }}> List of All Users </p>

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
                <TableCell>Full Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
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
              {users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 10 }}>
                    No users added yet
                  </TableCell>
                </TableRow>
              ) : (
                users.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.fullname}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.role}</TableCell>
                    <TableCell>{item.phone}</TableCell>

                    <TableCell sx={{ display: "flex", gap: 1 }}>
                      <Tooltip title="Delete">
                        <Button
                          variant="outlined"
                          startIcon={<RiDeleteBin6Line />}
                          onClick={() => handleDelete(index)}
                          sx={{
                            borderColor: "#ef4444",
                            color: "#ef4444",
                            "&:hover": { transform: "scale(1.05)", color: "#dc2626" }
                          }}
                        >
                          Delete
                        </Button>
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

export default AddUser;
