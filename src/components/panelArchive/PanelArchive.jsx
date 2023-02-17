import React from 'react';
import styleNames from './PanelArchive.module.css';

const PanelArchive = () => {


    const offPanel = () => {

        document.getElementById('panelArchiveActive').id = 'panelArchiveDeactive';
        document.getElementById('wrapperArchiveActive').id = 'wrapperArchiveDeactive';
    }


    return (
        <div onClick={offPanel} id='panelArchiveDeactive' className={`${styleNames.block}`}>
            <div className={`${styleNames.container} container`}>
                <form action='' onClick={(event) => event.stopPropagation()} id='wrapperArchiveDeactive' className={styleNames.wrapper}>
                    <div className={styleNames.title}>Оставьте заявку</div>
                    <div className={styleNames.group}>
                        <input className={styleNames.input} type="text" placeholder='Введите Имя' />
                        <input className={styleNames.input} type="email" placeholder='E-mail' />
                        <select placeholder='Выбранный месяц' className={styleNames.select} name="" id="">
                            <option className={styleNames.option} value="Январь">Январь</option>
                            <option className={styleNames.option} value="Февраль">Февраль</option>
                            <option className={styleNames.option} value="Март">Март</option>
                            <option className={styleNames.option} value="Апрель">Апрель</option>
                            <option className={styleNames.option} value="Май">Май</option>
                            <option className={styleNames.option} value="Июнь">Июнь</option>
                            <option className={styleNames.option} value="Июль">Июль</option>
                            <option className={styleNames.option} value="Август">Август</option>
                            <option className={styleNames.option} value="Сентябрь">Сентябрь</option>
                            <option className={styleNames.option} value="Октябрь">Октябрь</option>
                            <option className={styleNames.option} value="Ноябрь">Ноябрь</option>
                            <option className={styleNames.option} value="Декабрь">Декабрь</option>
                        </select>
                        <input className={styleNames.button} type="submit" value='Пожертвовать' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PanelArchive;