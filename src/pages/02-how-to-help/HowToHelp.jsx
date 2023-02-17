import React from 'react';
import styleNames from './styleNames.module.css';

import InformationPanel from '../../components/informationPanel/InformationPanel';
import ProgramSelection from '../../components/programSelection/ProgramSelection';
import DonationBoxec from '../../components/donationBoxes/DonationBoxes';

import ImageOne from './ImageOne.png';
import ImageTwo from './ImageTwo.png';
import ImageThree from './ImageThree.png';
import ImageFour from './ImageFour.png';
import ImageFive from './ImageFive.png';

const HowToHelp = () => {

    let info = [
        {
            img: ImageOne,
            title: '«Здоровое будущее — особым детям!»',
            text: 'Приобретение для детей-сирот, детей, оставшихся без попечения родителей, детей-инвалидов необходимых для их жизнедеятельности лекарственных препаратов и медицинского оборудования',
        },
        {
            img: ImageTwo,
            title: '«Здоровое будущее — особым детям!»',
            text: 'Приобретение для детей-сирот, детей, оставшихся без попечения родителей, детей-инвалидов необходимых для их жизнедеятельности лекарственных препаратов и медицинского оборудования',
        },
        {
            img: ImageThree,
            title: '«Здоровое будущее — особым детям!»',
            text: 'Приобретение для детей-сирот, детей, оставшихся без попечения родителей, детей-инвалидов необходимых для их жизнедеятельности лекарственных препаратов и медицинского оборудования',
        },
        {
            img: ImageFour,
            title: '«Здоровое будущее — особым детям!»',
            text: 'Приобретение для детей-сирот, детей, оставшихся без попечения родителей, детей-инвалидов необходимых для их жизнедеятельности лекарственных препаратов и медицинского оборудования',
        },
        {
            img: ImageFive,
            title: '«Здоровое будущее — особым детям!»',
            text: 'Приобретение для детей-сирот, детей, оставшихся без попечения родителей, детей-инвалидов необходимых для их жизнедеятельности лекарственных препаратов и медицинского оборудования',
        },



    ]



    return (
        <div>
            <InformationPanel>
                <div className='titlePage'>Как помочь</div>
            </InformationPanel>
            <ProgramSelection 
            info={info} 
            big={true} 
            titlePC={'Выберите программу'}
            titleMobile={'Программы'}
            textPC={'Наша цель — помочь как можно большему количеству нуждающихся'}
            textMobile={'Выберите программу, которой хотите помочь'}
            />
            <DonationBoxec />
        </div>
    )
}

export default HowToHelp;