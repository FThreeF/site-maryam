import React from 'react';
import BeautifulTitle from '../beautifulTitle/BeautifulTitle';
import BlockDocuments from './blockDocuments/BlockDocuments';
import styleNames from './Documents.module.css';
import documentIcon from './documentIcon.svg';
import InteractiveButton from '../interactiveButton/InteractiveButton';

const Documents = () => {
    let info = [
        { id: 0, image: documentIcon, title: 'Финансовый отчет осень', text: 'Размер файла 2.44 mb' },
        { id: 1, image: documentIcon, title: 'Финансовый отчет зима', text: 'Размер файла 2.44 mb' },
        { id: 2, image: documentIcon, title: 'Финансовый отчет весна', text: 'Размер файла 2.44 mb' },
    ]


    const setPanelArchive = () => {
        document.getElementById('panelArchiveDeactive').id = 'panelArchiveActive';
        document.getElementById('wrapperArchiveDeactive').id = 'wrapperArchiveActive';
    }


    return (
        <div className={`${styleNames.block} documents zoom`}>
            <div className={`${styleNames.container} container`}>
                <BeautifulTitle>Документы</BeautifulTitle>
                <div className={styleNames.subtitle}>Мы ответственно подходим к документированию и предоставляем всю отчетность фонда</div>
                <div className={styleNames.group}>
                    {info.map(el =>
                        <BlockDocuments key={el.id} image={el.image} title={el.title} text={el.text} />
                    )}
                </div>
                <InteractiveButton onClick={() => setPanelArchive()} flip>Запросить архив</InteractiveButton>
            </div>
        </div>
    )
}

export default Documents;