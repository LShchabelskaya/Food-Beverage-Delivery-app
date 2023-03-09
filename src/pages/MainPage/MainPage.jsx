import React, { Component } from 'react';
import MainPageView from './MainPageView';

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartCounterValue: 0,
            isStickyHeader: false,
            isScrollListenerActive: false
        };
        this.infoLineRef = React.createRef();
    };

    updateMainState = (value) => {
        this.setState(({ cartCounterValue }) => ({
            cartCounterValue: cartCounterValue + +value // <--- temporary decision until we use Context 
        }));
    };

    stickHeader = () => {
        const scrollPosition = window.scrollY;
        if (!this.infoLineRef.current) {
            return;
        };

        if (scrollPosition >= this.infoLineRef.current.offsetHeight) {
            this.setState(() => ({
                isStickyHeader: true
            }));
        } else {
            this.setState(() => ({
                isStickyHeader: false
            }));
        };
    };

    scrollListener = () => {
        window.addEventListener('scroll', this.stickHeader);
    };

    setScrollListener = () => {
        const { isScrollListenerActive } = this.state;
        if (window.innerWidth < 768 && !isScrollListenerActive) {
            this.setState(() => ({
                isScrollListenerActive: true
            }));
            this.scrollListener();
        } else if (window.innerWidth > 768 && isScrollListenerActive) {
            this.setState(() => ({
                isScrollListenerActive: false
            }));
            window.removeEventListener('scroll', this.stickHeader);
        };
    };

    resizeListener = () => {
        window.addEventListener('resize', this.setScrollListener);
    };

    componentDidMount = () => {
        if (window.innerWidth < 768) {
            this.scrollListener();
            this.setState(() => ({
                isScrollListenerActive: true
            }));
        };
        this.resizeListener();
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.stickHeader);
        window.removeEventListener('resize', this.setScrollListener);
    };

    render() {
        const { cartCounterValue, isStickyHeader } = this.state;
        const { navigateToMenu } = this.props;
        return (
            <MainPageView
                cartCounterValue={cartCounterValue}
                navigateToMenu={navigateToMenu}
                updateMainState={this.updateMainState}
                infoLineRef={this.infoLineRef}
                isStickyHeader={isStickyHeader}
            />
        );
    };
};

export default MainPage;