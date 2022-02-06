import "./App.css";
import Home from "./Pages/Home/Home/Home";
import AuthProvider from "./Context/AuthProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/LoginRegister/Login/Login";
import Register from "./Pages/LoginRegister/Register/Register";
import Purchase from "./Pages/Purchase/Purchase";
import PrivateRoute from "./Pages/LoginRegister/PrivateRoute/PrivateRoute";
import AllFoods from "./Pages/AllFoods/AllFoods";
import Dashboard from "./Pages/Dasboard/Dashboard/Dashboard";
import AddProduct from "./Pages/Dasboard/AddProduct/AddProduct";
import ManageOrder from "./Pages/Dasboard/ManageOrder/ManageOrder";
import MyOrder from "./Pages/Dasboard/MyOrder/MyOrder";
import Contact from "./Pages/Contact/Contact";
import Notfound from "./Pages/Notfound/Notfound";
import ManageProduct from "./Pages/Dasboard/ManageProduct/ManageProduct"
import MakeAdmin from "./Pages/Dasboard/MakeAdmin/MakeAdmin";
import AdminRoute from "./Pages/LoginRegister/AdminRoute/AdminRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/explore" element={<AllFoods />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route
              path="/home/purchase/:id"
              element={
                <PrivateRoute>
                  <Purchase />
                </PrivateRoute>
              }
            ></Route>
            <Route
              exact
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route
                path="/dashboard/addProduct"
                element={
                  <AdminRoute>
                    <AddProduct />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/dashboard/orders"
                element={
                  <AdminRoute>
                    <ManageOrder />
                  </AdminRoute>
                }
              ></Route>
              <Route path="/dashboard/myOrders" element={<MyOrder />}></Route>
              <Route
                path="/dashboard/manageProduct"
                element={
                  <AdminRoute>
                    <ManageProduct />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/dashboard/makeAdmin"
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              ></Route>
            </Route>
            <Route path="*" element={<Notfound></Notfound>}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
