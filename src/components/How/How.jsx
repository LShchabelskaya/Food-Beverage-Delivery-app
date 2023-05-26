import * as React from 'react';
import './How.css';
import HowItem from '../HowItem/HowItem';
import how_item_1 from '../../img/how_items/how_1.svg';
import how_item_2 from '../../img/how_items/how_2.svg';
import how_item_3 from '../../img/how_items/how_3.svg';
import { useTranslation } from 'react-i18next';


function How() {
    const { t } = useTranslation();
    return (
        <section className='how'>
            <div className='how__container'>
                <h2 className='how__title title'>{t('how.title')}</h2>
                <div className='how__items'>
                    <HowItem
                        src={how_item_1}
                        name={'how.itemFirst.name'}
                        text={'how.itemFirst.text'}
                    />
                    <HowItem
                        src={how_item_2}
                        name={'how.itemSecond.name'}
                        text={'how.itemSecond.text'}
                    />
                    <HowItem
                        src={how_item_3}
                        name={'how.itemThird.name'}
                        text={'how.itemThird.text'}
                    />
                </div>
            </div>
        </section>
    );
};

export default How;