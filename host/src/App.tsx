import './App.css'
import ProductsApp from "products/ProductApp"
import CartApp from "cart/CartApp"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
function App() {
  const items = useSelector((state: any) => state.cart.items);
  // console.log("Items", items)
  return (
    <>
      <h1>Host App</h1>
      {/* Centralized */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='/products/*' element={<ProductsApp/>} />
          <Route path="/cart/*" element={<CartApp />}/>
        </Routes>
      </BrowserRouter> */}

      {/* Passing props to remote component */}
      <CartApp data={'data'} />
    </>
  )
}

export default App;
