import '../Css/LandingPage.css';
import { GithubOutlined, ArrowRightOutlined } from '@ant-design/icons';

function ProjectItem({ theme, title, alt, path, description, link, website }) {
  return (
    <div className={theme}>
      <img className='card-img' src={path} alt={alt} />
      <div>
        <h4 className={`card-title`}>{title}</h4>
        <br></br>
        <p className='card-left'>{description}</p>
        <br></br>
        {link && !website ? <a href={link} className='card-left card-link' target="_blank" rel="noreferrer"><GithubOutlined /> View Code </a> : <a className='card-left card-link' href={website}target="_blank" rel="noreferrer" ><ArrowRightOutlined /> Visit Website</a>}
      </div>
    </div>
  );
}

export default ProjectItem;
