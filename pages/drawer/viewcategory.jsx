import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useGlobal } from "./GlobalContext";

const ViewCategory = () => {
  const { categories } = useGlobal();
  
    return (
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <h3 style={{margin:0}}>Categories List ({categories.length})</h3>
        <p style={{ color: "#6b7280", }}> List of All Categories </p>
  
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
                <TableCell>Name</TableCell>
                <TableCell>Category</TableCell>
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
              {categories.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} align="center" sx={{ py: 10 }}>
                    No categories added yet
                  </TableCell>
                </TableRow>
              ) : (
                categories.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.category}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
};

export default ViewCategory;