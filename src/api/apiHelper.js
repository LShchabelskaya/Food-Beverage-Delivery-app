
import { getRandomIdsArr } from '../helpers';
import { setLoading, setData } from '../redux/teamReducer';

export function fetchData(dispatch) {
    dispatch(setLoading());
    fetch(`https://rickandmortyapi.com/api/character/${getRandomIdsArr(1, 826)}`)
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {          /// without setTimeout loader doesn't show up due to quick server response
            dispatch(setData(data))
        }, 1000);
    });
};