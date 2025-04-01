import React, { useState } from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import hero from '../../assets/hero.png'
// import Navbar from './Components/Navbar/navbar.jsx'
import Navbar from '../../Components/Navbar/navbar.jsx'
import Play from '../../assets/play.png'
import abo from '../../assets/about.png'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const home = () => {

   
   const[scroll,setScroll] = useState(false);



  return (
      <div className='home'>
          {/* <ScrollTrigger onEnter={() => setScroll(true)} onExit={() => setScroll(false)}> */}
          <Navbar/>
          <div className="hero">
              <a href="/"><img className='fFgM' src={hero} alt=""/></a>
              <div className="col-08">
                  <div className="col-1">
                      <h6 className='stMv'>From the for User interface</h6>
                      <h1 className='heEe'>Behind Every <span className='sp-1'>Success</span><br/>There is a <span
                          className='sp-2'>Cactus</span></h1>
                  </div>
                  <a className="bn31" href="/"><span className="bn31span">Get Started</span></a>
              </div>
          </div>
          <div className="videos">
              <div className="video">
                  <center>
                      <img className='paly' src={Play} alt=""/>
                  </center>
                  <div className="video-docs">
                      <h3>Being unique is the preference</h3>
                      <h4>Youtube video will appear in popover</h4>
                  </div>
              </div>
          </div>
          <div className="next pt-100 pb-100">
              <div className="container">
                  <div className="row">
                      <div className="col-1g">
                          <div className="bot-left">
                              <h2>
                                  Brief Information
                                  <br/>
                                  About
                                  <span> MoveOn</span>
                                  <p className='mt-30'>Few would argue that, despite the advancements of feminism over
                                      the past three decades, women still face a double standard when it comes to their
                                      behavior. While men’s borderline-inappropriate behavior is often laughed off as
                                      “boys will be boys,” women face higher conduct standards – especially in the
                                      workplace. <br/><br/> While men’s borderline-inappropriate behavior is often
                                      laughed off as “boys will be boys,”
                                  </p>
                              </h2>
                              <a className="bn32" href="/"><span className="bn31span">View More</span></a>
                          </div>
                      </div>
                      <div className="col-1g">
                          <img className='img-fluid' src={abo} alt=""/>
                      </div>
                  </div>
              </div>
          </div>
          <div className="kxLj">
              <ScrollTrigger onEnter={() => setScroll(true)} onExit={() => setScroll(false)}>
                  <div className="hurl-left">
                      <div className="countup">
                          <h1 className='num'>{scroll && <CountUp start={0} end={5962}></CountUp>}</h1>
                          <p className='para'>Projects Completed</p>
                      </div>
                      <div className="countup">
                          <h1 className='num'>{scroll && <CountUp start={0} end={2394}></CountUp>}</h1>
                          <p className='para'>New Projects</p>
                      </div>
                      <div className="countup">
                          <h1 className='num'>{scroll && <CountUp start={0} end={1439}></CountUp>}</h1>
                          <p className='para'>Tickets Submitted</p>
                      </div>
                      <div className="countup">
                          <h1 className='num'>{scroll && <CountUp start={0} end={933}></CountUp>}</h1>
                          <p className='para'>Cup of Coffee</p>
                      </div>
                  </div>
                  <div className="hurl-right">
                      <div className="lakf">
                          <h2 className='nums'>Are your Templates responsive?</h2>
                          <p className='paras'>“Few would argue that, despite the advancements of feminism over the past
                              three decades, women still face a double standard when it comes to their behavior. While
                              men’s borderline-inappropriate behavior.</p>
                      </div>
                      <div className="lakf">
                          <h2 className='nums'>Does it have all the plugin as mentioned?</h2>
                          <p className='paras'>“Few would argue that, despite the advancements of feminism over the past
                              three decades, women still face a double standard when it comes to their behavior. While
                              men’s borderline-inappropriate behavior.</p>
                      </div>
                      <div className="lakf">
                          <h2 className='nums'>Can i use the these theme for my client?</h2>
                          <p className='paras'>“Few would argue that, despite the advancements of feminism over the past
                              three decades, women still face a double standard when it comes to their behavior. While
                              men’s borderline-inappropriate behavior.</p>
                      </div>
                  </div>
                  {/* </div> */}

              </ScrollTrigger>
          </div>
          <div className="mail">
              <section className='cdfg'>
                  <form action="https://api.web3forms.com/submit" method="POST" className='mssg'>
                      <h2 className='sender'>Send Us <span className='senderr'>Message</span></h2>
                      <p className='page'>Most people who work in an office environment, buy computer products.</p>
                      <input type="hidden" name="access_key" value="df0c6dc3-f84c-43ce-9fac-d82153ef375f" />
                      <div className="KjedL">
                          <div className="E-name">
                              <input type="name" placeholder='Enter your name' className='namee' required/>
                          </div>
                          <div className="E-name">
                              <input type="name" placeholder='Enter email address' className='namee' required/>
                          </div>
                      </div>
                      <div className="KjL">
                          <textarea name="message"  className='fieldmess' placeholder='Message'required></textarea>
                      </div>
                      <div className="L-Butten">
                          <button type='submit' className='Submit'>
                              <span>Submit</span>
                          </button>
                      </div>
                  </form>
              </section>
          </div>
          <footer>
            <div className="foot">
                <ul>
                    <li> Help Center</li>
                    <li>Gift Cards</li>
                    <li>Media Centre</li>
                    <li>Investor Relations</li>
                    <li>Jobs</li>
                    <li>Terms of Use</li>
                    <li>Privacy</li>
                    <li>Legal Notices</li>
                    <li>Audio Descripion</li>
                    <li>Cookie Preferences</li>
                    <li>Corporate Information</li>
                    <li>Contact US</li>
                </ul>
            </div>
          </footer>
          <hr />
          <div className="copy">
          Copyright © 2025 All rights reserved | <span className='copyrights'>Logeshwaran P</span>
          </div>
      </div>
  );
};

export default home
