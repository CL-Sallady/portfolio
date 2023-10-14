import '../Css/AboutPage.css';
import { Divider } from 'antd';
import { CheckSquareOutlined, LinkedinOutlined, GithubOutlined, InstagramOutlined, MailOutlined } from '@ant-design/icons';
import aboutHero from '../Media/about-hero.jpg';

function AboutPage({ theme }) {
  const skills = [
    'Javascript/ES6+', 'React.js', 'Node.js', 'PostgreSQL', 'SQL', 'Apollo', 'Graphql', 'Sequelize', 'Problem Solving', 'UX/UI Design', 'Adobe Creative Suite', 'MongoDB', 'OOP', 'Express.js', 'SAML/SSO Authentication', 'Figma', 'Python', 'Database Management', 'RESTful APIs', 'AWS Cloud'
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
  console.log(dividerStyle);

  return (
    <div className='AboutPage'>
        <h1 className='about-title'>About the Developer</h1>
        <div className='about-section'>
            <img src={aboutHero} alt='Girl with short brown hair sitting on bed of plants while coding' />
            <p className='about-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget lectus eget lorem rhoncus tempor. Mauris quis libero ornare magna dictum aliquam. Phasellus sit amet quam nec sem efficitur ultricies sed vitae odio. Phasellus non augue egestas, tristique elit vel, facilisis sapien. Fusce molestie sed nibh ac scelerisque. Nulla mollis suscipit purus. Quisque maximus nunc ut volutpat euismod. Morbi pellentesque justo ac tellus rutrum, nec dapibus lectus consequat. Proin tempor ipsum purus, at consectetur turpis porta sit amet. Nulla facilisis lacus eleifend turpis bibendum auctor. Pellentesque at eros et dui vulputate laoreet nec eu arcu. Donec luctus pretium erat quis pharetra. Phasellus sem nulla, ultricies vitae mattis quis, porttitor vel mi. Praesent dignissim varius porttitor. Integer ligula mauris, molestie a ligula sit amet, commodo cursus leo. Curabitur sodales ullamcorper arcu eu scelerisque.

            Quisque aliquam pretium lorem. Fusce rhoncus odio suscipit justo egestas, et bibendum orci ornare. Cras tempus a diam eu placerat. Nullam ligula eros, tincidunt id justo eget, volutpat vestibulum libero. Nam convallis ex et dolor consequat tempus. Nunc vehicula facilisis eros ac cursus. Vestibulum turpis nisi, posuere a diam congue, accumsan laoreet velit. Mauris tristique tristique ullamcorper.

            In hac habitasse platea dictumst. Maecenas finibus, diam dictum convallis mattis, mi nisl eleifend est, ac convallis erat orci et dui. Duis molestie mollis erat sit amet scelerisque. Donec tristique justo in velit placerat, elementum malesuada enim fringilla. Fusce porttitor iaculis hendrerit. Aenean id erat facilisis, vehicula ex in, vehicula quam. Donec tristique luctus nulla, mattis varius tortor finibus auctor.</p>
        </div>
        <Divider plain className={dividerStyle}>SKILLS</Divider>
        <div className='skills-container'>
            {renderSkills}
        </div>
        <Divider plain className={dividerStyle}>CONTACT ME</Divider>
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
