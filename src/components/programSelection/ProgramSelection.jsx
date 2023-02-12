import React from 'react';
import styleNames from './ProgramSelection.module.css';

import BeautifulTitle from '../beautifulTitle/BeautifulTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BlockProgramSelection from './blockProgramSelection/BlockProgramSelection';
import programImage from "./programImage.png"


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';

const ProgramSelection = () => {

    let info = [
        {
            img: programImage,
            title: 'Социальная адаптация детей сирот и детей, оставшихся без попечения родителей',
            text: 'Реализация целей и задач данной программы заключается в вовлечении детей-сирот и детей, оставшихся без попечения родителей, в активную социальную жизнь и организации посещения детьми различных развивающих занятий',
        },

        {
            img: programImage,
            title: 'Социальная адаптация детей сирот и детей, оставшихся без попечения родителей',
            text: 'Реализация целей и задач данной программы заключается в вовлечении детей-сирот и детей, оставшихся без попечения родителей, в активную социальную жизнь и организации посещения детьми различных развивающих занятий',
        },

        {
            img: programImage,
            title: 'Социальная адаптация детей сирот и детей, оставшихся без попечения родителей',
            text: 'Реализация целей и задач данной программы заключается в вовлечении детей-сирот и детей, оставшихся без попечения родителей, в активную социальную жизнь и организации посещения детьми различных развивающих занятий',
        },

        {
            img: programImage,
            title: 'Социальная адаптация детей сирот и детей, оставшихся без попечения родителей',
            text: 'Реализация целей и задач данной программы заключается в вовлечении детей-сирот и детей, оставшихся без попечения родителей, в активную социальную жизнь и организации посещения детьми различных развивающих занятий',
        },

        {
            img: programImage,
            title: 'Социальная адаптация детей сирот и детей, оставшихся без попечения родителей',
            text: 'Реализация целей и задач данной программы заключается в вовлечении детей-сирот и детей, оставшихся без попечения родителей, в активную социальную жизнь и организации посещения детьми различных развивающих занятий',
        },

        {
            img: programImage,
            title: 'Социальная адаптация детей сирот и детей, оставшихся без попечения родителей',
            text: 'Реализация целей и задач данной программы заключается в вовлечении детей-сирот и детей, оставшихся без попечения родителей, в активную социальную жизнь и организации посещения детьми различных развивающих занятий',
        },

    ]


    return (
        <div className={styleNames.block}>
            <div className={`${styleNames.container} container`}>
                <BeautifulTitle>Выберите программу</BeautifulTitle>
                <div className={styleNames.text}>Наша цель — помочь как можно большему количеству нуждающихся</div>
                <Swiper
                    cssMode={true}
                    id='SliderHowToHelp'
                    className={styleNames.swiper}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={180}
                    slidesPerView={2}
                    loop={true}
                    navigation




                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {info.map(el =>
                        <SwiperSlide className={styleNames.swiperSlider}>
                            <BlockProgramSelection img={el.img} title={el.title} text={el.text} />
                        </SwiperSlide>
                    )}

                </Swiper>
            </div>

        </div>
    )
}

export default ProgramSelection;