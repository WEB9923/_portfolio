import about from "../../data/about.json";
import "./AboutPage.scss";
import {BsCalendar3, BsCheckCircleFill, BsFillXCircleFill} from "react-icons/bs";
import {RiBuilding4Line} from "react-icons/ri";
import {motion} from "framer-motion";
import {useTheme} from "../../store/ThemeContext.jsx";

export default function AboutPage() {
   const title = "<h1>about me</h1>";
   const {isDarkTheme} = useTheme();
   return (
      <>
         <section className={`about-me ${isDarkTheme && "darkmode"}`}>
            <div className="container">
               <h1 className="title">{title}</h1>
               <div className="about-me-wrapper">
                  <motion.p
                     className="about-text"
                     initial={{
                        opacity:0,
                        y:50
                     }}
                     animate={{
                        opacity:1,
                        y:0
                     }}
                     tranition={{
                        type:"spring",
                        duration:0.5,
                        stiffness:100
                     }}
                  >
                     {"<p>"}👋{about["about-me"]}{"<p/>"}
                  </motion.p>
                  <div className="about-content">
                     <div className="work-experience">
                        <h1 className="title">work experience</h1>
                        <h3>🚫{about["work-experience"]}</h3>
                     </div>
                     <div className="education">
                        <h1 className="title">education</h1>
                        <div className="education-wrapper">
                           {about.education.map((item) => {
                              return (
                                 <motion.div
                                    key={item.id}
                                    className="education-component"
                                    initial={{
                                       y:50,
                                       opacity:0
                                    }}
                                    whileInView={{
                                       y:0,
                                       opacity:1
                                    }}
                                    viewport={{once:false}}
                                    transition={{
                                       duration:0.5,
                                       type:"spring",
                                       stiffness:100
                                    }}
                                 >
                                    <div className="education-top">
                                       {item.languages.map((lang) => (
                                          <h4 key={lang} className="education-component-langs">{lang}</h4>
                                       ))}
                                    </div>
                                    <div className="education-component-body">
                                       <div className="education-component-body-details">
                                          <div>
                                             <RiBuilding4Line size={17}/>
                                             <p>{item.collage}</p>
                                          </div>
                                          <div>
                                             <BsCalendar3 size={17}/>
                                             <p>{item.period}</p>
                                          </div>
                                       </div>
                                       <div className="isCompleted">
                                          {item.completed ? <span className="completed"><BsCheckCircleFill size={15}/>completed</span>
                                             : <span className="not-completed"><BsFillXCircleFill size={15}/>not completed</span>}
                                       </div>
                                    </div>
                                 </motion.div>
                              )
                           })}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
