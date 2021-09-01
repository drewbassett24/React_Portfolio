
import ReadMeReadMeScreenshot5 from "../../assets/ReadMeReadMeScreenshot5.png";
import TradewiseScreenshot1 from "../../assets/TradewiseScreenshot1.jpg";
import PassGenScreenshot1 from "../../assets/PassGenScreenshot1.jpg";
import Project1Screenshot2 from "../../assets/Project1Screenshot2.jpg";

import WorkSchedulerScreenshot1 from "../../assets/WorkSchedulerScreenshot1.jpg";
import WeatherDashScreenshot1 from "../../assets/WeatherDashScreenshot1.jpg";
import Project from "../Project";

const projectData = [
    {
        id: 1, 
        repo: "https://github.com/drewbassett24/Tradewise",
        deployed: "https://uob-tradewise.herokuapp.com/",
        img: TradewiseScreenshot1,
        alt: "Tradewise",
        title: "Tradewise",
        descrip: "This app was designed to provide a simple way for customers post household maintenance jobs for response by a professional tradesman.",
    },
    {
        id: 2,
        repo: "https://github.com/drewbassett24/ReadMeReadMe",
        deployed: "https://github.com/drewbassett24/ReadMeReadMe",
        img: ReadMeReadMeScreenshot5,
        alt: "ReadMeReadMe app",
        title:"ReadMeReadMe",
        descrip: "This app is designed to make st easier for a busy developer, probably a freelancer, to quickly create a Read Me file to describe a new app. Most of the visuals concern the Terminal in which the developer answers a series of questions, in order for the app to compile the document."
    },
    {
        id: 3,
        repo: "https://github.com/drewbassett24/UoB_BC_AstronomicalEventSearch",
        deployed: "https://drewbassett24.github.io/UoB_BC_AstronomicalEventSearch/",
        img: Project1Screenshot2,
        alt: "Astronomical Event Search" ,
        title: "Astronomical Event Search",
        descrip: "I was part of a team that designed this app as a collaborative project. The app is intended to allow users to search for astronomical events. A selection of APIs are used to acquire data on topics such as sun and moon rise and set times, NASA's picture of the day and other information."
        
    },
    {
        id: 4, 
        repo: "https://github.com/drewbassett24/Password-Generator",
        deployed: "https://drewbassett24.github.io/Password-Generator/",
        img: PassGenScreenshot1,
        alt: "Password Generator",
        title: "Password Generator",
        descrip: "This app is designed to generate a password from randomised characters. A series of arrays are used to select Upper, Lower, Numeral and Special case characters which it presents in randomised order."
    },
    {
        id: 5,
        repo: "https://github.com/drewbassett24/Work-Day-Scheduler",
        deployed: "https://drewbassett24.github.io/Work-Day-Scheduler/",
        img: WorkSchedulerScreenshot1,
        alt: "Work Scheduler app",
        title: "Work Scheduler app",
        descrip: "This app was designed to help the user schedule a busy day. Hourly time slots allow the user to enter tasks or appointments, while tracking the time of day. Time slots in the past are green, those in the past are grey and the current hour is red."
    },
    {
        id: 6,
        repo: "https://github.com/drewbassett24/Weather-Dashboard",
        deployed: "https://drewbassett24.github.io/Weather-Dashboard/",
        img: WeatherDashScreenshot1,
        alt: "Weather-Dashboard app",
        title: "Weather-Dashboard app",
        descrip: "This app was designed to allow a user to check the weather in any city in the world, whether as a potential destination or a place remembered fondly. It provides the user with various data, from temperature to windspeed and humidity."
    },

];

 const projectComponents = projectData.map((x) => (
     <Project
        repo={x.repo}
        deployed={x.deployed}
        img={x.img}
        alt={x.alt}
        title={x.title}
        descrip={x.descrip}
    />
 ));

 const Projects = () => {
     return (
         <section className="project section" id="projects">
             <h2 className="section-title">Projects</h2>
             <div className="project-container body">{projectComponents}</div>
         </section>
     );
 };

 export default Projects;