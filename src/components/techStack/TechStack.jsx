import {stack} from "../../data/techData.js";
import TechLevel from "../techLevel/TechLevel.jsx";
import {motion} from "framer-motion";
import "./TechStack.scss";

import notAvailable from "../../assets/not-available.png";
import AnimatedTitle from "../animatedTitle/AnimatedTitle.jsx";

export default function TechStack() {
   const title = "<h1>tech-stack</h1>".split("");
   return (
      <>
         <section className="tech-stack">
            <div className="container">
               <AnimatedTitle title={title}/>
               <div className="tech-stack-wrapper">
                  {stack.map((image) => {
                     return (
                        <motion.div
                           key={image.title} className="stack-item" initial={{y: 40}}
                           whileInView={{y: 0}}
                           transition={{type: "spring", stiffness: 100, duration: 0.5}}
                        >
                           <div className="img">
                              {image.img ? <img src={image.img} alt={image.title}/>
                                 : <img src={notAvailable} alt="not available"/>}
                           </div>
                           <div className="language">
                              <h3>{image.title}</h3>
                           </div>
                        </motion.div>
                     )
                  })}
               </div>
               <div className="tech-level">
                  <TechLevel data={stack}/>
               </div>
            </div>
         </section>
      </>
   );
}
