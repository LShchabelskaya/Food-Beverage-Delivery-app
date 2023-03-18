import { Component } from 'react';
import './TeamListView.css';
import TeamMember from '../TeamMember/TeamMember';

class TeamListView extends Component {
    render() {
        const { teamList } = this.props;
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
};

export default TeamListView;