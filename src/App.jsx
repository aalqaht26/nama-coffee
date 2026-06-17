import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import Home from "./pages/Home";
import Coffee from "./pages/Coffee";
import Tea from "./pages/Tea";
import Spices from "./pages/Spices";
import Dates from "./pages/Dates";
import GiftSets from "./pages/GiftSets";
import OurStory from "./pages/OurStory";
import FAQ from "./pages/FAQ";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import Contact from "./pages/Contact";
import TrackOrder from "./pages/TrackOrder";

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [shipping, setShipping] = useState("priority");

  const addToCart = (item) => {
    setCart((prev) => {
      const ex = prev.find((c) => c.cartId === item.cartId);
      if (ex) return prev.map((c) => c.cartId === item.cartId ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (cartId) => setCart((prev) => prev.filter((c) => c.cartId !== cartId));
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <BrowserRouter>
      <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: "#F5EDE3", color: "#3D1F0D", minHeight: "100vh", width: "100%", maxWidth: "100vw", overflowX: "hidden" }}>
        <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/coffee" element={<Coffee addToCart={addToCart} />} />
          <Route path="/tea" element={<Tea addToCart={addToCart} />} />
          <Route path="/spices" element={<Spices addToCart={addToCart} />} />
          <Route path="/dates" element={<Dates addToCart={addToCart} />} />
          <Route path="/gift-sets" element={<GiftSets addToCart={addToCart} />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/track-order" element={<TrackOrder />} />
        </Routes>
        <Footer />
        {cartOpen && (
          <CartDrawer
            cart={cart}
            onClose={() => setCartOpen(false)}
            onRemove={removeFromCart}
            shipping={shipping}
            onShipping={setShipping}
          />
        )}
      </div>
    </BrowserRouter>
  );
}
