import { Route, Routes } from 'react-router-dom';
import Layout from "./layouts/main";
import Login from "./components/Login";
import Register from "./components/Register";
import Unauthorized from "./components/Unauthorized";
import RequireAuth from "./components/RequireAuth";
import Home from "./components/Home";
import Missing from "./components/Missing";
import Admin from "./components/Admin";
import Editor from "./components/Editor";

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />        
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* protected routes */}
        <Route element={<RequireAuth allowedRoles={["admin","editor"]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* admin protected routes */}
        <Route element={<RequireAuth allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        {/* editor protected routes */}
        <Route element={<RequireAuth allowedRoles={["editor"]} />}>
          <Route path="/editor" element={<Editor />} />
        </Route>

        <Route path="*" element={<Missing />}/>
      </Route>
    </Routes>
  );
}

export default App;
