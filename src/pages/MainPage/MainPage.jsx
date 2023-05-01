import * as React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import MainPageView from './MainPageView';
import { MOBILE_WIDTH } from '../../constants';

function MainPage() {
    const infoLineRef = useRef(null);
    const navigate = useNavigate();

    const [mainPageState, setMainPageState] = useState({
        isStickyHeader: false,
        isScrollListenerActive: false
    });

    const navigateToMenu = () => {
        navigate('/menu');
    };

    const stickHeader = useCallback(() => {
        const scrollPosition = window.scrollY;
        if (!infoLineRef.current) {
            return;
        };
        setMainPageState({
            ...mainPageState,
            isStickyHeader: scrollPosition >= infoLineRef.current.offsetHeight
        });
    }, [mainPageState]);

    const scrollListener = useCallback(() => {
        window.addEventListener('scroll', stickHeader);
    }, [stickHeader]);

    const setScrollListener = useCallback(() => {
        if (window.innerWidth < MOBILE_WIDTH && !mainPageState.isScrollListenerActive) {
            setMainPageState({
                ...mainPageState,
                isScrollListenerActive: true
            });
            scrollListener();
        } else if (window.innerWidth > MOBILE_WIDTH && mainPageState.isScrollListenerActive) {
            setMainPageState({
                ...mainPageState,
                isScrollListenerActive: false
            });
            window.removeEventListener('scroll', stickHeader);
        };
    }, [mainPageState, scrollListener, stickHeader]);

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
    }, [resizeListener, scrollListener, stickHeader, setScrollListener, mainPageState]);

    return (
        <MainPageView
            navigateToMenu={navigateToMenu}
            infoLineRef={infoLineRef}
            isStickyHeader={mainPageState.isStickyHeader}
        />
    );
};

export default MainPage;