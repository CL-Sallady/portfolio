
import '../Css/App.css';
import { EditFilled } from '@ant-design/icons';


function NavBar({ setIsDevPage, setIsAboutPage, setIsArtPage, setThemeMod, themeMod }) {
    const onNavClick = (button) => {
        if(button === 'dev'){
            setIsDevPage(true);
            setIsAboutPage(false);
            setIsArtPage(false);
        } else if (button === 'about') {
            setIsDevPage(false);
            setIsAboutPage(true);
            setIsArtPage(false);    
        } else {
            setIsDevPage(false);
            setIsAboutPage(false);
            setIsArtPage(true);
        };
    };

  return (
    <div className="NavBar">
        <div className='home-identifier'>Chel Something</div>
        <div className='nav-buttons'>
            <button className='nav' onClick={()=>onNavClick('dev')}>WEB PROJECTS</button>
            <button className='nav' onClick={()=>onNavClick('about')}>ABOUT ME</button>
            <button className='nav' onClick={()=>onNavClick('art')}>PERSONAL WORK</button>
        </div>
        <button className='theme' onClick={()=>{
            if(themeMod === 'dark') setThemeMod('light');
            if(themeMod === 'light') setThemeMod('dark');
        }}><EditFilled /></button>
    </div>
  );
}

export default NavBar;
