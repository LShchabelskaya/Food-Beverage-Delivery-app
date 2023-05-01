import * as React from 'react';
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
import Team from '../../components/Team/Team';

function MainPageView({ navigateToMenu, infoLineRef, isStickyHeader }) {
    return (
        <div className='wrapper'>
            <InfoLine infoLineRef={infoLineRef} />
            <Header isStickyHeader={isStickyHeader} />
            <main className='page'>
                <Main />
                <About navigateToMenu={navigateToMenu} />
                <How />
                <FoodMenu navigateToMenu={navigateToMenu} />
                <Faq />
                <Call />
                <Team />
                <OrderNow />
            </main>
            <Footer />
        </div>
    );
};

export default MainPageView;