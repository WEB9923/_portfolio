import "./Header.scss";
import AnimatedText from "../animatedText/AnimatedText.jsx";
import headerImage from "../../assets/header_image.jpg";
import {useTheme} from "../../store/ThemeContext.jsx";

export default function Header() {
   const proposal = "<>hello, my name is amiko,i'm front end web dev.</>".split("");
   const {isDarkTheme} = useTheme();
   return (
      <>
         <header className={`header ${isDarkTheme && "darkmode"}`}>
            <div className="container">
               <div className="header-left">
                  {proposal.map((letter,index) => (
                     <AnimatedText text={letter} index={index} key={index}/>
                  ))}
               </div>
               <div className="header-right">
                  <div className="header-image">
                     <img src={headerImage} alt="image not available"/>
                  </div>
               </div>
            </div>
         </header>
      </>
   );
}
