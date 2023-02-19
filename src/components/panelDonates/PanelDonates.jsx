import React from 'react';
import styleNames from './PanelDonates.module.css';

const PanelDonates = ({image, title, text}) => {


    const offPanel = () => {

        document.getElementById('panelDonatesActive').id = 'panelDonatesDeactive';
        document.getElementById('wrapperDonatesActive').id = 'wrapperDonatesDeactive';
    }


    return (
        <div onClick={offPanel} id='panelDonatesActive' className={`${styleNames.block}`}>
            <div className={`${styleNames.container} container`}>
                <form action="" onClick={(event) => event.stopPropagation()} id='wrapperDonatesActive' className={styleNames.wrapper}>
                    <div className={styleNames.title}>Сделать пожертвование</div>
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

export default PanelDonates;