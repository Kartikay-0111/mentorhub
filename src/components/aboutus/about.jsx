import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';

function About() {
    return (
        <div id='aboutus'>
        <div id='about'>
            <div className="svg1">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect id="Rectangle" x="0.414214" y="9.60657" width="13" height="13" rx="3" transform="rotate(-45 0.414214 9.60657)" fill="red" stroke="#65FFC7" strokeWidth="2" />
                </svg>
            </div>
            <div className="svg2">
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="+" d="M8.16402 7.82149C8.80042 7.1851 9.33075 7.07903 9.75501 7.5033L15.4508 13.199L21.0829 7.56694C21.5071 7.14267 22.0375 7.24874 22.6739 7.88513L22.8966 8.10787C23.533 8.74427 23.6391 9.2746 23.2148 9.69886L17.5827 15.331L23.2784 21.0267C23.7027 21.451 23.5966 21.9813 22.9602 22.6177L22.7375 22.8404C22.1011 23.4768 21.5708 23.5829 21.1465 23.1586L15.4508 17.4629L9.85047 23.0632C9.42621 23.4874 8.89588 23.3814 8.25948 22.745L8.03674 22.5222C7.40035 21.8858 7.29428 21.3555 7.71855 20.9313L13.3188 15.331L7.62309 9.63522C7.19882 9.21096 7.30489 8.68063 7.94129 8.04423L8.16402 7.82149Z" fill="blue" />
                </svg>
            </div>
            <div className="svg3">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle id="Oval" cx="7.5" cy="7.5" r="6.5" fill="white" stroke="#F7CE85" strokeWidth="2" />
                </svg>
            </div>
            <div className="svg4">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Path 6" d="M3.48959 3.25336C1.90728 3.54793 1.30332 5.49571 2.44141 6.63379L11.1423 15.3347C12.2804 16.4728 14.2282 15.8688 14.5227 14.2865L16.513 3.59535C16.77 2.21471 15.5614 1.00608 14.1808 1.26309L3.48959 3.25336Z" fill="white" stroke="#FF8585" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="main_page">
                <div className="div1">
                    <div className="image_div"><img className='about_image' src="./pexels-vanessa-garcia-6325984.jpg" alt="" /></div>
                </div>
                <div className="div2">
                    <div className="content">
                        <h5 className="text-secondary">About us</h5>
                        <h1 className="text-primary">Book 1:1 Sessions</h1>
                        <h4 className="text-info">Creative & Professional Digital Mentors!</h4>
                        <small className="text-light">Schedule a session instantly with a mentor and work with them directly on
                            Teetors - whether it’s for one-off tactical advice or multiple sessions towards a long-term goal.

                            Schedule a session instantly with a mentor and work with them directly on Teetors - whether it’s for
                            one-off tactical advice or multiple sessions towards a long-term goal.</small>
                    </div>
                    <div className="btn btn-outline-primary shadow mt-4">Explore</div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default About;
