import React from 'react';
import styleNames from './AboutFund.module.css';
import image from './children.png';

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
                    <div className={styleNames.group}>
                        <div className={styleNames.title}>История логотипа:</div>
                        <div className={styleNames.text}>
                            Мы в полной мере осознаем важность оказания помощи нуждающимся. Смысл, который мы вкладывали, создавая наш логотип - мы отдаем Вам наши сердца и
                            понимаем, что Ваши сердца в наших руках.
                        </div>

                        <div className={styleNames.text}>
                            И самое главное это то, что в каждом человеке живет доброта, и он может подарить частичку другим, поэтому «Добро-ты!»
                        </div>


                    </div>

                    <div className={styleNames.group}>
                        <div className={styleNames.titleList}>Наши основные проекты:</div>
                        <ul className={styleNames.list}>
                            <li className={styleNames.item}>Иппотерапия;</li>
                            <li className={styleNames.item}>Проведение мастер-классов по прикладному искусству;</li>
                            <li className={styleNames.item}>Проведение мастер-классов по финансовой грамотности, укреплению патриотизма и роли семьи в обществе, выживанию и адаптации в городской среде, безопасности жизнедеятельности;</li>
                            <li className={styleNames.item}>Образовательно-развлекательные курсы «Занимательная физика, математика, химия и т.д.»;</li>
                        </ul>
                    </div>
                </div>

                <div className={styleNames.wrapper}>
                    <div className={styleNames.group}>
                        <div className={styleNames.titleList}>Фонд имеет широкий спектр услуг:</div>
                        <ul className={styleNames.list}>
                            <li className={styleNames.item}>Социальную поддержку и защиту людей с инвалидностью и членам их семей, пенсионерам, детям и подросткам из неимущих и малообеспеченных семей, детям, оставшимся без попечения родителей и иным социально уязвимым категориям граждан;</li>
                            <li className={styleNames.item}>Содействие в социализации, обучении, пред-профессиональной и профессиональной подготовке и переподготовке, трудоустройстве людей с инвалидностью и членов их семей, подростков, людей предпенсионного и пенсионного возраста, выпускников интернатов для детей, оставшихся без попечения родителей и иных социально уязвимых категорий граждан.</li>
                            <li className={styleNames.item}>Социальную реабилитацию детей и подросткам из неимущих и малообеспеченных семей, детям, оставшимся без попечения родителей и иным социально уязвимым категориям граждан;</li>
                            <li className={styleNames.item}>Содействие укреплению престижа и роли семьи в обществе;</li>
                            <li className={styleNames.item}>Содействие деятельности в сфере профилактики и охраны здоровья, а также пропаганды здорового образа жизни, улучшения морально- психологического состояния детей, подростков и пожилых людей;</li>
                            <li className={styleNames.item}>Содействие развитию научно-технического, художественного творчества:</li>
                            <li className={styleNames.item}>Содействие патриотическому и духовно-нравственному воспитанию:</li>
                            <li className={styleNames.item}>Содействие охране окружающей среды и защите животных:</li>
                            <li className={styleNames.item}>Содействие добровольческой деятельности. </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className={`${styleNames.container} container`}>
                <img className={`${styleNames.image} pc`} src={image} alt="" />
            </div>
        </div>
    )
}

export default AboutFund;