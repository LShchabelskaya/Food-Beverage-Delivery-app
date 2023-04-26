import * as React from 'react';
import './TeamMember.css';

function TeamMember({ src, alt, title, text }) {
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

export default TeamMember;