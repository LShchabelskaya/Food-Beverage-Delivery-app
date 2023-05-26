import * as React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ChangeLanguageView from './ChangeLanguageView.jsx';

function ChangeLanguage() {

    const { i18n } = useTranslation();
    const [lang, setLang] = useState('');

    const switchLanguage = (e) => {
        const value = e.target.value;
        i18n.changeLanguage(value);
        setLang(value);
    };

    useEffect(() => {
        if (i18n.language !== 'ua' && i18n.language !== 'en') {

            i18n.changeLanguage('ua')
            setLang('ua')
        } else {
            setLang(i18n.language);
        }
    }, [i18n]);

    return (
        <ChangeLanguageView lang={lang} switchLanguage={switchLanguage} />
    );
};

export default ChangeLanguage;