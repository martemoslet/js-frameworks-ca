import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Nav from "./components/ui/Nav";
import Contact from "./pages/ContactPage";
import Home from "./pages/Home";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Header>
        <Nav />
        <Routes>
          
            <Route index element={<Home />} />
            <Route path="contactPage" element={<Contact />} />
 
        </Routes>
      </Header>
      <Footer bg="LavenderBlush" text="DarkOrchid" padding="50px">
        Copyright {new Date().getFullYear()}
      </Footer>
    </div>
  );
}
