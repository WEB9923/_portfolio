import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import SwitchTheme from "../components/switchTheme/SwitchTheme.jsx";

export default function Layout() {
   return (
      <>
         <Navbar/>
         <SwitchTheme/>
         <Outlet/>
         <Footer/>
      </>
   );
}
