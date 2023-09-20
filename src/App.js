import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Navbar from "./shares/Navbar";
import ContextProvider from "./context/ContextProvider";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    description: "This is the first product."
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
    description: "This is the second product."
  },
  {
    id: 3,
    name: "Product 3",
    price: 7.5,
    description: "This is the third product."
  }
];

export default function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<Products products={products} />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}
