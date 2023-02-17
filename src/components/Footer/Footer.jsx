import { Component } from 'react';
import './Footer.css';
import logo from '../../img/Logo.svg';
import instagram from '../../img/media/instagram.svg';
import twitter from '../../img/media/twitter.svg';
import youtube from '../../img/media/youtube.svg';


class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='footer__container'>
                    <div className='footer__content'>
                        <div className='footer__address'>
                            <button type='button' className='footer__logo navlink'><img data-goto='.main' src={logo} alt='Logo' /></button>
                            <p>Takeaway & Delivery template</p>
                            <span>for small - medium businesses.</span>
                        </div>
                        <div className='footer__navigation'>
                            <div className='footer__navigation__column'>
                                <h3>Company</h3>
                                <ul className='footer__list'>
                                    <li className='footer__item'>
                                        <button type='button' className='footer__link navlink'>Home</button>
                                    </li>
                                    <li className='footer__item'>
                                        <button type='button' className='footer__link navlink'>Order</button>
                                    </li>
                                    <li className='footer__item'>
                                        <button type='button' className='footer__link navlink'>FAQ</button>
                                    </li>
                                    <li className='footer__item'>
                                        <button type='button' className='footer__link navlink'>Contact</button>
                                    </li>
                                </ul>
                            </div>
                            <div className='footer__navigation__column'>
                                <h3>Template</h3>
                                <ul className='footer__list'>
                                    <li className='footer__item'>
                                        <button type='button' className='footer__link navlink'>Style Guide</button>
                                    </li>
                                    <li className='footer__item'>
                                        <button type='button' className='footer__link navlink'>Changelog</button>
                                    </li>
                                    <li className='footer__item'>
                                        <button type='button' className='footer__link navlink'>Licence</button>
                                    </li>
                                    <li className='footer__item'>
                                        <button type='button' className='footer__link navlink'>Webflow University</button>
                                    </li>
                                </ul>
                            </div>
                            <div className='footer__navigation__column'>
                                <h3>Flowbase</h3>
                                <ul className='footer__list'>
                                    <li className='footer__item'>
                                        <button type='button' className='footer__link navlink'>More Cloneables</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='footer__options'>
                        <div className='footer__by'>
                            <p>Built by Olena Shchabelska <a href='https://github.com/LShchabelskaya'
                                target='_blank' rel="noreferrer">GitHub</a> · Powered by <a
                                    href='https://www.figma.com/file/5IjxGrxWYHtAS1plXWroqB/Takeaway-%26-delivery-%2B?node-id=0%3A1&t=gPhKwcWeW2qKHQfi-0'
                                    target='_blank' rel="noreferrer">initial design</a></p>
                        </div>
                        <div className='footer__media'>
                            <div className='footer__media__wrapper'>
                                <button type='button'><img src={instagram} alt='Instagram icon' /></button>
                            </div>
                            <div className='footer__media__wrapper'>
                                <button type='button'><img src={twitter} alt='Twitter icon' /></button>
                            </div>
                            <div className='footer__media__wrapper'>
                                <button type='button'><img src={youtube} alt='Youtube icon' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    };
};

export default Footer;