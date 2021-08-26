const Project = (props) => {
  return (
    <div className="project-img d-flex col-12 mb-5">
      <img src={props.img} className="screenshot mx-auto d-block" alt={props.alt} />
      <a href={props.deployed} target="_blank" rel="noreferrer noopener" className="display-flex">
          <div className="repo-btn display-flex">
            <a href={props.repo} target="_blank" rel="norefferer noopener" className="home-social-icon" >
            <i className="bi bi-github justify-center"></i>
            </a>
          </div>
      </a>
      <div className="h2 justify-center">{props.title}</div>
      <div className="justify-center">{props.descrip}</div>

    </div>
    
  );
};


export default Project;