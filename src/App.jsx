import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/ContactPage";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutSuccess from "./pages/CheckoutSuccessPage";

export default function App() {
  return (
    <div>

        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="contactPage" element={<Contact />} />
            <Route path="ProductPage/:id" element={<ProductPage />} />
            <Route path="checkoutPage" element={<CheckoutPage />} />
            <Route path="checkoutSuccessPage" element={<CheckoutSuccess />} />
          </Route>
        </Routes>

    </div>
  );
}
