import { BrowserRouter } from 'react-router-dom';
import RoutesList from './components/RoutesList';

function App() {
  return (
    <BrowserRouter>
        <RoutesList />
    </BrowserRouter>
  );
};

export default App;