import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Layout1 from "./components/Layouts/Layout1";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Dashboard from "./pages/member-pages/Dashboard";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout1 />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<Error />} />
            <Route element={<ProtectedRoute allowedRoles={['registered']}/>}>
              <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
