import React from 'react';
import BlockHelpInformation from './blockHelpInformation/BlockHelpInformation';
import styleNames from './HelpInformation.module.css';

const HelpInformation = () => {
    let info = [
        {id: 0, title: 'Под опекой фонда', value: '1300+', name: 'человек'},
        {id: 1, title: 'Благодаря вам собрано', value: '3 546 134', name: 'рублей'},
        {id: 2, title: 'Уже трудятся', value: '56', name: 'волонтеров'},
    ]
    return (
        <div className={`${styleNames.block} zoom`}>
            {info.map(el => 
                <BlockHelpInformation key={el.id} title={el.title} value={el.value} name={el.name}/>    
            )}
        </div>
    )
}

export default HelpInformation;