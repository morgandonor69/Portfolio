import React,{useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './AboutMe.css'

export default function AboutMe(props) {

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)

    }
    const fadeInSubscription = 
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
        desrciption: "I am a current student at Fordham University studying Computer Science",
        highlights:{
            bullets:[
                "Full Stack Developer",
                "Internship experience",
                "REST API Development",
            ],
            heading:"A Few Highlights:"
        }
    }

    const renderHighlights = () =>{
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value,i)=>(
                <div className='highlight' key = {i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }

    return (
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me=description'>{SCREEN_CONSTANTS.desrciption}</span> 
                        <div className='about-me-highlights'>
                             <div className='highlights-heading'>
                                 <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                             </div>   
                             {renderHighlights()}
                        </div> 
                        <div className='about-me-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me
                        </button>
                        <a href ='RESUME_11:21_NEW.pdf' download='Zach Zach.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                        </div>
                     </div>
                </div>
            </div>
            
        </div>
    )
}
