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
  const text = `Hello! I'm Chelby, a Full-Stack Software Engineer. My journey is one that might be a bit unconventional. Back in 2020, during and after earning my Bachelor of Fine Arts in Design, I found myself in a few educator roles, where I spent several years teaching students between the ages of 3 and 17. Through teaching, I learned many things such as communication, problem-solving, and changing how I looked at approaching challenges. However, I knew I needed to fufill my career goal of becoming a designer, so I transitioned into several internship designing roles, until I finally landed a lead graphic design position in Seattle.

  \nThroughout my time as a lead graphic designer I learned many programs and grew interested not only in how they worked, but also in problem-solving and troubleshooting them. Driven by a desire to merge my creativity with strategic problem-solving, I began looking into transitioning into technology. My role as a graphic designer allowed me to blend my artistic sensibilities with a results-driven approach, creating visually captivating solutions that resonated with audiences that amplified brand narratives, while also communicating necessary information for print materials. My time as a lead graphic designer provided me with invaluable insights into the importance of user-centric design and the seamless fusion of form and function.
  \nHowever, my insatiable curiosity and fascination with technology led me to embark on a new adventure—software engineering. Embracing this transition, I enrolled in a full-stack web development bootcamp, where I found myself captivated by the intricate world of coding, where every line represented an opportunity to build, innovate, and transform ideas into reality. This shift sparked my passion for a field where I could continuously learn and contribute to cutting-edge technological solutions. 
  \nFrom this bootcamp, I was able to start my journey as a software engineer, after being hired as a full-stack software engineer with Elevance Health. Today, my diverse journey fuels my commitment to creating impactful and user-centric software solutions. I am driven by the belief that the union of design and technology can create transformative experiences. I am dedicated to pushing the boundaries of what's possible in the world of software engineering.`
  const aboutMe =  text.split('\n').map(str => { return (<><p>{str}</p></>)});
  return (
    <div className='AboutPage'>
        <h1 className='about-title'>About the Developer</h1>
        <div className='about-section'>
            <img src={aboutHero} alt='Girl with short brown hair sitting on bed of plants while coding' />
            <a className='social-icon resume' href={resume} target="_blank" rel="noreferrer"><SnippetsOutlined /> <p>View Resumé</p></a>
            <p className='about-content'>{aboutMe}</p>
        </div>
        <Divider plain className={`${dividerStyle} about-divider`}>SKILLS</Divider>
        <img className='coding-img' src={lapTop} alt={'Centered illustration of a computer with coding related imagery surrounding it.'} />
        <div className='skills-container'>
            {renderSkills}
        </div>
        <Divider plain className={`${dividerStyle} about-divider`}>CONTACT ME</Divider>
        <div className='contact-container'>
            <a className='social-icon' href='https://www.linkedin.com/in/chelby-sallady-9b5bbb148/' target="_blank" rel="noreferrer"><LinkedinOutlined /></a>
            <a className='social-icon' href='https://github.com/CL-Sallady' target="_blank" rel="noreferrer"><GithubOutlined /></a>
            <a className='social-icon' href='https://www.instagram.com/seachels_downunder' target="_blank" rel="noreferrer"><InstagramOutlined /></a>
            <a className='social-icon' href='mailto:clsallady@gmail.com'><MailOutlined /></a>
        </div>
    </div>
  );
}

// ★ ☆ ✢ ✥ ✦ ✧ ❂ ❉ ✯

export default AboutPage;
