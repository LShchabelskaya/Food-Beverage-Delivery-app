import * as React from 'react';
import './How.css';
import HowItem from '../HowItem/HowItem';
import how_item_1 from '../../img/how_items/how_1.svg';
import how_item_2 from '../../img/how_items/how_2.svg';
import how_item_3 from '../../img/how_items/how_3.svg';


function How() {
    return (
        <section className='how'>
            <div className='how__container'>
                <h2 className='how__title title'>How it works.</h2>
                <div className='how__items'>
                    <HowItem
                        src={how_item_1}
                        name={'Adapt your menu items'}
                        text={'Easily adapt your menu using the webflow CMS and allow customers tobrowse your items.'}
                    />
                    <HowItem
                        src={how_item_2}
                        name={'Accept online orders & takeout'}
                        text={'Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.'}
                    />
                    <HowItem
                        src={how_item_3}
                        name={'Manage delivery or takeout'}
                        text={'Manage your own logistics and take orders simply through the ecommerce system.'}
                    />
                </div>
            </div>
        </section>
    );
};

export default How;