import Navbar from "./components/Navbar.jsx";
import {BrowserRouter} from "react-router-dom";

export default function App() {


  return (
    <>
      <BrowserRouter>
         <Navbar/>
      </BrowserRouter>
    </>
  )
}


