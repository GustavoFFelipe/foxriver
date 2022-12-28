import './styles/Gallery.scss';
import gallery1 from '../assets/galeria-1.png';
import gallery2 from '../assets/galeria-2.png';
import gallery3 from '../assets/galeria-3.png';
import gallery4 from '../assets/galeria-4.png';
import gallery5 from '../assets/galeria-5.png';
import gallery6 from '../assets/galeria-6.png';
import gallery7 from '../assets/galeria-7.png';
import gallery8 from '../assets/galeria-8.png';

export function Gallery(){
    return(
        <div className="containerGallery">
            <div className="rows rowTop">
                <img src={gallery1} alt="" />
                <img src={gallery2} alt="" />
                <img src={gallery3} alt="" />
                <img src={gallery4} alt="" />
            </div>
            <div className="rows rowDown">
            <img src={gallery5} alt="" />
            <img src={gallery6} alt="" />
            <img src={gallery7} alt="" />
            <img src={gallery8} alt="" />
            </div>
        </div>
    )
}