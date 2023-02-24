import { Component } from 'react';
import { useNavigate } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import MenuPage from './pages/MenuPage/MenuPage';

class App extends Component {

  navigateToMenu = () => {
    this.props.navigate('/menu');
  };

  navigateToMain = () => {
    this.props.navigate('/');
  };

  render() {
    return (
      <Routes>
        <Route path='/' element={<MainPage navigateToMenu={this.navigateToMenu} />} />
        <Route path='/menu' element={<MenuPage navigateToMain={this.navigateToMain} />} />
      </Routes>
    );
  };
};

export function AppWithRouter(props) {
  const navigate = useNavigate();
  return <App navigate={navigate} />
};

export default App;