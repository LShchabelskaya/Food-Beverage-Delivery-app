import * as React from 'react';
import { useState } from 'react';
import './About.css';
import about_photo from '../../img/Section_2_img.svg';
import CommonBtn from '../CommonBtn/CommonBtn';
import { WithWrapperPopup } from '../PopupView/PopupView';

function About({ navigateToMenu }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const operatePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <section className='about'>
            <div className='about__container'>
                <div className='about__content'>
                    <h2 className='about__title title'>The home of<span> fresh products</span></h2>
                    <p className='about__text'>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                    <CommonBtn text='Learn about us' onClick={operatePopup} />
                </div>
                <div className='about__photo'>
                    <img src={about_photo} alt='About' />
                </div>
            </div>
            {isPopupOpen ? <WithWrapperPopup operatePopup={operatePopup} navigateToMenu={navigateToMenu} /> : null}
        </section>
    );
};

export default About;