import {FaGithub,FaFacebook} from "react-icons/fa";
import "./SocialIcons.scss";

export default function SocialIcons() {
   return (
      <>
         <div style={{
            display:"flex",
            alignItems:"center",
            gap:"15px"
         }}>
            <a
               target="_blank"
               rel="noreferrer"
               href="https://github.com/WEB9923"
               className={"github"}
            >
               <FaGithub size={25}/>
            </a>
            <a
               target="_blank"
               rel="noreferrer"
               href="https://www.facebook.com/profile.php?id=100009908730884"
               className={"fb"}
            >
               <FaFacebook size={25}/>
            </a>
         </div>
      </>
   );
}
