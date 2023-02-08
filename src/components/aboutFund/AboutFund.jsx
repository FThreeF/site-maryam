import React from 'react';
import styleNames from './AboutFund.module.css';

const AboutFund = () => {
    return (
        <div className={styleNames.block}>
            <div className={`${styleNames.container} container`}>
                <div className={styleNames.wrapper}>
                    <div className={styleNames.group}>
                        <div className={styleNames.title}>О фонде:</div>
                        <div className={styleNames.text}>
                            Благотворительный фонд «МарьяМ» был создан 23 июня 2021 года Президентом Фонда Ю.В. Капустиным вместе с единомышленниками.
                        </div>

                        <div className={styleNames.text}>
                            На сегодняшний день наш Фонд динамично развивается и непреклонно идет к поставленным целям.
                        </div>

                        <div className={styleNames.text}>
                            Мы активно сотрудничаем с другими Фондами, нашими партнерами и меценатами по новым и существующим направлениям, проектам в социальной сфере.
                        </div>

                        <div className={styleNames.text}>
                            Участвуем и усердно работаем над организацией и проведением партнерских и собственных мероприятий и акций в сфере благотворительности.
                        </div>
                        <div className={styleNames.text}>
                            Мы верим, вместе с Вами у нас все получится!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )  
}

export default AboutFund;