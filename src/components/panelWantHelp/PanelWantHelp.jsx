import React from 'react';
import styleNames from './PanelWantHelp.module.css';

const PanelWantHelp = () => {


    const offPanel = () => {

        document.getElementById('panelWantHelpActive').id = 'panelWantHelpDeactive';
        document.getElementById('wrapperWantHelpActive').id = 'wrapperWantHelpDeactive';
    }


    return (
        <div onClick={offPanel} id='panelWantHelpDeactive' className={`${styleNames.block}`}>
            <div className={`${styleNames.container} container`}>
                <form action="" onClick={(event) => event.stopPropagation()} id='wrapperWantHelpDeactive' className={styleNames.wrapper}>
                    <div className={styleNames.title}>Внести свой вклад</div>
                    <div className={styleNames.group}>
                        <input className={styleNames.input} type="text" placeholder='Введите Имя (необязательно)' />
                        <input className={styleNames.input} type="phone" placeholder='Телефон (необязательно)' />
                        <input className={styleNames.input} type="email" placeholder='E-mail (необязательно)' />
                        <textarea className={styleNames.textarea} placeholder='Cообщение'></textarea>
                        <div className={styleNames.group2}>
                            <div className={styleNames.symbool}>Р</div>
                            <input className={styleNames.inputMoney} type="number" placeholder='100' />
                            <input className={styleNames.button} type="submit" value='Пожертвовать' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PanelWantHelp;