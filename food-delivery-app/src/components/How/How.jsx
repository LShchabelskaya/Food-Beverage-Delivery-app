import { Component } from 'react';
import './How.css';
import how_item_1 from '../../img/how_items/how_1.svg';
import how_item_2 from '../../img/how_items/how_2.svg';
import how_item_3 from '../../img/how_items/how_3.svg';


class How extends Component {
    render() {
        return (
            <section className='how'>
                <div className='how__container'>
                    <h2 className='how__title title'>How it works.</h2>
                    <div className='how__items'>
                        <div className='how__item'>
                            <img src={how_item_1} alt='Adapt your menu items' className='how__item__image' />
                            <h3 className='how__item__title'>Adapt your menu items</h3>
                            <p className='how__item__text'>Easily adapt your menu using the webflow CMS and allow customers
                                to
                                browse your items.</p>
                        </div>
                        <div className='how__item'>
                            <img src={how_item_2} alt='Accept online orders & takeout'
                                className='how__item__image' />
                            <h3 className='how__item__title'>Accept online orders & takeout</h3>
                            <p className='how__item__text'>Let your customers order and pay via the powerful ecommerce
                                system, or
                                simple let them call your store.</p>
                        </div>
                        <div className='how__item'>
                            <img src={how_item_3} alt='Manage delivery or takeout'
                                className='how__item__image' />
                            <h3 className='how__item__title'>Manage delivery or takeout</h3>
                            <p className='how__item__text'>Manage your own logistics and take orders simply through the
                                ecommerce
                                system.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
};

export default How;