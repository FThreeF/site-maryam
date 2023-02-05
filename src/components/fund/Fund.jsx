import React from 'react';
import BeautifulTitle from '../UI/beautifulTitle/BeautifulTitle';
import styleNames from './Fund.module.css';
import YaroslavFokin from './YaroslavFokin.png';

const Fund = () => {
    return (
        <div className={`${styleNames.block} fund`}>
            <div className={`${styleNames.container} container`}>
                <BeautifulTitle className={styleNames.title}>О Фонде</BeautifulTitle>
                <div className={styleNames.group}>
                    <div className={styleNames.text}>
                        Я Юрий Викторович Капустин. Родился в г. Москва. В детстве испытывал желание заниматься волонтерской деятельностью и помогать людям. У меня многолетний опыт работы по продажам услуг СТО и спецтехники.
                        Прошел путь от менеджера до генерального директора.
                        На данный момент являюсь Президентом Благотворительного Фонда «МарьяМ»
                        Еще в детстве испытывал желание заниматься волонтерской деятельностью и помогать людям.
                        И в 2021 году это желание совместно с единомышленниками я смог осуществить
                    </div>
                    <div className={styleNames.group2}>
                        <img className={styleNames.image} src={YaroslavFokin} alt="" />
                        <div className={styleNames.name}>Ю.В. Капустин</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fund;