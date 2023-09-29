import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer";

export function DefaultLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}