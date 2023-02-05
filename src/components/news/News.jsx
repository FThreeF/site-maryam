import React from 'react';
import BeautifulTitle from '../UI/beautifulTitle/BeautifulTitle';
import BlockNews from './blockNews/BlockNews';
import styleNames from './News.module.css';

const News = () => {
    let info = [
        {
            title: 'Документальный проект "Другие люди?": онлайн-летопись добрых дел',
            date: '25.05.2020',
            text: '18 мая вышел новый фильм “Старость в радость” рассказывающий об одноименном благотворительном фонде и ее основателе – Лизе Олескиной. Она прошла путь от обычного волонтера до человека, собравшего вокруг себя тысячи таких же неравнодушных',
        },
        {
            title: 'Эксперты: налоговые послабления для НКО – своевременный шаг',
            date: '25.05.2020',
            text: 'Законопроект, поддерживающий некоммерческие организации, был принят Госдумой в третьем чтении. Согласно документу, до 1% от выручки на благотворительность не будет облагаться налогом. И такой шаг был крайне необходим в сегодняшних реалиях, считают представители НКО',
        },
    ]
    return (
        <div className={styleNames.block}>
            <div className={`${styleNames.container} container`}>
                <BeautifulTitle>Новости</BeautifulTitle>
                <div className={styleNames.group}>
                    {info.map(el =>
                        <BlockNews title={el.title} date={el.date} text={el.text} />
                    )}
                </div>
                <button className={styleNames.button}>
                    <div className={styleNames.buttonText}>
                        Читать все новости
                    </div>
                </button>
            </div>
        </div>
    )
}

export default News;