import * as React from 'react';
import { useEffect } from 'react';
import TeamListView from './TeamListView';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../api/apiHelper';

function TeamList() {
    const { teamData } = useSelector((state) => state.team);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData(dispatch);
    }, [dispatch]);

    return <TeamListView teamList={teamData} />
};

export default TeamList;