import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Divider,
} from "@mui/material";
import { RiDeleteBin6Line } from "react-icons/ri";

const initialItem = { product: "", quantity: 1, unitPrice: 0, discount: 0, tax: 0 };

export default function SimpleSalesForm() {
  // Form state
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [payment, setPayment] = useState({
    method: "Cash",
    status: "Paid",
    notes: "",
  });

  // Sale Items state (array of items)
  const [items, setItems] = useState([ { ...initialItem } ]);

  // Sale summary state
  const [summary, setSummary] = useState({ discountPercent: 0, taxPercent: 10 });

  // Handlers for customer fields
  const handleCustomerChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  // Handlers for payment fields
  const handlePaymentChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  // Handlers for sale items fields
  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = [...items];
    updatedItems[index][name] = name === "product" ? value : Number(value);
    setItems(updatedItems);
  };

  // Add new item row
  const addItem = () => {
    setItems([...items, { ...initialItem }]);
  };

  // Delete item row
  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems.length ? updatedItems : [{ ...initialItem }]); // keep at least one row
  };

  // Calculate totals for items
  const calculateItemTotal = (item) => {
    const priceAfterDiscount = item.unitPrice * (1 - item.discount / 100);
    const priceAfterTax = priceAfterDiscount * (1 + item.tax / 100);
    return priceAfterTax * item.quantity;
  };

  // Calculate subtotal, discount, tax and total
  const subtotal = items.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);
  const discountAmount = (subtotal * summary.discountPercent) / 100;
  const taxAmount = ((subtotal - discountAmount) * summary.taxPercent) / 100;
  const total = subtotal - discountAmount + taxAmount;

  return (
    <Box sx={{ p: 3, maxWidth: 900, margin: "auto", fontFamily: "Arial, sans-serif" }}>
      {/* Customer Information */}
      <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
          Customer Information
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Select an existing customer or enter new customer details
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
          <TextField
            label="Customer Name *"
            name="name"
            value={customer.name}
            onChange={handleCustomerChange}
            fullWidth
            sx={{ flex: 1, minWidth: 220 }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={customer.email}
            onChange={handleCustomerChange}
            fullWidth
            sx={{ flex: 1, minWidth: 220 }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <TextField
            label="Phone"
            name="phone"
            value={customer.phone}
            onChange={handleCustomerChange}
            fullWidth
            sx={{ flex: 1, minWidth: 220 }}
          />
          <TextField
            label="Address"
            name="address"
            multiline
            rows={3}
            value={customer.address}
            onChange={handleCustomerChange}
            fullWidth
            sx={{ flex: 1, minWidth: 220 }}
          />
        </Box>
      </Paper>

      {/* Sale Summary */}
      <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Sale Summary
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography>Subtotal: <strong>${subtotal.toFixed(2)}</strong></Typography>
          <Typography color="error">Discount: -${discountAmount.toFixed(2)}</Typography>
          <Typography color="success.main">Tax: +${taxAmount.toFixed(2)}</Typography>
          <Typography sx={{ mt: 1, fontWeight: "bold" }}>
            Total: ${total.toFixed(2)}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <TextField
            label="Discount %"
            type="number"
            value={summary.discountPercent}
            onChange={(e) => setSummary({ ...summary, discountPercent: Number(e.target.value) })}
            sx={{ width: 120 }}
            inputProps={{ min: 0, max: 100 }}
          />
          <TextField
            label="Tax %"
            type="number"
            value={summary.taxPercent}
            onChange={(e) => setSummary({ ...summary, taxPercent: Number(e.target.value) })}
            sx={{ width: 120 }}
            inputProps={{ min: 0, max: 100 }}
          />
        </Box>
      </Paper>

      {/* Sale Items */}
      <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Sale Items
          </Typography>
          <Button variant="contained" onClick={addItem}>
            + Add Item
          </Button>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell>Discount %</TableCell>
              <TableCell>Tax %</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <TextField
                    name="product"
                    value={item.product}
                    onChange={(e) => handleItemChange(idx, e)}
                    placeholder="Product name"
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="quantity"
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleItemChange(idx, e)}
                    inputProps={{ min: 1 }}
                    sx={{ width: 80 }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="unitPrice"
                    type="number"
                    value={item.unitPrice}
                    onChange={(e) => handleItemChange(idx, e)}
                    inputProps={{ min: 0 }}
                    sx={{ width: 100 }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="discount"
                    type="number"
                    value={item.discount}
                    onChange={(e) => handleItemChange(idx, e)}
                    inputProps={{ min: 0, max: 100 }}
                    sx={{ width: 80 }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="tax"
                    type="number"
                    value={item.tax}
                    onChange={(e) => handleItemChange(idx, e)}
                    inputProps={{ min: 0, max: 100 }}
                    sx={{ width: 80 }}
                  />
                </TableCell>
                <TableCell>
                  ${calculateItemTotal(item).toFixed(2)}
                </TableCell>
                <TableCell>
                  <IconButton color="error" onClick={() => deleteItem(idx)}>
                    <RiDeleteBin6Line />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Payment Information + Notes */}
      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
        <Paper sx={{ flex: 1, p: 3, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Payment Information
          </Typography>
          <Select
            name="method"
            value={payment.method}
            onChange={handlePaymentChange}
            fullWidth
            sx={{ mb: 2 }}
          >
            <MenuItem value="Cash">Cash</MenuItem>
            <MenuItem value="Online">Online</MenuItem>
            <MenuItem value="Credit">Credit</MenuItem>
          </Select>
          <Select
            name="status"
            value={payment.status}
            onChange={handlePaymentChange}
            fullWidth
          >
            <MenuItem value="Paid">Paid</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
          </Select>
        </Paper>
        <Paper sx={{ flex: 1, p: 3, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Notes
          </Typography>
          <TextField
            multiline
            rows={4}
            placeholder="Additional notes for this sale..."
            value={payment.notes}
            onChange={handlePaymentChange}
            name="notes"
            fullWidth
          />
        </Paper>
      </Box>
    </Box>
  );
}
