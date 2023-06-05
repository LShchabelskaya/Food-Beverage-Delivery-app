import * as React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import MainPageView from './MainPageView';
import { MOBILE_WIDTH } from '../../constants';

function MainPage() {
    const infoLineRef = useRef(null);
    const navigate = useNavigate();

    const [stickyHeader, setStickyHeader] = useState(false);

    const navigateToMenu = () => {
        navigate('/menu');
    };

    const stickHeader = useCallback(() => {
        if (!infoLineRef.current || stickyHeader) {
            return;
        };
        setStickyHeader(true);
    }, [stickyHeader]);

    const scrollListener = useCallback(() => {
        const scrollPosition = window.scrollY;
        if (window.innerWidth < MOBILE_WIDTH && scrollPosition >= infoLineRef.current.offsetHeight) {
            stickHeader();
        } else if (stickyHeader) {
            setStickyHeader(false);
        }
    }, [stickHeader, stickyHeader]);

    useEffect(() => {
        window.addEventListener('scroll', scrollListener)
    }, [scrollListener]);

    return (
        <MainPageView
            navigateToMenu={navigateToMenu}
            infoLineRef={infoLineRef}
            stickyHeader={stickyHeader}
        />
    );
};

export default MainPage;