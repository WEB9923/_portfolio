import about from "../../data/about.json";
import "./AboutPage.scss";
import {BsCalendar3, BsCheckCircleFill, BsFillXCircleFill} from "react-icons/bs";
import {RiBuilding4Line} from "react-icons/ri";

export default function AboutPage() {
   const title = "<h1>about me</h1>";
   return (
      <>
         <section className="about-me">
            <div className="container">
               <h1 className="title">{title}</h1>
               <div className="about-me-wrapper">
                  <p className="about-text">{"<p>"}👋{about["about-me"]}{"<p/>"}</p>
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
                                 <div key={item.id} className="education-component">
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
                                 </div>
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
