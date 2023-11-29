import '../Css/AboutPage.css';
import { Divider } from 'antd';
import { CheckSquareOutlined, LinkedinOutlined, GithubOutlined, InstagramOutlined, MailOutlined, SnippetsOutlined } from '@ant-design/icons';
import aboutHero from '../Media/about-hero.jpg';
import lapTop from '../Media/coding.svg';
import resume from '../Media/CLSallady_Resume.pdf';

function AboutPage({ theme }) {
  const skills = [
    'Javascript/ES6+', 'React.js', 'Node.js', 'PostgreSQL', 'SQL', 'Apollo', 'Graphql', 'Sequelize', 'Problem Solving', 'UX/UI Design', 'Adobe Creative Suite', 'MongoDB', 'OOP', 'Express.js', 'SAML/SSO Authentication', 'Figma', 'Database Management', 'RESTful APIs', 'AWS Cloud'
  ]
  const renderSkills = skills?.map( s => {
    return ( 
        <div className='skill-object'>
            <CheckSquareOutlined />
            <p>{s}</p>
        </div>
    )
  })

  const dividerStyle = `antd-divider ${theme}-divider`
  const text = `Hello, I'm Chelby, a Full-Stack Software Engineer with an unconventional yet enriching journey. From my roots in education and design, I've cultivated a unique blend of communication, problem-solving, and creative thinking. As a lead graphic designer, I honed my skills in user-centric design, intertwining form with function to amplify brand narratives and resonate with audiences. Intrigued by the prospect of merging creativity with technology, I transitioned into software engineering, enrolling in a full-stack web development bootcamp to delve into the intricate world of coding. Today, I'm dedicated to crafting impactful and user-centric software solutions, driven by the belief that the fusion of design and technology can foster transformative experiences. My passion for pushing the boundaries of software engineering fuels my commitment to building innovative, results-driven solutions that drive business growth and enrich user experiences.`
  // const aboutMe =  text.split('\n').map(str => { return (<><p>{str}</p></>)});
  return (
    <div className='AboutPage'>
        <h1 className='about-title'>About the Developer</h1>
        <div className='about-section'>
            <img src={aboutHero} alt='Girl with short brown hair sitting on bed of plants while coding' />
            <p className='about-content'>{text}</p>
        </div>
        <div className={`${theme} view-resume`}>
        <p className={`${dividerStyle} about-divider`}>VIEW RESUME</p>
        <a className='social-icon resume' href={resume} target="_blank" rel="noreferrer"><SnippetsOutlined /></a>
        </div>
        <Divider plain className={`${dividerStyle} about-divider`}>SKILLS</Divider>
        <img className='coding-img' src={lapTop} alt={'Centered illustration of a computer with coding related imagery surrounding it.'} />
        <div className='skills-container'>
            {renderSkills}
        </div>
        <Divider plain className={`${dividerStyle} about-divider`}>CONTACT ME</Divider>
        <div className='contact-container'>
            <a className='social-icon' href='https://www.linkedin.com/in/chelby-sallady/' target="_blank" rel="noreferrer"><LinkedinOutlined /></a>
            <a className='social-icon' href='https://github.com/Sea-Chels' target="_blank" rel="noreferrer"><GithubOutlined /></a>
            <a className='social-icon' href='https://www.instagram.com/seachels_downunder' target="_blank" rel="noreferrer"><InstagramOutlined /></a>
            <a className='social-icon' href='mailto:csallady.work@gmail.com'><MailOutlined /></a>
        </div>
    </div>
  );
}

// ★ ☆ ✢ ✥ ✦ ✧ ❂ ❉ ✯

export default AboutPage;
