import React from 'react';
import styleNames from './YourHelp.module.css';

const YourHelp = () => {
    return (
        <div className={styleNames.block}>
            <h3 className={styleNames.title}>Хотите нам помочь сделать жизнь нуждающихся  счастливее?</h3>
            <div className={styleNames.text}>Вы можете внести свой вклад, сделав пожертвование или став волонтером</div>
            <button className={styleNames.button}>
                <div className={styleNames.buttonValue}>Хочу помочь</div>
                <div className={styleNames.border}></div>
            </button>
        </div>
    )
}

export default YourHelp;