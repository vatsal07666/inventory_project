import { Table, TableHead, TableRow, TableCell, TableBody, Paper, TableContainer } from "@mui/material";
import { useGlobal } from "./GlobalContext";

const ViewProduct = () => {
  const { products } = useGlobal();

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <h3 style={{margin:0}}>Products List ({products.length})</h3>
      <p style={{ color: "#6b7280", }}> List of All Products </p>

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
              <TableCell>Product</TableCell>
              <TableCell>SKU</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Supplier</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
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
            {products.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ py: 10 }}>
                  No products added yet
                </TableCell>
              </TableRow>
            ) : (
              products.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.product}</TableCell>
                  <TableCell>{item.sku}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.supplier}</TableCell>
                  <TableCell>₹ {item.price}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ViewProduct;
