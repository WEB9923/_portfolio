import Card from "../../components/card/Card.jsx";
import {useEffect, useState} from "react";
import {getData} from "../../services/GetRepositoriesData.js";
import Loader from "../../components/loader/Loader.jsx";
import "./ProjectsPage.scss";
import {useTheme} from "../../store/ThemeContext.jsx";


export default function ProjectsPage() {
   const title = "<h1>projects</h1>";
   const [isLoading,setIsLoading] = useState(false);
   const [reposData,setReposData] = useState(null);
   const [error,setError] = useState(null);

   const getReposData = async () => {
      try {
         setIsLoading(true);
         return await getData("https://api.github.com/users/WEB9923/repos");
      } catch (err) {
         setError(err);
      } finally {
         setIsLoading(false);
      }
   }


   useEffect(() => {
      getReposData().then((res) => setReposData(res));
   }, []);

   const {isDarkTheme} = useTheme();


   return (
      <>
         <section className={`projects-section ${isDarkTheme && "darkmode"}`}>
            <div className="container">
               <h1 className="title">{title}</h1>
               <div className="projects-wrapper">
                  {
                     isLoading ? <Loader /> : reposData?.map((repData) => {
                        return <Card key={repData.id} data={repData}/>
                     })
                  }
                  {error && <p className="error-text">{error}</p>}
               </div>
            </div>
         </section>
      </>
   );
}
