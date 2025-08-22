import './App.css'
import  { useEffect, useState } from 'react'
import ProductsApp from "products/ProductApp"
import CartApp from "cart/CartApp"
function App() {
  return (
    <>
      <h1>Host App</h1>
       <ProductsApp />
       <CartApp/>
    </>
  )
}

export default App;
