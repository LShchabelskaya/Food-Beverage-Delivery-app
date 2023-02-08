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
                            <a href='#' className='footer__logo'><img data-goto='.main' className='navlink' src={logo}
                                alt='Logo' /></a>
                            <p>Takeaway & Delivery template</p>
                            <span>for small - medium businesses.</span>
                        </div>
                        <div className='footer__navigation'>
                            <div className='footer__navigation__column'>
                                <h3>Company</h3>
                                <ul className='footer__list'>
                                    <li className='footer__item'>
                                        <a data-goto='.main' href='#' className='footer__link navlink'>Home</a>
                                    </li>
                                    <li className='footer__item'>
                                        <a data-goto='.order-now' href='#' className='footer__link navlink'>Order</a>
                                    </li>
                                    <li className='footer__item'>
                                        <a data-goto='.faq' href='#' className='footer__link navlink'>FAQ</a>
                                    </li>
                                    <li className='footer__item'>
                                        <a data-goto='.call' href='#' className='footer__link navlink'>Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='footer__navigation__column'>
                                <h3>Template</h3>
                                <ul className='footer__list'>
                                    <li className='footer__item'>
                                        <a href='#' className='footer__link'>Style Guide</a>
                                    </li>
                                    <li className='footer__item'>
                                        <a href='#' className='footer__link'>Changelog</a>
                                    </li>
                                    <li className='footer__item'>
                                        <a href='#' className='footer__link'>Licence</a>
                                    </li>
                                    <li className='footer__item'>
                                        <a href='#' className='footer__link'>Webflow University</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='footer__navigation__column'>
                                <h3>Flowbase</h3>
                                <ul className='footer__list'>
                                    <li className='footer__item'>
                                        <a href='#' className='footer__link'>More Cloneables</a>
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
                                <a href='#'><img src={instagram} alt='Instagram icon' /></a>
                            </div>
                            <div className='footer__media__wrapper'>
                                <a href='#'><img src={twitter} alt='Twitter icon' /></a>
                            </div>
                            <div className='footer__media__wrapper'>
                                <a href='#'><img src={youtube} alt='Youtube icon' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    };
};

export default Footer;