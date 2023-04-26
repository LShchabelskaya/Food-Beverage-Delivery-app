import * as React from 'react';
import './TeamListView.css';
import TeamMember from '../TeamMember/TeamMember';

function TeamListView({ teamList }) {
    return (
        <div
            className='team__list'>
            {teamList.map((member) => (
                <TeamMember
                    key={member.id}
                    src={member.image}
                    alt={member.name}
                    title={member.name}
                    text={member.species}
                />
            ))}
        </div>
    );
};

export default TeamListView;