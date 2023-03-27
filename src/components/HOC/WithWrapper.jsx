import React from "react";

export const WithWrapper = (Component) => {
    return class extends React.Component {

        componentDidMount() {
            document.body.style.overflow = 'hidden';
        };
    
        componentWillUnmount() {
            document.body.style.overflow = 'unset';
        };

        render() {
            return <Component {...this.props} />
        };
    };
};