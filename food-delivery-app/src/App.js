import { Component } from 'react';
import './App.css';
import InfoLine from './components/InfoLine/InfoLine';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import How from './components/How/How';
import FoodMenu from './components/FoodMenu/FoodMenu';
import Faq from './components/Faq/Faq';
import Call from './components/Call/Call';
import OrderNow from './components/OrderNow/OrderNow';
import Footer from './components/Footer/Footer';

class App extends Component {

  render() {
    return (
      <div className='wrapper'>
        <InfoLine />
        <Header />
        <main className='page'>
          <Main />
          <About />
          <How />
          <FoodMenu />
          <Faq />
          <Call />
          <OrderNow />
        </main>
        <Footer />
      </div>
    );
  };
};

export default App;