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



const ProgramSelection = ({info, big, titlePC, titleMobile, textPC, textMobile}) => {

    




    return (
        <div className={styleNames.block}>
            <div className={`${styleNames.container} container`}>
                
                <BeautifulTitle className='pc' big={big}>{titlePC}</BeautifulTitle>
                <BeautifulTitle className='mobile'>{titleMobile}</BeautifulTitle>
                <div className={`${styleNames.text} pc`}>{textPC}</div>
                <div className={`${styleNames.text} mobile`}>{textMobile}</div>
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