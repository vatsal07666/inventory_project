import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MiniDrawer from "./files/minidrawer";

import Login from "./files/login/loginpage"
import CreateAccount from "./files/login/registerpage"
import HomePage from './files/home/home';
import AddProduct from "./files/product/addProduct";
import ViewProduct from "./files/product/viewProduct";
import AddCategory from "./files/category/addCategory";
import ViewCategory from "./files/category/viewCategory";
import AddPurchase from "./files/purchase/addPurchase";
import ViewPurchase from "./files/purchase/ViewPurchase";
import AddUser from "./files/user/addUser";
import ViewUser from "./files/user/viewUser";
import AddSales from "./files/sales/addSales";
import ViewSales from "./files/sales/viewSales";
import AddCustomer from "./files/customer/addCustomer";
import ViewCustomer from "./files/customer/viewCustomer";

function App() {
  return (
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
  );
}

export default App;