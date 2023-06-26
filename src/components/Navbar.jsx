import { NavLink} from "react-router-dom";

const links = [

];

export default function Navbar() {
   return (
      <>
         <nav className="">
            {links.map((link) => (
               <NavLink key={link.id} to={link.path}>{link.title}</NavLink>
            ))}
         </nav>
      </>
   );
}