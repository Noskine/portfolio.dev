import { FaJsSquare, FaReact, FaGitAlt, FaCss3} from "react-icons/fa";
import { SiTailwindcss } from 'react-icons/si';
import './Work.css';
import Profile from "./Profile";

export default function Work(){
    return(
        <div className="work" id="works">
            <Profile />
            <section>
                <h2>My Tech Stack</h2>
                <p>Estas são tecnologias com as quais tenho trabalhado recentemente</p>
                <section className="tecnologias">
                    <FaCss3 size={50} />
                    <FaJsSquare size={50} />
                    <FaReact size={50} />
                    <FaGitAlt size={50} />
                    <SiTailwindcss size={50} />
                </section>
            </section>
        </div>
        
    );
}