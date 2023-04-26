import * as React from 'react';
import './FooterMediaItem.css';


function FooterMediaItem({ src, alt }) {
    return (
        <div className='footer__media__wrapper'>
            <button type='button'><img src={src} alt={alt} /></button>
        </div>
    );
};

export default FooterMediaItem;