import React from 'react'
import './About.css'
import about_img from'../../assets/about.png'


const About = () => {
  return (
   
    <div className='about'>
<div className="about-left">
<img src={about_img} alt="" className='about-img'/>

</div>
<div className="about-right">
    <h3>Hi, I'm George</h3>
    <h2>Fullstack Developer</h2>
    <p>With high level experience in web design and knowledgeable in delivering quality work</p>
    <p>Html CSS Javascript React Mongo Db</p>   
 
     
</div>
    </div>



  )
}

export default About