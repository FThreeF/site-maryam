import React from 'react';
import styleNames from './PanelWantHelp.module.css';

const PanelWantHelp = () => {


    const offPanel = () => {
        document.querySelector('.panelWantHelp').className = `${styleNames.block} ${styleNames.deactive}`;
    }


    return (
        <div onClick={offPanel} className={`${styleNames.block} ${styleNames.active} panelWantHelp`}>
            <div className={`${styleNames.container} container`}>
                <div className={styleNames.wrapper}>
                    <div className={styleNames.title}>Внести свой вклад</div>
                    <div className={styleNames.group}>
                        <input className={styleNames.input} type="text" placeholder='Введите Имя (необязательно)' />
                        <input className={styleNames.input} type="phone" placeholder='Телефон (необязательно)' />
                        <input className={styleNames.input} type="email" placeholder='E-mail (необязательно)' />
                        <textarea className={styleNames.textarea} placeholder='Cообщение'></textarea>
                        <div className={styleNames.group2}>
                            <input className={styleNames.inputMoney} type="text" placeholder='100' />
                            <input className={styleNames.button} type="submit" value='Пожертвовать' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelWantHelp;