import React from 'react';
import Typical from 'react-typical';
import "./Profile.css"



export default function Profile() {
    return (
        <div className = 'profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>


                        <a href='https://www.facebook.com/profile.php?id=100008227412251'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.instagram.com/zachwmorgan/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://twitter.com/ZachMorgan_'>
                            <i className='fa fa-twitter'></i>
                        </a>
                        <a href='https://github.com/morgandonor69'>
                            <i className='fa fa-github'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/zachary-morgan-892a3b1ab/'>
                            <i className='fa fa-linkedin'></i>
                        </a>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className="highlighed-text">Zach</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Enthusiastic Dev 🟥",
                                    1000, 
                                    "Full Stack Developer 🟧",
                                    1000, 
                                    "Deep Thinker 🟦",
                                    1000, 
                                    "Creator 🟩",
                                    1000,                  
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                I make programs using various frontend and backend methods.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me
                        </button>
                        <a href ='Z-RESUME.pdf' download='Zach Morgan Resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    );
}

