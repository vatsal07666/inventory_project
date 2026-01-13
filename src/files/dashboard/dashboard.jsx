import { Box, Button, Grid, Paper, Tooltip, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const HomePage = () => {
    const { list: products } = useSelector((state) => state.product)
    const { list: categories } = useSelector((state) => state.category)
    const { list: purchases } = useSelector((state) => state.purchase)
    const { list: sales } = useSelector((state) => state.sales)
    const { list: customers } = useSelector((state) => state.customer)
    const { list: users } = useSelector((state) => state.user)

    const history = useHistory();

    const dashboardCards = [
        {
            title: "Total Products",
            count: products.length,
            path: "/dashboard/product/view",
            tooltip: "View All Products",
        },
        {
            title: "Total Categories",
            count: categories.length,
            path: "/dashboard/category/view",
            tooltip: "View All Categories",
        },
        {
            title: "Total Purchases",
            count: purchases.length,
            path: "/dashboard/purchase/view",
            tooltip: "View All Purchases",
        },
        {
            title: "Total Sales",
            count: sales.length,
            path: "/dashboard/sales/view",
            tooltip: "View All Sales",
        },
        {
            title: "Total Customers",
            count: customers.length,
            path: "/dashboard/customer/view",
            tooltip: "View All Customers",
        },
        {
            title: "Total Users",
            count: users.length,
            path: "/dashboard/user/view",
            tooltip: "View All Users",
        },
    ];


    return(
        <Box sx={{ p: 4 }}>
            <Grid container spacing={5} justifyContent="center">
                {dashboardCards.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper elevation={4} sx={{ display: "flex", flexDirection: "column", p: 3,
                                    textAlign: "center", 
                                }}
                        >
                            <Typography variant="h6" gutterBottom>
                                {card.title}
                            </Typography>

                            <Typography variant="h3" fontWeight="bold">
                                {card.count}
                            </Typography>

                            <Tooltip title={card.tooltip}>
                                <Button
                                    sx={{ mt: 2, backgroundColor: "#1e293b", color: "#fff",
                                        "&:hover": { backgroundColor: "#334155", }
                                    }}
                                    onClick={() => history.push(card.path)}
                                >
                                    View
                                </Button>
                            </Tooltip>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default HomePage