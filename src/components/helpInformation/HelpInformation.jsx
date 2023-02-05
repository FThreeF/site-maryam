import React from 'react';
import BlockHelpInformation from './blockHelpInformation/BlockHelpInformation';
import styleNames from './HelpInformation.module.css';

const HelpInformation = () => {
    let info = [
        {title: 'Под опекой фонда', value: '1300+', name: 'человек'},
        {title: 'Благодаря вам собрано', value: '3 546 134', name: 'рублей'},
        {title: 'Уже трудятся', value: '56', name: 'волонтеров'},
    ]
    return (
        <div className={styleNames.block}>
            {info.map(el => 
                <BlockHelpInformation title={el.title} value={el.value} name={el.name}/>    
            )}
        </div>
    )
}

export default HelpInformation;