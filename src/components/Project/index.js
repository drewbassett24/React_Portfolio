const Project = (props) => {
  return (
    <div className="project-img">
      <a href={props.deployed} target="_blank" rel="noreferrer noopener">
          <img src={props.img} className="screenshot" alt={props.alt} />
          <div className="h2">{props.title}</div>
          <div>{props.descrip}</div>
          <div className="repo-btn">
            <a href={props.repo} target="_blank" rel="norefferer noopener" className="home-social-icon" >
            <i className="bi bi-github"></i>
            </a>
          </div>
      </a>
    </div>
    
  );
};


export default Project;