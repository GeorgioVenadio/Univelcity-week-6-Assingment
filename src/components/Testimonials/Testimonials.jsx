import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/vic.jpg'
import user_2 from '../../assets/rex.jpg'
import user_3 from '../../assets/bus.jpeg'
import user_4 from '../../assets/Oku.jpeg'


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward =()=>{
    if(tx > -50){
      tx -= 25;  
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward =()=>{
        if(tx < 0){
            tx += 25;  
          }
          slider.current.style.transform = `translateX(${tx}%)`;
          }  
    
  return (
    <div className='testimonials'>
<img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
<img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
<div className="slider">

    <ul ref={slider}>
        <li>
            <div className='slide'>
                <div className="user-info">
                    <img src={user_1} alt="" />
                    <div>
                        <h3>Rex Agbon</h3>
                        <span>Cadbury ltd</span>
                    </div>
                </div>
              <p>George is a great guy</p>
            </div>
        </li>

        <li>
            <div className='slide'>
                <div className="user-info">
                    <img src={user_2} alt="" />
                    <div>
                        <h3>Okuli samuel</h3>
                        <span>Dangote Nig</span>
                    </div>
                </div>
              <p>He's good at what he does</p>
            </div>
        </li><li>
            <div className='slide'>
                <div className="user-info">
                    <img src={user_3} alt="" />
                    <div>
                        <h3>Aransiola Leye</h3>
                        <span>GIG motors</span>
                    </div>
                </div>
              <p>I Love him handling my company's project, he sure know how to deliver</p>
            </div>
        </li><li>
            <div className='slide'>
                <div className="user-info">
                    <img src={user_4} alt="" />
                    <div>
                        <h3>Faith Ajiboye</h3>
                        <span>Todays Music Africa</span>
                    </div>
                </div>
              <p>His designs are top notch</p>
            </div>
        </li>
    </ul>

</div>
    </div>
  )
}

export default Testimonials