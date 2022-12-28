import './styles/BestArtists.scss';
import artist1 from '../assets/artista-1.png';
import artist2 from '../assets/artista-2.png';
import artist3 from '../assets/artista-3.png';
import artist4 from '../assets/artista-4.png';
import artist5 from '../assets/artista-5.png';
import artist6 from '../assets/artista-6.png';
import orangeArrow from '../assets/arrow-orange.svg';


export function BestArtists(){
    return(
        <div className="containerArtists">
            <h2>Melhores <span class='textOrange'>artistas</span></h2>
            <div className="artists">
                
                    <div className="card" >
                    <a className='links' src='#'>
                        <img src={artist1} alt="" />
                        <p>
                            Author <br />
                            80 Fotografias
                        </p>
                    </a>
                    </div>

                    <div className="card" >
                    <a className='links' src='#'>
                        <img src={artist2} alt="" />
                        <p>
                            Author <br />
                            80 Fotografias
                        </p>
                    </a>
                    </div>

                    <div className="card" >
                    <a className='links' src='#'>
                        <img src={artist3} alt="" />
                        <p>
                            Author <br />
                            80 Fotografias
                        </p>
                    </a>
                    </div>
                
            </div>

            <div className="artists">
            <div className="card" >
                    <a className='links' src='#'>
                        <img src={artist4} alt="" />
                        <p>
                            Author <br />
                            80 Fotografias
                        </p>
                    </a>
                    </div>

                    <div className="card" >
                    <a className='links' src='#'>
                        <img src={artist5} alt="" />
                        <p>
                            Author <br />
                            80 Fotografias
                        </p>
                    </a>
                    </div>

                    <div className="card" >
                    <a className='links' src='#'>
                        <img src={artist6} alt="" />
                        <p>
                            Author <br />
                            80 Fotografias
                        </p>
                    </a>
                    </div>
            </div>
            <a src='#'className='footerLink'>Veja todos os artistas <img src={orangeArrow} alt="" /></a>

            
        </div>
    )
}