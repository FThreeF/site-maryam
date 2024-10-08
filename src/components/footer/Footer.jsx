import React from 'react';
import styleNames from './styleNames.module.css';

import { YMaps, Map, Placemark, FullscreenControl } from 'react-yandex-maps';

const Footer = () => {
    return (
        <footer className={`${styleNames.block} zoom`}>
            <div className={`${styleNames.container} container`}>
                <div className={styleNames.contacts}>
                    <h3 className={styleNames.title}>Контакты</h3>
                    <div className={styleNames.group}>
                        <div className={styleNames.text}>+7 (495)796-85-45</div>
                        <div className={styleNames.text}>Москва, ул. Гиляровского, дом 51</div>
                        <div className={styleNames.text}>@kykaruka</div>
                        <div className={styleNames.text}>infocfm@ya.ru</div>
                    </div>
                </div>
                <form className={styleNames.message} action="">
                    <h3 className={styleNames.title}>Оставьте сообщение</h3>
                    <div className={styleNames.group}>
                        <input className={styleNames.input} type="email" placeholder='Email' />
                        <textarea className={styleNames.textarea} placeholder='Сообщение' name="" id="" cols="30" rows="10"></textarea>
                        <input className={styleNames.button} type="submit" value="Отправить"></input>
                    </div>
                </form>

                <div className={styleNames.mapBlock}>
                    <YMaps className={styleNames.YMaps}>
                        <Map
                            className={styleNames.map}
                            defaultState={{
                                center: [55.785923, 37.632655],
                                zoom: 16,
                                controls: []
                            }}
                            width="100%" height="100%">
                            <Placemark geometry={[55.785923, 37.632655]} />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </footer>
    )
}

export default Footer;