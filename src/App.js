import React from 'react'
import Product from './Components/Product'

function App() {
  return (
    <div style={{
      backgroundColor : "#2e3234",
    }}>
      <h1 style={{
        marginTop :"0px",
        textAlign : "center",
        color : "#d63e3e"
      }}>PRODUCTS LIST</h1>
      <Product />
    </div>
  )
}

export default App
