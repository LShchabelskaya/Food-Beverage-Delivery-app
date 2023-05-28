import MainPage from '../pages/MainPage/MainPage';
import MenuPage from '../pages/MenuPage/MenuPage';
import { useRoutes } from 'react-router-dom';

export const routes = [
    { 
        path: '/', 
        element: <MainPage />
    },
    { 
        path: 'menu', 
        element: <MenuPage />
    }
];

function RoutesList() {
    let element = useRoutes(routes);
    return element;
};

export default RoutesList;