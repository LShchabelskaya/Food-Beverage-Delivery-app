import { Component } from 'react';
import './Call.css';
import call_photo from '../../img/Section_6_img.svg';
import CommonBtn from '../CommonBtn/CommonBtn';


class Call extends Component {
    render() {
        return (
            <section className='call'>
                <div className='call__container'>
                    <div className='call__content'>
                        <h2 className='call__title title'>Call our store and takeaway when it suits you best.</h2>
                        <p className='call__text'>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                        <CommonBtn text='Ph. +61 233 2333' />
                    </div>
                    <div className='call__photo'>
                        <img src={ call_photo } alt='Call our store' />
                    </div>
                </div>
            </section>
        )
    }
}

export default Call;