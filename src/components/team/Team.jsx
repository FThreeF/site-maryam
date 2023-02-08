import React from 'react';
import BeautifulTitle from '../UI/beautifulTitle/BeautifulTitle';
import BlockTeam from './blockTeam/BlockTeam';
import styleNames from './Team.module.css';
import LeonudTitov from './LeonidTitov.png';
import AliceTikhomirova from './AliceTikhomirova.png';
import YaroslavFokin from './YaroslavFokin.png';
import ElenaSimonova from './ElenaSimonova.png';

const Team = () => {
    let info = [
        {id: 0, image: LeonudTitov, name: 'Леонид Титов', text: 'Основатель фонда' },
        {id: 1, image: AliceTikhomirova, name: 'Алиса Тихомирова', text: 'ОСпециалист по связям с общественностью' },
        {id: 2, image: YaroslavFokin, name: 'Ярослав Фокин', text: 'Главный руководитель' },
        {id: 3, image: ElenaSimonova, name: 'Елена Симонова', text: 'Бухгалтер' },
    ]
    return (
        <div className={`${styleNames.block} team zoom nonePhone`}>
            <div className={`${styleNames.container} container`}>
                <BeautifulTitle>Команда</BeautifulTitle>
                <div className={styleNames.subtitle}>Захотели присоединиться к команде? Напишете нам, будем рады вам</div>
                <div className={styleNames.group}>
                    {info.map(el =>
                        <BlockTeam key={el.id} image={el.image} name={el.name} text={el.text} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Team;