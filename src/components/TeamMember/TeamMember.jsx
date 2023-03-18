import { Component } from 'react';
import './TeamMember.css';

class TeamMember extends Component {
    render() {
        const { src, alt, title, text } = this.props;
        return (
            <div 
                className='member__card'>
                <img 
                    className='member__picture' 
                    src={src} 
                    alt={alt}
                />
                <div>
                    <div className='member__header'>
                        <h3 className='member__header__title'>{title}</h3>
                    </div>
                    <p className='member__text'>{text}</p>
                </div>
            </div>
        );
    };
};

export default TeamMember;