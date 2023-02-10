import React from 'react';
import styleNames from './Volunteers.module.css';

import Ivan from './ivan.png';
import Peter from './peter.png';
import Stephanie from './stephanie.png'
import Juliana from './juliana.png';
import BeautifulTitle from '../beautifulTitle/BeautifulTitle';



const Block = ({image, name, text}) => {
    return (
        <div className={styleNames.wrapper}>
            <img className={styleNames.image} src={image} alt="" />
            <div className={styleNames.name}>{name}</div>
            <div className={styleNames.text}>{text}</div>
        </div>
    )
}

const Volunteers = () => {
    return (
        <div className={styleNames.block}>
            <div className={`${styleNames.container} container`}>
                <BeautifulTitle>Волонтеры</BeautifulTitle>
                <div className={styleNames.group}>
                    <Block image={Juliana} name='Ульяна, 24 года' text='Студентка'/>
                    <Block image={Peter} name='Петр, 43 года' text='Юрист'/>
                    <Block image={Ivan} name='Иван, 35 лет' text='Программист'/>
                    <Block image={Stephanie} name='Стефания, 18 лет' text='Фотограф'/>
                </div>
            </div>
        </div>
    )
}

export default Volunteers;