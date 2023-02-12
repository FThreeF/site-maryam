import React from 'react';
import BeautifulTitle from '../beautifulTitle/BeautifulTitle';
import styleNames from './Fund.module.css';
import Yuri from './Yuri.png';

const Fund = () => {
    return (
        <div className={`${styleNames.block} fund zoom`}>
            <div className={`${styleNames.container} container`}>
                <BeautifulTitle className={styleNames.title}>О Фонде</BeautifulTitle>
                <div className={styleNames.group}>
                    <div className={styleNames.textGroup}>
                        <div className={styleNames.text}>
                            Я, Юрий Викторович Капустин. Родился в г. Москва. В детстве испытывал желание заниматься волонтерской деятельностью и помогать людям. У меня многолетний опыт работы по продажам услуг СТО и спецтехники.
                        </div>


                        <div className={styleNames.text}>
                            На данный момент являюсь Президентом Благотворительного Фонда «МарьяМ»
                            Еще в детстве испытывал желание заниматься волонтерской деятельностью и помогать людям.
                            И в 2021 году это желание совместно с единомышленниками я смог осуществить
                        </div>
                    </div>

                    <div className={styleNames.group2}>
                        <img className={styleNames.image} src={Yuri} alt="" />
                        <div className={styleNames.name}>Ю.В. Капустин</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fund;