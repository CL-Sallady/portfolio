import '../Css/LandingPage.css';
import { Popover } from 'antd';

function ProjectItem({ theme, title, alt, path, description, link }) {
    const popoverContent = (
        <div>
          <p className='card-description'>{description}</p>
          {link ? <a href={link}>Link</a> : ''}
        </div>
      );
  return (
    <div className={theme}>
      <img className='card-img' src={path} alt={alt} />
      <Popover overlayStyle={{ width: "20vw" }}placement="top" content={popoverContent} trigger="click">
        <h4 className='card-title'>{title}</h4>
      </Popover>
    </div>
  );
}

export default ProjectItem;
