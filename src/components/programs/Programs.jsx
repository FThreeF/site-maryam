import React from 'react';
import BeautifulTitle from '../beautifulTitle/BeautifulTitle';
import styleNames from './Programs.module.css';
import image1 from './programsImage1.png';
import image2 from './programsImage2.png';

const Programs = () => {

    return (
        <div className={`${styleNames.block} programs zoom`}>
            <div className={`${styleNames.container} container`}>
                <div className={styleNames.wrapper}>
                    <BeautifulTitle className={styleNames.title}>Программы</BeautifulTitle>
                    <div className={`${styleNames.subtitle} ${styleNames.phoneHide}`}>Наша цель — помочь как можно большему количеству нуждающихся</div>
                    <div className={styleNames.group}>
                        <div className={styleNames.program}>
                            <img className={styleNames.image} src={image1} alt="Картинка" />

                            <h3 className={styleNames.programTitle}>«Здоровое будущее — особым детям!»</h3>
                            <div className={`${styleNames.text} ${styleNames.phoneHide}`}>
                                Cодействие в оплате курсов реабилитации и абилитации для подопечных детей
                            </div>
                            <div className={styleNames.text}>
                                Приобретение для детей-сирот, детей, оставшихся без попечения родителей, детей-инвалидов необходимых для их жизнедеятельности лекарственных препаратов и медицинского оборудования
                            </div>

                            <button className={styleNames.button}>Пожертвовать</button>
                        </div>

                        <div className={`${styleNames.line} ${styleNames.phoneView}`}></div>

                        <div className={styleNames.program}>
                            <img className={styleNames.image} src={image2} alt="Картинка" />

                            <h3 className={`${styleNames.programTitle} ${styleNames.phoneHide}`}>"Социальная адаптация детей сирот и детей, оставшихся без попечения родителей"</h3>
                            <h3 className={`${styleNames.programTitle} ${styleNames.phoneView}`}>"Социальная адаптация детей сирот"</h3>
                            <div className={styleNames.text}>
                                Реализация целей и задач данной программы заключается в вовлечении детей-сирот и детей, оставшихся без попечения родителей, в активную социальную жизнь и организации посещения детьми различных развивающих занятий
                            </div>

                            <button className={styleNames.button}>Пожертвовать</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs;