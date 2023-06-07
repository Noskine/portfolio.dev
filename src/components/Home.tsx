import './Home.css';

import { FaAngleDown } from "react-icons/fa";


export default function Home(){ 
    const Logo = 'logo.png';

    return (
        <div className="home" id='home'>
            <header>
                <div className="logotypo">
                    <img src={Logo} alt=""  className='logo'/>
                    <div className="text">
                        <p>Noskine</p>
                        <p>Devs</p>  
                    </div>
                </div>
                 <nav>
                    <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#works">About</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Contato</a></li>
                    </ul>
                 </nav>
            </header>
            <main>
                <h1>I'm a <span>Frontend</span> specialized in building user experience</h1>
            </main>
            <span className='icon-seta'> <a href="#works"><FaAngleDown size={30} color={'fefefe'} /></a> </span>
        </div>
    )
}