import {motion} from "framer-motion";
import AnimatedTitle from "../animatedTitle/AnimatedTitle.jsx";
import "./TechLevel.scss";
import {useTheme} from "../../store/ThemeContext.jsx";

// eslint-disable-next-line react/prop-types
export default function TechLevel({data}) {
   const title = "<h1>tech-stack-level</h1>".split("");
   const {isDarkTheme} = useTheme();
   return (
      <>
         <div className={`tech-level-content ${isDarkTheme && "darkmode"}`}>
            <AnimatedTitle title={title}/>
            <div className="tech-level-components">
               {/* eslint-disable-next-line react/prop-types */}
               {data.map((item, index) => (
                  <motion.div
                     initial={{y: 50, opacity: 0}}
                     transition={{duration: 0.5, type: "spring", stiffness: 100}}
                     whileInView={{y: 0, opacity: 1}}
                     key={index}
                     className="language-component"
                  >
                     <h5>{item.title}</h5>
                     <div className="line">
                        <div className="indicator" style={{width: `${item.level}%`}}>
                           <span className="tooltip" data-percent={item.level} />
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </>
   );
}
