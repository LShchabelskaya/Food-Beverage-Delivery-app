import * as React from 'react';
import { useState, useEffect } from 'react';
import HeaderView from './HeaderView';
import { MOBILE_WIDTH } from '../../constants';

function Header({ cartCounterValue, isStickyHeader }) {
    const [headerState, setHeaderState] = useState({
        // cartCounter: 0,      // <--- temporary was moved to App until we use Context
        isMenuOpen: false,
    });

    const menuIconClickHandler = () => {
        setHeaderState({
            ...headerState,
            isMenuOpen: !headerState.isMenuOpen
        });
    };

    const linkClickHandler = () => {
        if (window.innerWidth < MOBILE_WIDTH) {
            setHeaderState({
                ...headerState,
                isMenuOpen: false
            });
        };
    };

    useEffect(() => {
        headerState.isMenuOpen ? document.body.classList.add('_lock') : document.body.classList.remove('_lock');
    }, [headerState.isMenuOpen]); 

    return (
        <HeaderView
            isMenuOpen={headerState.isMenuOpen}
            cartCounterValue={cartCounterValue}
            menuIconClickHandler={menuIconClickHandler}
            isStickyHeader={isStickyHeader}
            linkClickHandler={linkClickHandler}
        />
    );
};

// class Header extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             // cartCounter: 0,      // <--- temporary was moved to App until we use Context
//             isMenuOpen: false,
//         };
//     };

//     menuIconClickHandler = () => {
//         this.setState(({ isMenuOpen }) => ({
//             isMenuOpen: !isMenuOpen
//         }));
//     };

//     linkClickHandler = () => {
//         if (window.innerWidth < MOBILE_WIDTH) {
//             this.setState({ isMenuOpen: false });
//         };
//     };

//     componentDidUpdate = (prevState) => {
//         const { isMenuOpen } = this.state;
//         if (isMenuOpen !== prevState.isMenuOpen) {
//             isMenuOpen ? document.body.classList.add('_lock') : document.body.classList.remove('_lock');
//         };
//     };

//     render() {
//         const { isMenuOpen } = this.state;
//         const { cartCounterValue, isStickyHeader } = this.props;
//         return (
//             <HeaderView
//                 isMenuOpen={isMenuOpen}
//                 cartCounterValue={cartCounterValue}
//                 menuIconClickHandler={this.menuIconClickHandler}
//                 isStickyHeader={isStickyHeader}
//                 linkClickHandler={this.linkClickHandler}
//             />
//         );
//     };
// };

export default Header;