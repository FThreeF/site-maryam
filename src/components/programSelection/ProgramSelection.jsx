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

import ImageOne from './ImageOne.png';
import ImageTwo from './ImageTwo.png';
import ImageThree from './ImageThree.png';
import ImageFour from './ImageFour.png';
import ImageFive from './ImageFive.png';

const ProgramSelection = () => {

    let info = [
        {
            img: ImageOne,
            title: '«Здоровое будущее — особым детям!»',
            text: 'Приобретение для детей-сирот, детей, оставшихся без попечения родителей, детей-инвалидов необходимых для их жизнедеятельности лекарственных препаратов и медицинского оборудования',
        },
        {
            img: ImageTwo,
            title: '«Здоровое будущее — особым детям!»',
            text: 'Приобретение для детей-сирот, детей, оставшихся без попечения родителей, детей-инвалидов необходимых для их жизнедеятельности лекарственных препаратов и медицинского оборудования',
        },
        {
            img: ImageThree,
            title: '«Здоровое будущее — особым детям!»',
            text: 'Приобретение для детей-сирот, детей, оставшихся без попечения родителей, детей-инвалидов необходимых для их жизнедеятельности лекарственных препаратов и медицинского оборудования',
        },
        {
            img: ImageFour,
            title: '«Здоровое будущее — особым детям!»',
            text: 'Приобретение для детей-сирот, детей, оставшихся без попечения родителей, детей-инвалидов необходимых для их жизнедеятельности лекарственных препаратов и медицинского оборудования',
        },
        {
            img: ImageFive,
            title: '«Здоровое будущее — особым детям!»',
            text: 'Приобретение для детей-сирот, детей, оставшихся без попечения родителей, детей-инвалидов необходимых для их жизнедеятельности лекарственных препаратов и медицинского оборудования',
        },



    ]




    return (
        <div className={styleNames.block}>
            <div className={`${styleNames.container} container`}>

                <BeautifulTitle className='pc' big>Выберите программу</BeautifulTitle>
                <BeautifulTitle className='mobile'>Программы</BeautifulTitle>
                <div className={`${styleNames.text} pc`}>Наша цель — помочь как можно большему количеству нуждающихся</div>
                <div className={`${styleNames.text} mobile`}>Выберите программу, которой хотите помочь</div>
                <Swiper
                    cssMode={true}
                    id='SliderHowToHelp'
                    className={`${styleNames.swiper} pc`}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
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

                <Swiper
                    cssMode={true}
                    id='SliderHowToHelp'
                    className={`${styleNames.swiper} mobile`}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}





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