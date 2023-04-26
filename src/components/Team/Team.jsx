import * as React from 'react';
import './Team.css';
import TeamList from '../TeamList/TeamList';

function Team() {
    return (
        <section className='team'>
            <div className='team__container'>
                <h2 className='team__title title'>Our team</h2>
                <TeamList />
            </div>
        </section>
    );
};

export default Team;