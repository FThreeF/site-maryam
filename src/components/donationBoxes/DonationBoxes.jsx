import React from 'react';
import styleNames from './DonationBoxes.module.css';
import BeautifulTitle from '../beautifulTitle/BeautifulTitle';
import Arrow from './Arrow.svg';
import Image from './Image.png';

const DonationBoxec = () => {
    return (
        <div className={styleNames.block}>
            <div className={`${styleNames.container} container`}>
                <BeautifulTitle className='pc' big>Боксы для пожертвования</BeautifulTitle>
                <div  className={`${styleNames.titleM} mobile`}>Боксы пожертвований</div>
                <div className={styleNames.wrapper}>
                    <div className={styleNames.canvas}>
                        <div className={styleNames.group}>
                            <img className={`${styleNames.arrow} pc`} src={Arrow} alt="" />
                            <div className={`${styleNames.number} ${styleNames.numberM}`}>1</div>
                            <div className={styleNames.title}>
                                Найдите наши боксы для пожертвований
                            </div>
                            <div className={styleNames.text}>
                                Во многих торговых точках Москвы стоят боксы для сбора пожертвований (так называемые ящики-накопители для сбора наличных денег) в пользу фонда «Марьям».
                            </div>
                        </div>
                        <div className={styleNames.group}>
                            <img className={`${styleNames.arrow} pc`} src={Arrow} alt="" />
                            <div className={styleNames.number}>2</div>
                            <div className={styleNames.title}>Опустите деньги</div>
                            <div className={styleNames.text}>
                                Даже самые небольшие пожертвования приносят огромную пользу детям.
                            </div>
                        </div>
                        <div className={styleNames.group}>
                            <div className={styleNames.number}>3</div>
                            <div className={styleNames.title}>Получите отчет</div>
                            <div className={styleNames.text}>
                                В специальном отсеке бокса мы ежеквартально размещаем отчеты о сборах в данном конкретном боксе и использовании средств с общей суммы сборов.
                            </div>
                        </div>
                    </div>
                    <img className={styleNames.image} src={Image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default DonationBoxec;