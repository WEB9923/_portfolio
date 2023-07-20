import {Link, NavLink} from "react-router-dom";
import links from "../../data/Links.json";
import {useState} from "react";
import "./Navbar.scss";
import {BsListNested} from "react-icons/bs";
import {motion} from "framer-motion";
import SocialIcons from "../socialIcons/SocialIcons.jsx";
import {useTheme} from "../../store/ThemeContext.jsx";

export default function Navbar() {
   const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
   const handleShowMobileMenu = () => {
      setIsShowMobileMenu(!isShowMobileMenu)
   }
   const {isDarkTheme} = useTheme();
   return (
      <>
         <motion.nav
            className={`navbar-nav ${isDarkTheme && "darkmode"}`}
         >
            <div className="container">
               <motion.div
                  initial={{
                     x: -30,
                     opacity: 0
                  }}
                  animate={{
                     x: 0,
                     opacity: 1
                  }}
                  transition={{
                     duration: 0.5,
                     type: "tween",
                     delay:0.3
                  }}
                  className="nav-left"
               >
                  <Link to={"/"} className="logo">{`{<a.ch.p./>}`}</Link>
               </motion.div>
               <motion.div
                  initial={{
                     x: 30,
                     opacity: 0
                  }}
                  animate={{
                     x: 0,
                     opacity: 1
                  }}
                  transition={{
                     duration: 0.5,
                     type: "tween",
                     delay:0.3
                  }}
                  className="nav-right"
               >
                  {/*<AnimatePresence>*/}
                     <motion.ul
                        className={`${isShowMobileMenu && "showMobileMenu"} ul`}
                     >
                        {links.map((link) => (
                           <li
                              key={link.id}
                           >
                              <NavLink to={link.path} onClick={() => setIsShowMobileMenu(false)}>
                                 {link.title}
                              </NavLink>
                           </li>
                        ))}
                     </motion.ul>
                  {/*</AnimatePresence>*/}
                  <div style={{
                     display: "flex",
                     alignItems: "center",
                     gap: "20px"
                  }}>
                     <SocialIcons/>
                     <button
                        className={`burger ${isShowMobileMenu && "active"}`}
                        onClick={() => handleShowMobileMenu()}
                     >
                        <BsListNested size={23}/>
                     </button>
                  </div>
               </motion.div>
            </div>
         </motion.nav>
      </>
   );
}
