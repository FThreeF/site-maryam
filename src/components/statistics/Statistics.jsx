import React from 'react';
import BlockStatistics from './blockStatistics/BlockStatistics';
import styleNames from './Statistics.module.css';
import image from './statisticsImage.png';

const Statistics = () => {
    let info = [
        {value: '452', text: 'ребенка получили помощь'},
        {value: '120', text: 'детей обрели семью'},
        {value: '13', text: 'наставников следят за “особыми” людьми '},
    ]
    return (
        <div className={styleNames.block}>
            <div className={styleNames.group}>
                {info.map(el => 
                    <BlockStatistics value={el.value} text={el.text}/>
                )}
            </div>
            <img className={styleNames.image} src={image} alt="Чел в каляске" />
        </div>
    )
}

export default Statistics;