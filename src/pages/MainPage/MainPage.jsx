import * as React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import MainPageView from './MainPageView';
import { MOBILE_WIDTH } from '../../constants';

function MainPage() {
    const infoLineRef = useRef(null);
    const navigate = useNavigate();

    const [stickyHeader, setStickyHeader] = useState(false);
    const [scrollListenerActive, setScrollListenerActive] = useState(false);

    const navigateToMenu = () => {
        navigate('/menu');
    };

    const stickHeader = useCallback(() => {
        const scrollPosition = window.scrollY;
        if (!infoLineRef.current) {
            return;
        };
        setStickyHeader(scrollPosition >= infoLineRef.current.offsetHeight);
    }, []);

    const scrollListener = useCallback(() => {
        window.addEventListener('scroll', stickHeader);
    }, [stickHeader]);

    const setScrollListener = useCallback(() => {
        if (window.innerWidth < MOBILE_WIDTH && !scrollListenerActive) {
            setScrollListenerActive(true);
            scrollListener();
        } else if (window.innerWidth > MOBILE_WIDTH && scrollListenerActive) {
            setScrollListenerActive(false);
            window.removeEventListener('scroll', stickHeader);
        };
    }, [scrollListener, stickHeader, scrollListenerActive]);

    const resizeListener = useCallback(() => {
        window.addEventListener('resize', setScrollListener);
    }, [setScrollListener]);

    useEffect(() => {
        if (window.innerWidth < MOBILE_WIDTH) {
            scrollListener();
        };
        resizeListener();
        return () => {
            window.removeEventListener('scroll', stickHeader);
            window.removeEventListener('resize', setScrollListener);
        };
    }, [resizeListener, scrollListener, stickHeader, setScrollListener]);

    return (
        <MainPageView
            navigateToMenu={navigateToMenu}
            infoLineRef={infoLineRef}
            stickyHeader={stickyHeader}
        />
    );
};

export default MainPage;