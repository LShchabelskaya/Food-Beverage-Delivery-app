import { Component } from 'react';
import FoodMenuView from './FoodMenuView';
import { cards } from '../../constants';

class FoodMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { cards };
    };

    render() {
        const { updateMainState, navigateToMenu } = this.props;
        const { cards } = this.state;
        return (
            <FoodMenuView
                updateMainState={updateMainState}
                navigateToMenu={navigateToMenu}
                cards={cards}
            />
        );
    };
};

export default FoodMenu;