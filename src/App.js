import { BrowserRouter, Routes, Route } from "react-router-dom";
import Diet_plan from "./pages/Diet_paln";
import Warmup from "./pages/Warmup";
import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";
import Restday from "./pages/Restday";
import Schedule from "./pages/Schedule";
import Payment from "./pages/Payment";
import Logout  from  "./pages/Logout";
import Pagenotfound from "./pages/Pagenotfound";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Diet_plan" element={<Diet_plan/>} />
          <Route path="/Warmup" element={<Warmup />} />
          <Route path="/Day1" element={<Day1 />} />
          <Route path="/Day2" element={<Day2 />} />
          <Route path="/Restday" element={<Restday />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Logout" element={<Logout/>} />
          <Route path="/*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
