import Banner from "../Banner/banner";
import ReadMeReadMeScreenshot1 from "./images/ReadMeReadMeScreenshot1.png";
import ReadMeReadMeScreenshot3 from "./images/ReadMeReadMeScreenshot3.png";
import ReadMeReadMeScreenshot4 from "./images/ReadMeReadMeScreenshot4.png";
import ReadMeReadMeScreenshot5 from "./images/ReadMeReadMeScreenshot5.png";
import TradewiseScreenshot1 from "./images/TradewiseScreenshot1.jpg";
import TradewiseScreenshot2 from "./images/TradewiseScreenshot2.jpg";
import PassGenScreenshot1 from "./images/PassGenScreenshot1.jpg";
import PassGenScreenshot2 from "./images/PassGenScreenshot2.jpg";
import Project1Screenshot2 from "./images/Project1Screenshot2.jpg";
import Project1UserFlow from "./images/Project1UserFlow.jpg";
import Project1Wireframe from "./images/Project1Wireframe.jpg";
import WorkSchedulerScreenshot1 from "./images/WorkSchedulerScreenshot1.jpg";
import WorkSchedulerScreenshot2 from "./images/WorkSchedulerScreenshot2.jpg";
import WeatherDashScreenshot1 from "./images/WeatherDashScreenshot1.jpg";
import WeatherDashScreenshot2 from "./images/WeatherDashScreenshot2.jpg";


