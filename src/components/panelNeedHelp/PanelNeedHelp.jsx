import React from 'react';
import styleNames from './PanelNeedHelp.module.css';

const PanelNeedHelp = () => {


    const offPanel = () => {

        document.getElementById('panelNeedHelpActive').id = 'panelNeedHelpDeactive';
        document.getElementById('wrapperNeedHelpActive').id = 'wrapperNeedHelpDeactive';
    }


    return (
        <div onClick={offPanel} id='panelNeedHelpDeactive' className={`${styleNames.block}`}>
            <div className={`${styleNames.container} container`}>
                <form action='' onClick={(event) => event.stopPropagation()} id='wrapperNeedHelpDeactive' className={styleNames.wrapper}>
                    <div className={styleNames.title}>Оставьте заявку</div>
                    <div className={styleNames.group}>
                        <input className={styleNames.input} type="text" placeholder='Введите Имя' />
                        <input className={styleNames.input} type="phone" placeholder='Телефон' />
                        <input className={styleNames.input} type="email" placeholder='E-mail' />
                        <textarea className={styleNames.textarea} placeholder='Опишите вашу проблему'></textarea>
                        <input className={styleNames.button} type="submit" value='Отправить' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PanelNeedHelp;