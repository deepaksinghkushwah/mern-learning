import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyMap from './components/MyMap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-header">
          <h1 className='card-title'>Distance Calculator</h1>
        </div>
      </div>
      <div className="card-body mt-3">
        <MyMap />
      </div>
    </div>
  )
}

export default App
