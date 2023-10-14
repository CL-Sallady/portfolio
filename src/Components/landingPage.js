
import '../Css/LandingPage.css';
import { projects } from '../Media';
import ProjectItem from './ProjectItem';
import { Divider } from 'antd';
import hero from '../Media/ui_network.png'

function LandingPage({ themeMod }) {
  const cardTheme = `card ${themeMod}-card`
  const renderProjectItems = projects?.map(project => {
    return <ProjectItem theme={cardTheme} title={ project?.title } alt={ project?.alt } path={ project?.path } />
  });

  const dividerStyle = `antd-divider ${themeMod}-divider`

  return (
    <div className="landingPage">
      <div></div> 
      <img className='land-hero' src={hero} alt='corporate illustration of a front end computer process' />
      <Divider plain className={dividerStyle}> WEB DEVELOPMENT</Divider>
      <div className='card-container'>
      {renderProjectItems}
      </div>
    </div>
  );
}

export default LandingPage;
