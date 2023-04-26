import * as React from 'react';
import './PopupView.css';
import CommonBtn from '../CommonBtn/CommonBtn';
import { WithWrapper } from '../HOC/WithWrapper';

function PopupView({ operatePopup, navigateToMenu }) {
    return (
        <div className='popup'>
            <div className='popup__body'>
                <div className='popup__content'>
                    <span className='popup__close' onClick={operatePopup}>x</span>
                    <div className='popup__title'>About us</div>
                    <div className='popup__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    <CommonBtn text='See Full Menu' onClick={navigateToMenu} />
                </div>
            </div>
        </div>
    );
};

export const WithWrapperPopup = WithWrapper(PopupView);