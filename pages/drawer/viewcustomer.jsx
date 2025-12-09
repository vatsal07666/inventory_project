import { Table, TableHead, TableRow, TableCell, TableBody, Paper, TableContainer } from "@mui/material";
import { useGlobal } from "./GlobalContext";

const ViewCustomers = () => {
  const { customers } = useGlobal();

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <h3 style={{margin:0}}>Customers ({customers.length})</h3>
      <p style={{ color: "#6b7280", }}> List of All Customers </p>

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
              <TableCell>Customer</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>

          <TableBody sx={{
              background: "linear-gradient(180deg, #F9F9FB 0%, #f3f3f3ff 100%)",
              "& .MuiTableCell-root": {
                color: "#000000ff",
                fontSize: "16px",
                borderBottom: "1px solid rgba(0, 0, 0, 0.2)"
              }
            }}>
            {customers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ py: 10 }}>
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
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ViewCustomers;
