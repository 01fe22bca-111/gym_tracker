import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login_as_admin from "./pages/Login_as_admin";
import Pagenotfound from "./pages/Pagenotfound";
import Login_as_customer from "./pages/Login_as_customer";
import Admin from "./pages/Admin";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login_as_admin" element={<Login_as_admin />} />
        <Route path="/*" element={<Pagenotfound />} />
        <Route path="/login_as_customer" element={<Login_as_customer />} />
        <Route path="./Admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
