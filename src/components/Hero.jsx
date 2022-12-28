import './styles/Hero.scss'
import badge from '../assets/badge.svg'
import groupArtists from '../assets/group-avatars.png'
export function Hero(){
    return(
        <div className="containerHero">
            <div className="textArtists">
                <p>
                Mercado digital para colecionáveis em criptos e tokens não fungível (NFT). Compre, venda e descubra ativos digitais exclusivos para você
                </p>
                <div className="artists">
                    <img src={groupArtists} alt="" />
                    <p>
                        <a href="#">
                        <b>+10</b><br />
                        Artistas selecionados
                        </a>
                    </p>

                </div>
            </div>

            <div className="heroText">
                <p>
                Descubra a verdadeira arte digital e colecione diversas <span>NFTs</span>
                </p>
            </div>

            <div className="badge">
                <img src={badge} alt="" />
            </div>
        </div>
    )
}