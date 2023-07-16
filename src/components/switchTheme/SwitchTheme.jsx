import {useTheme} from "../../store/ThemeContext.jsx";
import {FaSun} from "react-icons/fa6";
import {FaMoon} from "react-icons/fa";
import "./SwitchTheme.scss";

export default function SwitchTheme() {
   const {isDarkTheme,handleChangeTheme} = useTheme();
   return (
      <>
         <div style={{
            position:"fixed",
            top:"50%",
            left:"0",
            transform:"translateY(-50%)",
            zIndex:"9999"
         }}>
            <button
               onClick={() => handleChangeTheme()}
               className={`${isDarkTheme && "darkmode"}`}
            >
               {isDarkTheme ? <FaSun size={22}/> : <FaMoon size={22}/>}
            </button>
         </div>
      </>
   );
}
