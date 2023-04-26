import * as React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import MainPageView from './MainPageView';
import { MOBILE_WIDTH } from '../../constants';

function MainPage() {
    const infoLineRef = useRef(null);
    const navigate = useNavigate();

    const [mainPageState, setMainPageState] = useState({
        cartCounterValue: 0,
        isStickyHeader: false,
        isScrollListenerActive: false
    });

    const navigateToMenu = () => {
        navigate('/menu');
    };

    const updateMainState = (value) => {
        setMainPageState({
            ...mainPageState,
            cartCounterValue:mainPageState.cartCounterValue + +value    // <--- temporary decision until we use Context 
        });
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
            setMainPageState({
                ...mainPageState,
                isScrollListenerActive: true
            });
        };
        resizeListener();
        return () => {
            window.removeEventListener('scroll', stickHeader);
            window.removeEventListener('resize', setScrollListener);
        };
    }, [resizeListener, scrollListener, mainPageState, stickHeader, setScrollListener]);

    return (
        <MainPageView
            cartCounterValue={mainPageState.cartCounterValue}
            navigateToMenu={navigateToMenu}
            updateMainState={updateMainState}
            infoLineRef={infoLineRef}
            isStickyHeader={mainPageState.isStickyHeader}
        />
    );
};

// class MainPage extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             cartCounterValue: 0,
//             isStickyHeader: false,
//             isScrollListenerActive: false
//         };
//         this.infoLineRef = React.createRef();
//     };

//     updateMainState = (value) => {
//         this.setState(({ cartCounterValue }) => ({
//             cartCounterValue: cartCounterValue + +value // <--- temporary decision until we use Context 
//         }));
//     };

//     stickHeader = () => {
//         const scrollPosition = window.scrollY;
//         if (!this.infoLineRef.current) {
//             return;
//         };

//         this.setState({
//             isStickyHeader: scrollPosition >= this.infoLineRef.current.offsetHeight
//         });
//     };

//     scrollListener = () => {
//         window.addEventListener('scroll', this.stickHeader);
//     };

//     setScrollListener = () => {
//         const { isScrollListenerActive } = this.state;
//         if (window.innerWidth < MOBILE_WIDTH && !isScrollListenerActive) {
//             this.setState(() => ({
//                 isScrollListenerActive: true
//             }));
//             this.scrollListener();
//         } else if (window.innerWidth > MOBILE_WIDTH && isScrollListenerActive) {
//             this.setState(() => ({
//                 isScrollListenerActive: false
//             }));
//             window.removeEventListener('scroll', this.stickHeader);
//         };
//     };

//     resizeListener = () => {
//         window.addEventListener('resize', this.setScrollListener);
//     };

//     componentDidMount = () => {
//         if (window.innerWidth < MOBILE_WIDTH) {
//             this.scrollListener();
//             this.setState(() => ({
//                 isScrollListenerActive: true
//             }));
//         };
//         this.resizeListener();
//     };

//     componentWillUnmount = () => {
//         window.removeEventListener('scroll', this.stickHeader);
//         window.removeEventListener('resize', this.setScrollListener);
//     };

//     render() {
//         const { cartCounterValue, isStickyHeader } = this.state;
//         const { navigateToMenu } = this.props;
//         return (
//             <MainPageView
//                 cartCounterValue={cartCounterValue}
//                 navigateToMenu={navigateToMenu}
//                 updateMainState={this.updateMainState}
//                 infoLineRef={this.infoLineRef}
//                 isStickyHeader={isStickyHeader}
//             />
//         );
//     };
// };

export default MainPage;