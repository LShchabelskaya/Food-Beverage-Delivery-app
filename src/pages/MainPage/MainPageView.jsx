import { Component } from 'react';
import './MainPageView.css';
import InfoLine from '../../components/InfoLine/InfoLine';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import About from '../../components/About/About';
import How from '../../components/How/How';
import FoodMenu from '../../components/FoodMenu/FoodMenu';
import Faq from '../../components/Faq/Faq';
import Call from '../../components/Call/Call';
import OrderNow from '../../components/OrderNow/OrderNow';
import Footer from '../../components/Footer/Footer';

class MainPageView extends Component {
    render() {
        const { cartCounterValue, navigateToMenu, updateMainState, infoLineRef, isStickyHeader } = this.props;
        return (
            <div className='wrapper'>
                <InfoLine infoLineRef={infoLineRef} />
                <Header cartCounterValue={cartCounterValue} isStickyHeader={isStickyHeader} />
                <main className='page'>
                    <Main />
                    <About />
                    <How />
                    <FoodMenu updateMainState={updateMainState} navigateToMenu={navigateToMenu} />
                    <Faq />
                    <Call />
                    <OrderNow />
                </main>
                <Footer />
            </div>
        );
    };
};

export default MainPageView;