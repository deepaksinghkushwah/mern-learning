import { Route, Routes } from "react-router-dom";
import Frontend from "./components/frontend/Frontend";
import Backend from "./components/backend/Backend";
import Home from "./components/Home";
import Admin from "./components/Admin";
import About from "./components/About";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Frontend />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="/admin" element={<Backend />}>
          <Route index element={<Admin />} />
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
