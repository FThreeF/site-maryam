import React from 'react';
import styleNames from './Footer.module.css';
import { YMaps, Map, Placemark, FullscreenControl } from 'react-yandex-maps';

const Footer = () => {
    return (
        <footer className={styleNames.block}>
            <div className={`${styleNames.container} container`}>
                <div className={styleNames.contacts}>
                    <h3 className={styleNames.title}>Контакты</h3>
                    <div className={styleNames.group}>
                        <div className={styleNames.text}>+7(999) 999 99-99</div>
                        <div className={styleNames.text}>г. Москва, Хлебозаводский пр-д, 7, стр. 10</div>
                        <div className={styleNames.text}>@tghuman13</div>
                        <div className={styleNames.text}>mail@rambler.ru</div>
                    </div>
                </div>
                <div className={styleNames.message}>
                    <h3 className={styleNames.title}>Оставьте сообщение</h3>
                    <div className={styleNames.group}>
                        <input className={styleNames.input} type="email" placeholder='Email' />
                        <textarea className={styleNames.textarea} placeholder='Сообщение' name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>


                <div className={styleNames.mapBlock}>
                    <YMaps>
                        <Map
                            className={styleNames.map}
                            defaultState={{
                                center: [55.670524, 37.633814],
                                zoom: 16,
                                controls: []
                            }}>
                            <Placemark geometry={[55.670524, 37.633814]} />
                            <FullscreenControl />

                        </Map>
                    </YMaps>
                </div>



            </div>
        </footer>
    )
}

export default Footer;