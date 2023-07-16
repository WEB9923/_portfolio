import "./Card.scss";
import {BiCopy, BiLink} from "react-icons/bi";
import {PiGithubLogo} from "react-icons/pi";
import {BsCalendar3, BsCheckCircleFill, BsFillXCircleFill} from "react-icons/bs";
import {useRef, useState} from "react";
import {motion} from "framer-motion";
import {useTheme} from "../../store/ThemeContext.jsx";

// eslint-disable-next-line react/prop-types
export default function Card({data}) {
   const textRef = useRef(null);
   const [isCopied,setIsCopied] = useState(false);
   const handleCopy = (text) => {
      navigator.clipboard.writeText(text).then(
         () => setIsCopied(true)
      );
   }

   const {isDarkTheme} = useTheme();

   return (
      <>
         <motion.div className={`card ${isDarkTheme && "darkmode"}`} initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{type:"spring",stiffness:100,duration:0.5}}>
            <div className="card-top">
               {/* eslint-disable-next-line react/prop-types */}
               <h2>{data?.name}</h2>
            </div>
            <div className="card-body">
               <div className="lang">
                  {/* eslint-disable-next-line react/prop-types */}
                  language: <span>{data?.language ? data.language : "not available please see source code"}</span>
               </div>
               <div className="has-downloads">
                  has-downloads: {data?.has_downloads ? <span className="has"><BsCheckCircleFill size={18}/></span> : <span className="not-has"><BsFillXCircleFill size={18}/></span>}
               </div>
               <div className="has-pages">
                  has-pages: {data?.has_pages ? <span className="has"><BsCheckCircleFill size={18}/></span> : <span className="not-has"><BsFillXCircleFill size={18}/></span>}
               </div>
               <div className="has-project">
                  has-projects: {data?.has_projects ? <span className="has"><BsCheckCircleFill size={18}/></span> : <span className="not-has"><BsFillXCircleFill size={18}/></span>}
               </div>
               <div className="has-wiki">
                  has-wiki: {data?.has_wiki ? <span className="has"><BsCheckCircleFill size={18}/></span> : <span className="not-has"><BsFillXCircleFill size={18}/></span>}
               </div>
            </div>
            <div className="info">
               <div className="">
                  <p>clone: </p>
                  <input id={data?.id} ref={textRef} type="text" readOnly={true} value={data?.clone_url} onCopy={(e) => e.preventDefault()}/>
                  <button className="copy" onClick={() => handleCopy(textRef.current.value)}>
                     {isCopied ? "copied!"
                        : <>
                           <BiCopy size={18}/>
                           copy
                        </>}
                  </button>
               </div>
               <div className="created-at">
                  <BsCalendar3 size={18}/>
                  <p>{data?.created_at}</p>
               </div>
            </div>
            <div className="card-footer">
               <a href={data?.description} target="_blank" rel="noreferrer" >
                  <BiLink size={18}/>
                  {data?.description ? "live preview" : "not available"}
               </a>
               <a href={data?.html_url} target="_blank" rel="noreferrer" >
                  <PiGithubLogo size={18}/>
                  {data?.html_url ? "view code" : "not available"}
               </a>
            </div>
         </motion.div>
      </>
   );
}
