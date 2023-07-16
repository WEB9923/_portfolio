import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/Routes.jsx";
import {ThemeContextProvider} from "./store/ThemeContext.jsx";

export default function App() {

  return (
    <>
       <ThemeContextProvider>
          <RouterProvider router={routes} />
       </ThemeContextProvider>
    </>
  )
}

