import logo from "./logo.svg";
import "./App.css";
import UserDashboard from "./Pages/Dashboard/UserDashboard/UserDashboard";
import Home from "./Pages/Home/Home/Home";
import AuthProvider from "./Context/AuthProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./User/Login";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
