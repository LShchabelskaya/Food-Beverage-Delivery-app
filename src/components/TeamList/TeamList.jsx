import * as React from 'react';
import { useState, useEffect } from 'react';
import TeamListView from './TeamListView';
import { getRandomIdsArr } from '../../helpers.js';

function TeamList() {
    const [teamList, setTeamList] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${getRandomIdsArr(1, 826)}`)
        .then(response => response.json())
        .then(data => setTeamList(data))
    }, []);

    return <TeamListView teamList={teamList} />
};

export default TeamList;