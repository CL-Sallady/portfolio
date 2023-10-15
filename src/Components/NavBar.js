
import '../Css/App.css';
import { Switch } from 'antd'


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

    const switchColor= themeMod === 'dark' ? 'light' : 'dark'
  return (
    <div className="NavBar">
        <div className='home-identifier'>Chelby Sallady</div>
        <div className='nav-buttons'>
            <button className='nav' onClick={()=>onNavClick('dev')}>WEB PROJECTS</button>
            <button className='nav' onClick={()=>onNavClick('about')}>ABOUT ME</button>
            <button className='nav' onClick={()=>onNavClick('art')}>PERSONAL WORK</button>
        </div>
        <Switch size='small' className={` ${switchColor} theme`} defaultChecked onChange={()=>{
            if(themeMod === 'dark') setThemeMod('light');
            if(themeMod === 'light') setThemeMod('dark');
        }} />
    </div>
  );
}

export default NavBar;
