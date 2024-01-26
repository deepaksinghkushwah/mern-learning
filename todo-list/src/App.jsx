import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Todo from './components/todo/Todo'
import { Container } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App mt-3">
      
      <Container>
      <h1>Add/Edit/Delete todo example using state</h1>
      <Todo/>      
      </Container>
    </div>
  )
}

export default App
