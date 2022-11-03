import Home from "../Home";
import Contact from "../Contact";
import About from "../About";
import Products from "../Products";
import SingleProduct from "../SingleProduct";
import Cart from "../Cart";
import Error from "../Error";
import '../Css/Main.css';
import { Routes, Route } from "react-router-dom";


const Main = () => {
  return (
        <Routes>
            <Route path="/" element={<Home HeadingName="Ganesh Maharnur" />} />
            <Route path="/abouts" element={<About HeadingName="Vicky More" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/single_product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
        </Routes>
  )
}

export default Main

