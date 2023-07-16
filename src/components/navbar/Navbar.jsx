import {Link, NavLink} from "react-router-dom";
import links from "../../data/Links.json";
import {useState} from "react";
import "./Navbar.scss";
import {BsListNested} from "react-icons/bs";
import {motion} from "framer-motion";
import SocialIcons from "../socialIcons/SocialIcons.jsx";

export default function Navbar() {
   const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
   const handleShowMobileMenu = () => {
      setIsShowMobileMenu(!isShowMobileMenu)
   }
   return (
      <>
         <nav className="navbar-nav">
            <div className="container">
               <motion.div
                  initial={{x: -50, opacity: 0}}
                  animate={{x: 0, opacity: 1}}
                  transition={{duration: 1, type: "tween"}}
                  className="nav-left"
               >
                  <Link to={"/"} className="logo">{`{<logo/>}`}</Link>
               </motion.div>
               <motion.div className="nav-right">
                  {/*<AnimatePresence>*/}
                  <ul className={`${isShowMobileMenu && "showMobileMenu"} ul`}>
                     {links.map((link) => (
                        <li
                           key={link.id}
                        >
                           <NavLink to={link.path} onClick={() => setIsShowMobileMenu(false)}>
                              {link.title}
                           </NavLink>
                        </li>
                     ))}
                  </ul>
                  {/*</AnimatePresence>*/}
                  <div style={{
                     display: "flex",
                     alignItems: "center",
                     gap: "20px"
                  }}>
                     <SocialIcons/>
                     <button className="burger" onClick={() => handleShowMobileMenu()}>
                        <BsListNested size={23}/>
                     </button>
                  </div>
               </motion.div>
            </div>
         </nav>
      </>
   );
}
