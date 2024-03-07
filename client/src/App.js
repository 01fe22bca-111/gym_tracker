import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login_as_admin from "./pages/Login_as_admin";
import Login_as_customer from "./pages/Login_as_customer";
import Admin from "./Admin/Admin";
import Admin_Header from "./Admin/Admin_Header";
import AdminList from "./Admin/AdminList";
import Customer from "./Admin/Customer";
import CustomerList from "./Admin/CustomerList";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login_as_admin" element={<Login_as_admin />} />
        <Route path="/login_as_customer" element={<Login_as_customer />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Admin_Header" element={<Admin_Header />} />
        <Route path="/AdminList" element={<AdminList />} />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/CustomerList" element={<CustomerList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
