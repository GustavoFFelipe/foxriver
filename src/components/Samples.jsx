import './styles/Samples.scss';
import itemImg from '../assets/astronauta-1.png'
import itemImg2 from '../assets/astronauta-2.png'
import arrow from '../assets/arrow-orange.svg';

export function Samples(){
    return(
        <div className="containerSamples">
            <h2><span>Populares</span> da semana</h2>
            <div className="samplesContainerItems ">
                <div className="samplesItems">
                        <div className="samplesItem">
                            <div>
                                <span>Title</span>
                                <img src={arrow} alt="" />
                            </div>
                            <div>
                                <span>Author</span>
                                <span class='textOrange'>1.5ETH</span>
                            </div>
                            <img class='images' src={itemImg} alt="" />
                        </div>

                        <div className="samplesItem">
                            <div>
                                <span>Title</span>
                                <img src={arrow} alt="" />
                            </div>
                            <div>
                                <span>Author</span>
                                <span class='textOrange'>1.5ETH</span>
                            </div>
                            <img class='images' src={itemImg2} alt="" />
                        </div>
                </div>

                <div className="samplesItems">
                        <div className="samplesItem">
                            <div>
                                <span>Title</span>
                                <img src={arrow} alt="" />
                            </div>
                            <div>
                                <span>Author</span>
                                <span class='textOrange'>1.5ETH</span>
                            </div>
                            <img class='images' src={itemImg} alt="" />
                        </div>

                        <div className="samplesItem">
                            <div>
                                <span>Title</span>
                                <img src={arrow} alt="" />
                            </div>
                            <div>
                                <span>Author</span>
                                <span class='textOrange'>1.5ETH</span>
                            </div>
                            <img class='images' src={itemImg2} alt="" />
                        </div>
                </div>
            </div>

        </div>
    )
}