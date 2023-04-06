import { Component } from 'react';
import HeaderView from './HeaderView';
import { MOBILE_WIDTH } from '../../constants';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // cartCounter: 0,      // <--- temporary was moved to App until we use Context
            isMenuOpen: false,
        };
    };

    menuIconClickHandler = () => {
        this.setState(({ isMenuOpen }) => ({
            isMenuOpen: !isMenuOpen
        }));
    };

    linkClickHandler = () => {
        if(window.innerWidth < MOBILE_WIDTH) {
            this.setState({ isMenuOpen: false });
        };
    };

    componentDidUpdate = (prevState) => {
        const {isMenuOpen} = this.state;
        if(isMenuOpen !== prevState.isMenuOpen) {
            isMenuOpen ? document.body.classList.add('_lock') : document.body.classList.remove('_lock');
        };
    };

    render() {
        const { isMenuOpen } = this.state;
        const { cartCounterValue, isStickyHeader } = this.props;
        return (
            <HeaderView
                isMenuOpen={isMenuOpen}
                cartCounterValue={cartCounterValue}
                menuIconClickHandler={this.menuIconClickHandler}
                isStickyHeader={isStickyHeader}
                linkClickHandler={this.linkClickHandler}
            />
        );
    };
};

export default Header;