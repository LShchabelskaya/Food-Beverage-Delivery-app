import React, { Component } from 'react';
import MainPageView from './MainPageView';
import { MOBILE_WIDTH } from '../../constants';

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

        this.setState({
            isStickyHeader: scrollPosition >= this.infoLineRef.current.offsetHeight
        });
    };

    scrollListener = () => {
        window.addEventListener('scroll', this.stickHeader);
    };

    setScrollListener = () => {
        const { isScrollListenerActive } = this.state;
        if (window.innerWidth < MOBILE_WIDTH && !isScrollListenerActive) {
            this.setState(() => ({
                isScrollListenerActive: true
            }));
            this.scrollListener();
        } else if (window.innerWidth > MOBILE_WIDTH && isScrollListenerActive) {
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
        if (window.innerWidth < MOBILE_WIDTH) {
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