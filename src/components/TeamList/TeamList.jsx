import { Component } from 'react';
import TeamListView from './TeamListView';

class TeamList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            teamList:[]
        };
    };

    getRandomIdsArr = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return new Array(6).fill(null).map(() => Math.floor(Math.random() * (max - min + 1) + min));
    };

    getRandomCharacters = () => {
        fetch(`https://rickandmortyapi.com/api/character/${this.getRandomIdsArr(1, 826)}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({
                teamList: data
            });
        });
    };

    componentDidMount= () => {
        this.getRandomCharacters();
    };

    render() {
        const { teamList } = this.state;
        return (
            <TeamListView teamList={teamList} />
        );
    };
};

export default TeamList;