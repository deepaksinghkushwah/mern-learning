import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LayoutMain from "./components/layouts/LayoutMain";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from './pages/Login';
import Register from './pages/Register';
import Shop from './pages/Shop';
import FullCart from './pages/FullCart';
import Spinner from './components/common/Spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from './pages/Api';
import NotFound from './pages/NotFound';
function App() {
  return (
    <div className="App">
      <Spinner/>
      <ToastContainer autoClose={1000}/>
     <Router>
        <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<FullCart />} />
          <Route path="api" element={<Api />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
