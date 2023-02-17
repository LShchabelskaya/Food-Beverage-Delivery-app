import { Component } from 'react';
import './Main.css';
import star from '../../img/Star_Trustpilot.svg';
import score_logo from '../../img/Trustpilot.svg';
import main_photo from '../../img/Section_1_img.svg';
import CommonBtn from '../CommonBtn/CommonBtn';


class Main extends Component {
    render() {
        return (
            <section className='main'>
                <div className='main__container'>
                    <div className='main__content'>
                        <h1 className='main__title'>Beautiful food & takeaway, <span>delivered</span> to your door.</h1>
                        <p className='main__text'>This app is designed for E-commerce food and beverage delivery, which gets
                            your restaurant online quickly.
                            The app looks and feels the way your customers expect: easy navigation, a simple algorithm
                            to make an order, and your contact details in quick access. It also allows you as an
                            entrepreneur to save time and focus on excellent cooking.</p>
                        <CommonBtn text='Place an Order' />
                        <button type='button' className='source__name'>
                            <img src={star} alt='Source logo' />
                            <img src={score_logo} alt='Trustpilot' />
                        </button>
                        <p className='source__score'><span>4.8 out of 5</span> based on 2000+ reviews</p>
                    </div>
                    <div className='main__photo'>
                        <img src={main_photo} alt='Main' />
                    </div>
                </div>
            </section>
        );
    };
};

export default Main;