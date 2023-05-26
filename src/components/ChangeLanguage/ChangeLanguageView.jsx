import * as React from 'react';
import './ChangeLanguage.css';

function ChangeLanguageView({ lang, switchLanguage }) {
    return (
        <form className='form'>
            <div className='switch-field'>
                <input type='radio' id='radio-one' name='switch-one' value='ua' checked={lang === 'ua'} onChange={(e) => switchLanguage(e)} />
                <label htmlFor='radio-one'>UA</label>
                <input type='radio' id='radio-two' name='switch-one' value='en' checked={lang === 'en'} onChange={(e) => switchLanguage(e)} />
                <label htmlFor='radio-two'>EN</label>
            </div>
        </form>
    );
};

export default ChangeLanguageView;