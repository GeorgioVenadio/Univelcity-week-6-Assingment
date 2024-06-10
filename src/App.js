
import React from 'react'
import './App.css';
import Navbar from './components/Navigation/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';
import Title from './components/Title/Title';



function App() {
  return (
   <div>
<Navbar/>

<div className='container'>
<Title subTitle='Welcome to my world' title='About Me'/>
<About/>
<Title subTitle='What people say' title='Testimonials'/>
<Testimonials/>
<Title subTitle='Hit me up' title='Contact us'/>
<Contact/>

<Footer/>

</div>
   </div>
  );
}

export default App;
