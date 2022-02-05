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
                element={<AddProduct />}
              ></Route>
              <Route path="/dashboard/orders" element={<ManageOrder />}></Route>
              <Route path="/dashboard/myOrders" element={<MyOrder />}></Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
