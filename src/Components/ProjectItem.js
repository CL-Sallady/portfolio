import '../Css/LandingPage.css';

function ProjectItem({ theme, title, alt, path }) {

  return (
    <div className={theme}>
      <img className='card-img' src={path} alt={alt} />
      <h4 className='card-title'>{title}</h4>
    </div>
  );
}

export default ProjectItem;
