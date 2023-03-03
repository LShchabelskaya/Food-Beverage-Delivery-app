import { Component } from 'react';
import './MainPage.css';
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

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartCounterValue: 0,
        };
    };

    updateMainState = (value) => {
        this.setState(({ cartCounterValue }) => ({ 
            cartCounterValue: cartCounterValue + +value // <--- temporary decision until we use Context 
        })); 
    };

    render() {
        const { cartCounterValue } = this.state;
        const { navigateToMenu } = this.props;
        return (
            <div className='wrapper'>
                <InfoLine />
                <Header cartCounterValue={cartCounterValue} />
                <main className='page'>
                    <Main />
                    <About />
                    <How />
                    <FoodMenu updateMainState={this.updateMainState} navigateToMenu={navigateToMenu} />
                    <Faq />
                    <Call />
                    <OrderNow />
                </main>
                <Footer />
            </div>
        );
    };
};

export default MainPage;