const Portfolio = () => {
    return (
        <div>
            
            <main className="container-fluid card bg-light">
                <div>
                    <Banner/>
                </div>
                <section className="container-fluid">
                    <div className="row  m-4">
                        <div className="col col-md-5 p-3 border rounded">
                            <div className="row">
                                <img src={TradewiseScreenshot1} className="img-fluid mx-auto d-block"
                                    alt="Screenshot of Tradewise app deployed." />
                            </div>
                        </div>

                        <div className="col col-md-2">
                        </div>

                        <div className="col col-md-5 p-3 mt-2 mt-md-0 border rounded object-fit float-right">
                            <img src={TradewiseScreenshot2} className="img-fluid mx-auto d-block"
                                alt="Screenshot of Tradewise app deployed." />
                        </div>

                    </div>
                    <div className="row m-md-4 pt-md-4 text-center">
                        <div className="col">
                            <h3>Tradewise</h3>
                            <p className="text-justify">This app was designed as a collaborative project. The aim of Tradewise is to provide a simple and easy to use platform, for customers to find
                            a tradesman for any given household job. Similarly, the site allows tradesmen to connect with
                            customers; a tradesman can add a quote to a customer's job posting and receive
                            a notification if it has been accepted.</p>
                            <p>The application utilises the Model, View and Controller (MVC) architectural design principles,
                            express-handlebars to render dynamic web content, sequelize npm to construct the database tables and entity relationships for the user data and express.js, which interacts with the database tables to manipulate data.</p>
                            <p class="font-weight-light">Click on the links below.</p>
                            <p><a href="https://github.com/drewbassett24/Tradewise" target="_blank">GitHub Repository</a></p>
                            <p><a href="https://uob-tradewise.herokuapp.com/" target="_blank">Deployed</a></p>
                        </div>
                    </div>
                </section>

                <section className="container-fluid">
                    <div className="row  m-4">

                        <div className="col col-md-5 p-3 border rounded">
                            <div className="row">
                                <img src={ReadMeReadMeScreenshot1} className="img-fluid mx-auto d-block"
                                    alt="Screenshot." />
                            </div>
                            

                        </div>

                        <div className="col col-md-2">
                        </div>

                       
                        <div className="col col-md-5 p-3 mt-2 mt-md-0 border rounded object-fit float-right">
                            <img src={ReadMeReadMeScreenshot5} className="img-fluid mx-auto d-block"
                                alt="Screenshot." />
                        </div>

                    </div>
                    <div className="row m-md-4 pt-md-4 text-center">
                        <div className="col">
                            <h3>ReadMeReadMe</h3>
                            <p className="text-justify">This app is designed to make st easier for a busy developer, probably a freelancer, to quickly create a Read Me file to describe a new app.</p>
                            <p>As you can see above, most of the visuals concern the Terminal in which the developer answers a series of questions, in order for the app to compile the document.</p>
                            <p className="font-weight-light">Click on the links below.</p>
                            <p><a href="https://github.com/drewbassett24/ReadMeReadMe" target="_blank">GitHub Repository</a></p>
                            <p><a href="https://drewbassett24.github.io/ReadMeReadMe/" target="_blank">Deployed</a></p>
                        </div>
                    </div>
                </section>

                <section className="container-fluid">
                    <div className="row  m-4">

                        <div className="col col-md-5 p-3 border rounded">
                            <div className="row">
                                <img src={Project1Screenshot2} className="img-fluid mx-auto d-block"
                                    alt="Astronomical Event Search." />
                            </div>

                            <div className="row">
                                <img src={Project1UserFlow} className="img-fluid mx-auto d-block"
                                    alt="User Workflow for Astronomical Event Search." />
                            </div>
                        </div>

                        <div className="col col-md-2">
                        </div>

                        <div className="col col-md-5 p-3 mt-2 mt-md-0 border rounded object-fit float-right">
                            <img src={Project1Wireframe} className="img-fluid mx-auto d-block"
                                alt="Password Generator app." />
                        </div>

                    </div>
                    <div className="row m-md-4 pt-md-4 text-center">
                        <div className="col">
                            <h3>Astronomical Event Search</h3>
                            <p className="text-justify">I was part of a team that designed this app as a collaborative project. The app is intended to allow users to
                            search for astronomical events.
                            A selection of APIs are used to acquire data on topics such as sun and moon rise and set times, NASA's picture
          of the day and other information.</p>
                            <p>Above, you can see the work flow diagram we sued to plan how our website would work, as well as the wireframe
          we used to employ a 'mobile first' design process.</p>
                            <p className="font-weight-light">Click on the links below.</p>
                            <p><a href="https://github.com/drewbassett24/UoB_BC_AstronomicalEventSearch" target="_blank">GitHub Repository</a></p>
                            <p><a href="https://drewbassett24.github.io/UoB_BC_AstronomicalEventSearch/" target="_blank">Deployed</a></p>
                        </div>
                    </div>
                </section>

                <section className="container-fluid">
                    <div className="row  m-4">
                        <div className="col col-md-5 p-3 border rounded">
                            <img src={PassGenScreenshot1} className="img-fluid mx-auto d-block"
                                alt="Screenshot of a Password Generator app." />
                        </div>
                        <div className="col-md-2">
                        </div>
                        <div className="col col-md-5 p-3 mt-2 mt-md-0 border rounded object-fit float-right">
                            <img src={PassGenScreenshot2} className="img-fluid mx-auto d-block"
                                alt="Screenshot of a Password Generator app." />
                        </div>
                    </div>
                    <div className="row m-md-4 pt-md-4 text-center">
                        <div className="col">
                            <h3>Password Generator</h3>
                            <p className="text-justify">This app is designed to generate a password from randomised characters.
                            A series of arrays are used to select Upper, Lower, Numeral and Special case characters which it presents in
            randomised order.</p>
                            <p className="font-weight-light"> Click on the links below.</p>
                            <p><a href="https://github.com/drewbassett24/Password-Generator" target="_blank">GitHub Repository</a></p>
                            <p><a href="https://drewbassett24.github.io/Password-Generator/" target="_blank">Deployed</a></p>
                        </div>
                    </div>
                </section>

                <section className="container-fluid">
                    <div className="row  m-4">
                        <div className="col col-md-5 p-3 border rounded">
                            <img src={WorkSchedulerScreenshot2} className="img-fluid mx-auto d-block"
                                alt="Screenshot of a Work Scheduler app." />
                        </div>
                        <div className="col-md-2">
                        </div>
                        <div className="col col-md-5 p-3 mt-2 mt-md-0 border rounded object-fit float-right ">
                            <img src={WorkSchedulerScreenshot1} className="img-fluid mx-auto d-block"
                                alt="Screenshot of a Work Scheduler app." />
                        </div>
                    </div>
                    <div clasNames="row m-md-4 pt-md-4 text-center">
                        <div className="col">
                            <h3>Work Scheduler</h3>
                            <p className="text-justify">This app was designed to help the user schedule a busy day. Hourly time slots allow
                            the user to enter tasks
                            or appointments, while tracking the time of day. Time slots in the past are green, those in the past are
            grey and the current hour is red.</p>
                            <p className="font-weight-light">Click on the links below.</p>
                            <p><a href="https://github.com/drewbassett24/Work-Day-Scheduler" target="_blank">GitHub Repository</a></p>
                            <p><a href="https://drewbassett24.github.io/Work-Day-Scheduler/" target="_blank">Deployed</a></p>
                        </div>
                    </div>
                </section>

                <section className="container-fluid">
                    <div className="row  m-4">
                        <div class="col col-md-5 p-3 border rounded">
                            <img src={WeatherDashScreenshot1} className="img-fluid mx-auto d-block"
                                alt="Screenshot of a Weather Dashboard app." />
                        </div>
                        <div className="col-md-2">
                        </div>
                        <div className="col col-md-5 p-3 mt-2 mt-md-0 border rounded object-fit float-right ">
                            <img src={WeatherDashScreenshot2} className="img-fluid mx-auto d-block"
                                alt="Screenshot of a Weather Dashboard app." />
                        </div>
                    </div>
                    <div className="row m-md-4 pt-md-4 text-center">
                        <div className="col">
                            <h3>Weather Dashboard</h3>
                            <p className="text-justify">This app was designed to allow a user to check the weather in any city in the world,
                            whether as a potential destination or a place remembered fondly. It provides the user with various data,
                            from temperature to windspeed and humidity.</p>
                            <p className="font-weight-light">Click on the links below.</p>
                            <p><a href="https://github.com/drewbassett24/Weather-Dashboard" target="_blank" rel="noreferrer">GitHub Repository</a></p>
                            <p><a href="https://drewbassett24.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">Deployed</a></p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}

export default Portfolio;