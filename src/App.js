import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { CardsContext } from './components/CardsProvider/CardsProvider';
import RoutesList from './components/RoutesList';
import MainPage from './pages/MainPage/MainPage';
import MenuPage from './pages/MenuPage/MenuPage';

function App() {
  return (
    <BrowserRouter>
        <RoutesList />
    </BrowserRouter>
  );
};

// class App extends Component {

//   navigateToMenu = () => {
//     this.props.navigate('/menu');
//   };

//   navigateToMain = () => {
//     this.props.navigate('/');
//   };

//   render() {
//     return (
//       <Routes>
//         <Route path='/' element={<MainPage navigateToMenu={this.navigateToMenu} />} />
//         <Route path='/menu' element={<MenuPage navigateToMain={this.navigateToMain} />} />
//       </Routes>
//     );
//   };
// };

// export function AppWithRouter(props) {
//   const navigate = useNavigate();
//   return <App navigate={navigate} />
// };

export default App;