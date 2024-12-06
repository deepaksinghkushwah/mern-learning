import './App.css'
import {Footer, Blog, Possibility, Feature, WhatGTP3, Header} from "./containers";
import {CTA, Brand, Navbar} from "./components"
function App() {

  return (
    <div className='app'>
      <div className="gradient_bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Blog></Blog>
      <Brand></Brand>
      <WhatGTP3></WhatGTP3>
      <Feature></Feature>
      <Possibility></Possibility>
      <Footer></Footer>
    </div>
  )
}

export default App
