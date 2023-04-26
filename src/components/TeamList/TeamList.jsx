import * as React from 'react';
import { useState, useEffect } from 'react';
import TeamListView from './TeamListView';

function TeamList() {
    const [teamList, setTeamList] = useState([]);

    const getRandomIdsArr = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return new Array(6).fill(null).map(() => Math.floor(Math.random() * (max - min + 1) + min));
    };

    useEffect(() => {
        
        if(!teamList.length) {
            fetch(`https://rickandmortyapi.com/api/character/${getRandomIdsArr(1, 826)}`)
            .then(response => response.json())
            .then(data => setTeamList(data))
        }
    }, [teamList]);

    return <TeamListView teamList={teamList} />
};

export default TeamList;