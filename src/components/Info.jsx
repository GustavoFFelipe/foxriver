import './styles/Info.scss';
import bannerImg from '../assets/banner.png'


export function Info(){
    return(
        <div className="containerInfo">
            <sidebar className="info-sidebar">
                <div className="divisionText">
                    <h2>10K+</h2>
                    <span>Artes</span>
                </div>
                <div className="divisionText">
                <h2>200+</h2>
                    <span>Vendas</span>
                </div>
                <div className="divisionText">
                <h2>20+</h2>
                    <span>Artistas</span>
                </div>
            </sidebar>
            <div className="containerRows">
                <div className="containerText">
                <div className="textItem">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id potenti diam et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.
                    </p>
                        <a href="">Leia mais sobre</a>
                </div>
                <div className="textItem">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id potenti diam et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.
                    </p>
                        <a href="">Leia mais sobre.</a>
                </div>
                </div>
                <img src={bannerImg} alt="" />
            </div>
            
        </div>
    )
}