import './App.css'
import ProductsApp from "products/ProductApp"
import CartApp from "cart/CartApp"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <h1>Host App</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/products' element={<ProductsApp/>} />
          <Route path="/cart" element={<CartApp />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
