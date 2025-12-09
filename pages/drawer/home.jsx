const HomePage = () => {
  return(
    <div>
      Home Page
    </div>
  )
}

export default HomePage


// import { Box, Grid, Paper, Typography, Button } from "@mui/material";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import PeopleIcon from "@mui/icons-material/People";
// import Inventory2Icon from "@mui/icons-material/Inventory2";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import { useHistory } from "react-router-dom";

// function HomePage() {
//   const history = useHistory();

//   // Example metrics
//   const stats = [
//     { title: "Total Sales", value: 125, icon: <AddShoppingCartIcon fontSize="large" />, route: "/sales" },
//     { title: "Customers", value: 58, icon: <PeopleIcon fontSize="large" />, route: "/customers" },
//     { title: "Inventory", value: 230, icon: <Inventory2Icon fontSize="large" />, route: "/inventory" },
//     { title: "Suppliers", value: 12, icon: <LocalShippingIcon fontSize="large" />, route: "/suppliers" },
//   ];

//   // Quick actions
//   const actions = [
//     { label: "Add Sales", route: "/add-sales", color: "#4f46e5" },
//     { label: "Add Customer", route: "/add-customer", color: "#16a34a" },
//     { label: "Add Inventory", route: "/add-inventory", color: "#d97706" },
//     { label: "Add Supplier", route: "/add-supplier", color: "#dc2626" },
//   ];

//   return (
//     <Box sx={{ p: 4, minHeight: "100vh", background: "linear-gradient(to right, #f3f4f6, #e0e7ff)" }}>
      
//       {/* Header */}
//       <Box sx={{ mb: 5, textAlign: "center" }}>
//         <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>Dashboard</Typography>
//         <Typography variant="subtitle1" color="text.secondary">
//           Manage your sales and inventory efficiently
//         </Typography>
//       </Box>

//       {/* Stats Cards */}
//       <Grid container spacing={4} sx={{ mb: 5 }}>
//         {stats.map((item, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Paper
//               elevation={6}
//               sx={{
//                 p: 3,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 borderRadius: 3,
//                 background: "#fff",
//                 color: "#1e293b",
//                 height: "150px",
//                 textAlign: "center",
//                 boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
//                 transition: "0.3s",
//                 "&:hover": {
//                   transform: "translateY(-5px)",
//                   boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
//                 }
//               }}
//             >
//               <Box sx={{ mb: 1, color: "#4f46e5" }}>{item.icon}</Box>
//               <Typography variant="h6" sx={{ fontWeight: 600 }}>{item.title}</Typography>
//               <Typography variant="h4" sx={{ fontWeight: 700 }}>{item.value}</Typography>
//               <Button
//                 variant="contained"
//                 onClick={() => history.push(item.route)}
//                 sx={{
//                   mt: 2,
//                   background: "#4f46e5",
//                   "&:hover": { background: "#4338ca" }
//                 }}
//               >
//                 View
//               </Button>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Quick Actions */}
//       <Box sx={{ textAlign: "center" }}>
//         <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>Quick Actions</Typography>
//         <Grid container spacing={3} justifyContent="center">
//           {actions.map((action, index) => (
//             <Grid item key={index}>
//               <Button
//                 variant="contained"
//                 onClick={() => history.push(action.route)}
//                 sx={{
//                   background: action.color,
//                   "&:hover": { background: action.color },
//                   color: "#fff",
//                   fontWeight: 600,
//                   px: 4,
//                   py: 1.5,
//                   borderRadius: 2,
//                   boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
//                 }}
//               >
//                 {action.label}
//               </Button>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//     </Box>
//   );
// }

// export default HomePage;