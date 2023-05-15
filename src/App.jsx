import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Nav from "./components/ui/Nav";
import Contact from "./components/pages/ContactPage";
import Home from "./components/pages/Home";

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
      <Header bg="lavender" text="deeppink" padding="50px">
        <h1>Site logo</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contactPage" element={<Contact />} />
          </Route>
        </Routes>
      </Header>
      <Footer bg="LavenderBlush" text="DarkOrchid" padding="50px">
        Copyright {new Date().getFullYear()}
      </Footer>
    </div>
  );
}
