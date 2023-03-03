import { Component } from 'react';
import HeaderView from './HeaderView';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // cartCounter: 0,      // <--- temporary was moved to App until we use Context
            isMenuIconActive: false,
            isMenuBodyActive: false,
        };
    };

    menuIconClickHandler = () => {
        if (!this.state.isMenuIconActive && !this.state.isMenuBodyActive) {
            this.setState(() => ({
                isMenuIconActive: true,
                isMenuBodyActive: true
            }));
            document.body.classList.add('_lock');
        } else {
            this.setState(() => ({
                isMenuIconActive: false,
                isMenuBodyActive: false
            }));
            document.body.classList.remove('_lock');
        };
    };

    render() {
        const { isMenuIconActive, isMenuBodyActive } = this.state;
        const { cartCounterValue } = this.props;
        return (
            <HeaderView 
                isMenuIconActive={isMenuIconActive}
                isMenuBodyActive={isMenuBodyActive}
                cartCounterValue={cartCounterValue}
                menuIconClickHandler={this.menuIconClickHandler}
            />
        );
    };
};

export default Header;