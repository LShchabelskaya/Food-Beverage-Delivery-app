import * as React from 'react';
import './Team.css';
import TeamList from '../TeamList/TeamList';
import { useTranslation } from 'react-i18next';

function Team() {
    const { t } = useTranslation();
    return (
        <section className='team'>
            <div className='team__container'>
                <h2 className='team__title title'>{t('team.title')}</h2>
                <TeamList />
            </div>
        </section>
    );
};

export default Team;