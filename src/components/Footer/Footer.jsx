import * as React from 'react';
import './Footer.css';
import logo from '../../img/Logo.svg';
import FooterMediaItem from '../FooterMediaItem/FooterMediaItem';
import FooterNavColumn from '../FooterNavColumn/FooterNavColumn';
import instagram from '../../img/media/instagram.svg';
import twitter from '../../img/media/twitter.svg';
import youtube from '../../img/media/youtube.svg';
import { columns, SCROLL_DURATION, SCROLL_OFFSET } from '../../constants';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';


function Footer() {
    const { t } = useTranslation();
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__content'>
                    <div className='footer__address'>
                        <Link
                            to={'main'}
                            smooth={true}
                            offset={SCROLL_OFFSET}
                            duration={SCROLL_DURATION}
                            className='footer__logo navlink'
                        >
                            <img src={logo} alt='Logo' />
                        </Link>
                        <p>{t('footer.text.first')}</p>
                        <span>{t('footer.text.second')}</span>
                    </div>
                    <div className='footer__navigation'>
                        {columns.map(column => (<FooterNavColumn
                            key={column.title}
                            title={column.title}
                            links={column.links}
                        />))}
                    </div>
                </div>
                <div className='footer__options'>
                    <div className='footer__by'>
                        <p>{t('footer.by.name')}<a href='https://github.com/LShchabelskaya'
                            target='_blank' rel="noreferrer">{t('footer.by.link')}</a>{t('footer.source.name')}<a
                                href='https://www.figma.com/file/5IjxGrxWYHtAS1plXWroqB/Takeaway-%26-delivery-%2B?node-id=0%3A1&t=gPhKwcWeW2qKHQfi-0'
                                target='_blank' rel="noreferrer">{t('footer.source.link')}</a></p>
                    </div>
                    <div className='footer__media'>
                        <FooterMediaItem src={instagram} alt={'Instagram icon'} />
                        <FooterMediaItem src={twitter} alt={'Twitter icon'} />
                        <FooterMediaItem src={youtube} alt={'Youtube icon'} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;