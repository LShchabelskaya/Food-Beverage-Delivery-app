import * as React from 'react';
import './TeamListView.css';
import TeamMember from '../TeamMember/TeamMember';
import CommonBtn from '../CommonBtn/CommonBtn';
import Loader from '../Loader/Loader';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../api/apiHelper';

function TeamListView({ teamList }) {
    const { t } = useTranslation();
    const { isLoading } = useSelector((state) => state.team)
    const dispatch = useDispatch();
    return (
        <section className='team'>
            <div className='team__container'>
                <h2 className='team__title title'>{t('team.title')}</h2>
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
                {isLoading ? <Loader /> : null}
                <div className='team__btn-wrapper'>
                    <CommonBtn text='team.button' onClick={() => fetchData(dispatch)} />
                </div>
            </div>
        </section>
    );
};

export default TeamListView;