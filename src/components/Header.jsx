
import buttonFox from '../assets/fox.svg'
import './styles/Header.scss';

export function Header(){
    return (
        <div className="headerContainer">
            <div className="logoContainer">
            <span className="white">FoxRiver</span><span className="red">NFTs</span>
            </div>
            <nav>
                <a href="">Comprar</a>
                <a href="">Sobre nós</a>
                <a href="">FAQ</a>
            </nav>

            <button>
                <img src={buttonFox} alt="" />
                Conectar carteira
            </button>
        </div>
    )
}