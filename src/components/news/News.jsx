import React from 'react';
import BeautifulTitle from '../beautifulTitle/BeautifulTitle';
import BlockNews from './blockNews/BlockNews';
import styleNames from './News.module.css';

const News = () => {





    let info = [
        {
            id: 0,
            title: 'Документальный проект "Другие люди?": онлайн-летопись добрых дел',
            date: '25.05.2020',
            text: '18 мая вышел новый фильм “Старость в радость” рассказывающий об одноименном благотворительном фонде и ее основателе – Лизе Олескиной. Она прошла путь от обычного волонтера до человека, собравшего вокруг себя тысячи таких же неравнодушных',
        },
        {
            id: 1,
            title: 'Эксперты: налоговые послабления для НКО – своевременный шаг',
            date: '25.05.2020',
            text: 'Законопроект, поддерживающий некоммерческие организации, был принят Госдумой в третьем чтении. Согласно документу, до 1% от выручки на благотворительность не будет облагаться налогом. И такой шаг был крайне необходим в сегодняшних реалиях, считают представители НКО',
        },
    ]

    const setValue = () => {
        const buttonText = document.querySelector(`.${styleNames.buttonText}`);
        const groupNews = document.querySelector(`.${styleNames.groupNews}`);

        if (buttonText.textContent == 'Читать все новости') {
            buttonText.textContent = 'Закрыть';
            groupNews.style.display = 'flex';


        }

        else if (buttonText.textContent == 'Закрыть') {
            buttonText.textContent = 'Читать все новости';
            groupNews.style.display = 'none';

        }

    }

    return (
        <div className={`${styleNames.block} news zoom`}>
            <div className={`${styleNames.container} container`}>
                <BeautifulTitle>Новости</BeautifulTitle>
                <div className={`${styleNames.group} ${styleNames.phoneHide}`}>
                    {info.map(el =>
                        <BlockNews key={el.id} title={el.title} date={el.date} text={el.text} />
                    )}
                </div>
                <div className={`${styleNames.group} ${styleNames.phoneView}`}>
                    <BlockNews title={info[0].title} date={info[0].date} text={info[0].text} />
                </div>

                <button className={styleNames.button}>
                    <div onClick={() => setValue()} className={styleNames.buttonText}>
                        Читать все новости
                    </div>
                </button>
                

                <div className={styleNames.groupNews}>
                    <iframe className={styleNames.news} src="https://www.miloserdie.ru/news/"></iframe>
                    <iframe className={styleNames.news} src="https://www.asi.org.ru/newswire/"></iframe>

                    <iframe className={styleNames.news} src="https://philanthropy.ru/category/news/"></iframe>
                    <iframe className={styleNames.news} src="https://dobro.live/publikacii/sobytiya"></iframe>
                </div>

                

                {/* 
                <iframe className={styleNames.news} src="//rss.bloople.net/?url=https%3A%2F%2Ffeeds.feedburner.com%2Fphilanthropy%2Fq3xa7tlzu85&showtitle=false&showempty=true&type=html"></iframe> */}
            </div>
        </div>
    )
}

export default News;