import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ChangeLanguageView from './ChangeLanguageView.jsx';

function ChangeLanguage() {
    const { i18n } = useTranslation();

    const switchLanguage = (e) => {
        const value = e.target.value;
        i18n.changeLanguage(value);
    };

    return (
        <ChangeLanguageView lang={i18n.language} switchLanguage={switchLanguage} />
    );
};

export default ChangeLanguage;