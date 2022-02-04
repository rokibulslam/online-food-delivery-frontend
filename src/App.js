import "./App.css";
import Home from "./Pages/Home/Home/Home";
import AuthProvider from "./Context/AuthProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/LoginRegister/Login/Login";
import Register from "./Pages/LoginRegister/Register/Register";


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
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
