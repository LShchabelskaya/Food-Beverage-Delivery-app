import * as React from 'react';
import { useState } from 'react';
import FoodMenuView from './FoodMenuView';
import { cards } from '../../constants';

function FoodMenu({ updateMainState, navigateToMenu }) {
    const [cardsList] = useState(cards);

    return (
        <FoodMenuView
            updateMainState={updateMainState}
            navigateToMenu={navigateToMenu}
            cards={cardsList}
        />
    );
};

export default FoodMenu;