import Banner from "./components/Banner/banner.js";
const Project = (props) => {
  return (
    <div className="project-img">
      <a href={props.deployed} target="_blank" rel="noreferrer noopener">
        <img src={props.img} alt={props.alt} />
        <div className="image-overlay">
          <div className="overlay title">{props.title}</div>
          <p className="overlay-descr">
            {props.descrip}
          </p>
          <div className="repo-btn">
            <a
            href={props.repo}
            target="_blank"
            rel="norefferer noopener"
            className="home-social-icon"
            >
            <i className="bx bx1-github"></i>
            </a>
          </div>
        </div>
      </a>
    </div>
    
  );
};


export default Project;