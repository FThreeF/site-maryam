import React from 'react';
import BlockExplanations from './blockExplanations/BlockExplanations';
import styleNames from './Explanations.module.css';
import icon1 from './explanationsIcon1.svg';
import icon2 from './explanationsIcon2.svg';
import icon3 from './explanationsIcon3.svg';

const Explanations = () => {
    let info = [
        {img: icon1, text: 'Помощь всем нуждающимся детям, независимо от их пола или состояния здоровья'},
        {img: icon2, text: 'Сотрудники и волонтеры фонда-ответственные люди с высокими этическими стандартами'},
        {img: icon3, text: 'Прозрачность важна, поэтому отчеты предоставляются всем донорам'},
    ]
    return (
        <div className={styleNames.block}>
            {info.map(el => 
                <BlockExplanations img={el.img} text={el.text}/>    
            )}
        </div>
    )
}

export default Explanations;