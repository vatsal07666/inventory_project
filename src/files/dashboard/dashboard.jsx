import { Box, Button, Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";
import { LuUserRoundPlus } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";

const Dashboard = () => {
    const { list: products } = useSelector((state) => state.product)
    const { list: categories } = useSelector((state) => state.category)
    const { list: purchases } = useSelector((state) => state.purchase)
    const { list: sales } = useSelector((state) => state.sales)
    const { list: customers } = useSelector((state) => state.customer)
    const { list: users } = useSelector((state) => state.user)

    const history = useHistory();

    const dashboardCards = [
        {
            icon: <BsBoxSeam />,
            title: "Total Products",
            count: products.length,
            path: "/dashboard/product/view",
            tooltip: "View All Products",
        },
        {
            icon: <MdOutlineCategory />,
            title: "Total Categories",
            count: categories.length,
            path: "/dashboard/category/view",
            tooltip: "View All Categories",
        },
        {
            icon: <BiPurchaseTagAlt />,
            title: "Total Purchases",
            count: purchases.length,
            path: "/dashboard/purchase/view",
            tooltip: "View All Purchases",
        },
        {
            icon: <GiMoneyStack />,
            title: "Total Sales",
            count: sales.length,
            path: "/dashboard/sales/view",
            tooltip: "View All Sales",
        },
        {
            icon: <LuUserRoundPlus />,
            title: "Total Customers",
            count: customers.length,
            path: "/dashboard/customer/view",
            tooltip: "View All Customers",
        },
        {
            icon: <FaRegUserCircle />,
            title: "Total Users",
            count: users.length,
            path: "/dashboard/user/view",
            tooltip: "View All Users",
        },
    ];

    return(
        <>
            <Box>
                <h1>Dashboard</h1>
            </Box>
            <Box sx={{ p: 4 }}>
                {/* Grid space and size change */}
                <Grid container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {dashboardCards.map((card, index) => (
                        <Grid size={{ xs: 12, sm: 4, md: 4 }} key={index}>
                            <Paper elevation={4} sx={{ display: "flex", flexDirection: "column", p: 3,
                                        textAlign: "center", py: 4
                                    }}
                            >
                                <Box>
                                    <IconButton sx={{ color:"#fff", background: "#1e293b", 
                                        "&:hover": {backgroundColor: "#334155"}
                                    }}>
                                        {card.icon}
                                    </IconButton>
                                </Box>

                                <Typography variant="h6" gutterBottom>
                                    {card.title}
                                </Typography>

                                <Typography variant="h3" fontWeight="bold">
                                    {card.count}
                                </Typography>

                                <Tooltip title={card.tooltip} 
                                    slotProps={{ tooltip: { sx:{ letterSpacing: 1, fontSize: "12px" } } }}
                                >
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
        </>
    )
}

export default Dashboard