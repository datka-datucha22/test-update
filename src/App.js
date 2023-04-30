import React from "react";
import "./App.css";
import "./reset.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import Page1 from "./components/Pages/Page1";
import Page2 from "./components/Pages/Page2";
import Page3 from "./components/Pages/Page3";
import Page4 from "./components/Pages/Page4";
import Page5 from "./components/Pages/Page5";
import Page6 from "./components/Pages/Page6";
import Page7 from "./components/Pages/Page7";
import Page8 from "./components/Pages/Page8";
import Page9 from "./components/Pages/Page9";
import Page10 from "./components/Pages/Page10";
import Page11 from "./components/Pages/Page11";
import Page12 from "./components/Pages/Page12";
import Page13 from "./components/Pages/Page13";
import Page14 from "./components/Pages/Page14";
import Page15 from "./components/Pages/Page15";
import Page16 from "./components/Pages/Page16";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/khinkali" element={<Page1 />} />
            <Route path="/acharulixachapuri" element={<Page2 />} />
            <Route path="/kupati" element={<Page3 />} />
            <Route path="/imerulixachapuri" element={<Page4 />} />
            <Route path="/yavispancake" element={<Page5 />} />
            <Route path="/gozinayi" element={<Page6 />} />
            <Route path="/ekleri" element={<Page7 />} />
            <Route path="/shu" element={<Page8 />} />
            <Route path="/jackdaniels" element={<Page9 />} />
            <Route path="/jimbeam" element={<Page10 />} />
            <Route path="/jagermeister" element={<Page11 />} />
            <Route path="/capitanmorgan" element={<Page12 />} />
            <Route path="/cherryjuice" element={<Page13 />} />
            <Route path="/orangejuice" element={<Page14 />} />
            <Route path="/pomegranatejuice" element={<Page15 />} />
            <Route path="/applejuice" element={<Page16 />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
