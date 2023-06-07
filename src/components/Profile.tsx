import './Profile.css';

export default function Profile(){
    const ImagemGitHub = 'https://avatars.githubusercontent.com/u/112139254?s=400&u=27b77f39a4b89a643b126ad13f3f8f452d5fb65b&v=4';

    return(
        <div className="profile-github">
            <div className='discprition'>
                <h2 className="nome">Enikson Sonay</h2>
                <p>Desde cedo, sempre tive uma curiosidade insaciável sobre o funcionamento do mundo ao meu redor. Como uma criança, eu desmontava brinquedos com o objetivo de entender como eles eram construídos e até mesmo tentar criar meus próprios brinquedos. Como tantas outras crianças curiosas, comecei a pesquisar sobre motores e a criação de jogos, o que acabou me apaixonando pelo vasto universo da tecnologia. Atualmente, sou um entusiasta e estudante das tecnologias que permeiam a programação web, buscando constantemente expandir meus conhecimentos nesse campo.</p>
            </div>
            <div>
                <img src={ImagemGitHub} alt="Perfil GitHUb" className='imagem-de-perfil' />
            </div>
        </div>
    );
}