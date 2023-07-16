import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.jsx";
import AboutPage from "../pages/aboutPage/AboutPage.jsx";
import ProjectsPage from "../pages/projectsPage/ProjectsPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import ContactPage from "../pages/contactPage/ContactPage.jsx";

export const routes = createBrowserRouter([
   {
      path:"/",
      element:<Layout/>,
      children:[
         {path:"/", element:<HomePage />},
         {path:"/about",element:<AboutPage/>},
         {path:"/projects",element:<ProjectsPage/>},
         {path:"/contact",element:<ContactPage/>}
      ]
   }
]);
