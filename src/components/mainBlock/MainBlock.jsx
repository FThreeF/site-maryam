import React from 'react';
import InteractiveButton from '../interactiveButton/InteractiveButton';
import styleNames from './MainBlock.module.css';
import background from './mainBlockBackground.png';

const MainBlock = () => {


    const setPanelWantHelp = () => {
        document.getElementById('panelWantHelpDeactive').id = 'panelWantHelpActive';
        document.getElementById('wrapperWantHelpDeactive').id = 'wrapperWantHelpActive';
    }

    const setPanelNeedHelp = () => {
        document.getElementById('panelNeedHelpDeactive').id = 'panelNeedHelpActive';
        document.getElementById('wrapperNeedHelpDeactive').id = 'wrapperNeedHelpActive';
    }



    return (
        <div className={`${styleNames.block} mainBlock`}>
            <div className={`${styleNames.container} container zoom`}>
                <div className={styleNames.group}>
                    <h1 className={styleNames.title}>
                        Благотворительный фонд <span className={`${styleNames.title} ${styleNames.span}`}>Марьям</span>
                    </h1>
                    <div className={styleNames.text}>
                        Оказываем социальную поддержку и благотворительную помощь по Москве и Московской области
                    </div>
                    <div className={styleNames.buttonBlock}>
                        <InteractiveButton onClick={() => setPanelWantHelp()} className={styleNames.button} >Хочу помочь</InteractiveButton>
                        <InteractiveButton onClick={() => setPanelNeedHelp()} className={styleNames.button} flip>Нужна помощь</InteractiveButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBlock;