import {Link, NavLink} from "react-router-dom";
import SocialIcons from "../socialIcons/SocialIcons.jsx";
import links from "../../data/Links.json";
import "./Footer.scss";

export default function Footer() {
   return (
      <>
         <footer className="footer">
            <div className="container">
               <div className="footer-top">
                  <div className="footer-left">
                     <Link to={"/"} className="logo">{`{<a.ch.p./>}`}</Link>
                  </div>
                  <div className="footer-right">
                     <div className="contact-info">
                        <p className="phone">+995 571 06 32 39</p>
                        <p>amikochixladze1234@gmail.com</p>
                     </div>
                     <div className="social">
                        <SocialIcons/>
                     </div>
                  </div>
               </div>
               <div className="footer-bottom">
                  <div className="footer-bottom-left">
                     <ul>
                        {links.map((link) => (
                           <li
                              key={link.id}
                           >
                              <NavLink to={link.path}>
                                 {link.title}
                              </NavLink>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="footer-bottom-right">
                     <p>built by <span>Amiko</span> with <span>Love</span> & <span>Coffee☕</span></p>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
}
