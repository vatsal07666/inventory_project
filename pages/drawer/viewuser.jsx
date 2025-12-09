import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useGlobal } from "./GlobalContext";

const ViewUser = () => {
    const { users } = useGlobal();

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <h3 style={{margin:0}}>Users ({users.length})</h3>
      <p style={{ color: "#6b7280", }}> List of All Users </p>

      <TableContainer component={Paper} elevation={0}>
        <Table>
          <TableHead sx={{
              background: "#1e293b",
              "& .MuiTableCell-root": {
                color: "#fff",
                fontSize: "16px",
                fontWeight: 600
              }
            }}>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>

          <TableBody sx={{
              background: "linear-gradient(180deg,#F9F9FB 0%, #f3f3f3ff 100%)",
              "& .MuiTableCell-root": {
                color: "#000000ff",
                fontSize: "16px",
                borderBottom: "1px solid rgba(0, 0, 0, 0.2)"
              }
            }}>
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
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default ViewUser