import Header from "./ui/Header";
import Nav from "./ui/Nav"
import Footer from "./ui/Footer";
import { Outlet } from "react-router-dom";
export default function Layout() {
    return (
        <>
        <Header>
            <Nav />
        </Header>
        <main>
            <Outlet />
        </main>
        <Footer />
        </>
    )
}