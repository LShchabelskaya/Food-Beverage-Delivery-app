import { Component } from 'react';
import MainPageView from './MainPageView';

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
            <MainPageView 
                cartCounterValue={cartCounterValue}
                navigateToMenu={navigateToMenu}
                updateMainState={this.updateMainState}
            />
        );
    };
};

export default MainPage;