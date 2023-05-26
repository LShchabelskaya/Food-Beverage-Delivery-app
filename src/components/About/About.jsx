import * as React from 'react';
import { useState } from 'react';
import AboutView from './AboutView';

function About({ navigateToMenu }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const operatePopup = () => {
        setIsPopupOpen((prevIsPopupOpen) => !prevIsPopupOpen);
    };

    return (
        <AboutView 
            isPopupOpen={isPopupOpen}
            operatePopup={operatePopup}
            navigateToMenu={navigateToMenu}
        />
    );
};

export default About;