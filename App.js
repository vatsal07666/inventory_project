import '../src/App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MiniDrawer from "./pages/drawer/minidrawer";
// import { GlobalProvider } from './pages/drawer/GlobalContext';

import Login from "./pages/login/loginpage"
import HomePage from './pages/drawer/home';
import CreateAccount from "./pages/login/registerpage"
import AddProduct from "./pages/drawer/addproduct";
import ViewProduct from "./pages/drawer/viewproduct";
import AddCategory from "./pages/drawer/addcategory";
import ViewCategory from "./pages/drawer/viewcategory";
import AddPurchase from "./pages/drawer/addpurchase";
import ViewPurchase from "./pages/drawer/viewpurchase";
import AddUser from "./pages/drawer/adduser";
import ViewUser from "./pages/drawer/viewuser";
import AddSales from "./pages/drawer/addsales";
import ViewSales from "./pages/drawer/viewsales";
import AddCustomer from "./pages/drawer/addcustomer";
import ViewCustomer from "./pages/drawer/viewcustomer";

function App() {
  return (
    // <GlobalProvider>
        <Router>
          <Switch>

            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={CreateAccount} />

            <Route>
              <MiniDrawer>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/dashboard/product/add" component={AddProduct} />
                  <Route exact path="/dashboard/product/view" component={ViewProduct} />
                  <Route exact path="/dashboard/category/add" component={AddCategory} />
                  <Route exact path="/dashboard/category/view" component={ViewCategory} />
                  <Route exact path="/dashboard/purchase/add" component={AddPurchase} />
                  <Route exact path="/dashboard/purchase/view" component={ViewPurchase} />
                  <Route exact path="/dashboard/user/add" component={AddUser} />
                  <Route exact path="/dashboard/user/view" component={ViewUser} />
                  <Route exact path="/dashboard/sales/add" component={AddSales} />
                  <Route exact path="/dashboard/sales/view" component={ViewSales} />
                  <Route exact path="/dashboard/customer/add" component={AddCustomer} />
                  <Route exact path="/dashboard/customer/view" component={ViewCustomer} />
                </Switch>
              </MiniDrawer>
            </Route>

          </Switch>
        </Router>
    // </GlobalProvider>
  );
}

export default App;