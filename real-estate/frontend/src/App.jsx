import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import CustomRoutes from './CustomRoutes'
import Spinner from './components/shared/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">      
    <Spinner/>
    <ToastContainer/>
      <BrowserRouter>
        <CustomRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App
