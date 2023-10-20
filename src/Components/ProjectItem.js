import '../Css/LandingPage.css';
import { Popover } from 'antd';

function ProjectItem({ theme, title, alt, path, description, link, website }) {
    const popoverContent = (
        <div>
          <p className='card-description'>{description}</p>
          {link && !website ? <a className='card-link' href={link} target='_blank' rel="noreferrer">Link to Repository</a> : <a className='card-link' href={website} target='_blank' rel="noreferrer">Link to Website</a> }
        </div>
      );
  return (
    <div className={theme}>
      <img className='card-img' src={path} alt={alt} />
      <Popover title={title} overlayStyle={{ width: "30vw" }}placement="top" content={popoverContent}>
        <h4 className={`card-title`}>{title}</h4>
      </Popover>
    </div>
  );
}

export default ProjectItem;
