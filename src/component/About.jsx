import React, { Component } from 'react'
import Roll from 'react-reveal/Roll'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade'

class About extends Component {
    render() {
        return (
           <div className="bg-dark" id="about">
               {/*================Welcome Area =================*/}
               <section className="welcome_area p_120 text-white">
                   <div className="container">
                       <div className="row welcome_inner">
                       <div className="col-lg-6">
                               <div className="tools_expert">
                                   <div className="skill_main ">
                           <Fade right>
                                       <img src="img/banner/me.jpeg" alt="" className="card-img-top"/>
                           </Fade>
                                   </div>
                               </div>
                           </div>
                           <div className="col-lg-6">
                               <div className="welcome_text">
                                   <h4 className="text-white">About Me</h4>
                                   <Slide left>
                                  <ul className="h4 mb-5 font-italic">
                                      <li> Born in 2001, Bandung, Indonesia.</li>
                                      <li> Knowing about programming and networking.</li>
                                      <li> Optimistic and Work Hard.</li>
                                      <li> Knowing and can use git</li>
                                      <li>A network engineering graduate who dared to learn programing</li>
                                      <li>Prefers linux than windows</li>
                                      <li>Graduated with best final project presentation well known coding boot camp (Purwadhika)</li>
                                  </ul>
                                  </Slide>
                                       <h1 cla>Skills</h1>
                                   <div className="row">
                                    <Roll left>
                                       <div className="col-md-3 col-3 mb-5">
                                           <div className="rounded">
                                               <img src="img/skills/javascript.png" className="w-100 rounded border" />
                                           </div>
                                       </div>
                                    </Roll>
                                    <Roll left>
                                       <div className="col-md-3 col-3 mb-5">
                                           <div className="rounded">
                                           <img src="img/skills/react.jpg" className="w-100 rounded border" />
                                           </div>
                                       </div>
                                       </Roll>
                                       <Roll left>
                                       <div className="col-md-3 col-3 mb-5">
                                           <div className="rounded">
                                           <img src="img/skills/mysql.png" className="w-100 rounded border" />
                                           </div>
                                       </div>
                                       </Roll>
                                       <Roll left>
                                       <div className="col-md-3 col-3 mb-5">
                                           <div className="rounded">
                                           <img src="img/skills/mongodb.jpeg" className="w-100 rounded border" />
                                           </div>
                                       </div>
                                       </Roll>
                                       <Roll left>
                                       <div className="col-md-3 col-3 mb-5">
                                           <div className="rounded">
                                           <img src="img/skills/nodejs.jpg" className="w-100 rounded border" />
                                           </div>
                                       </div>
                                       </Roll>
                                       <Roll left>
                                       <div className="col-md-3 col-3 mb-5">
                                           <div className="rounded">
                                           <img src="img/skills/redux.jpg" className="w-100 rounded border" />
                                           </div>
                                       </div>
                                       </Roll>
                                       <Roll left>
                                       <div className="col-md-3 col-3 mb-5">
                                           <div className="rounded">
                                           <img src="img/skills/react-native.png" className="w-100 rounded border" />
                                           </div>
                                       </div>
                                       </Roll>
                                       <Roll left>
                                       <div className="col-md-3 col-3 mb-5">
                                           <div className="rounded">
                                           <img src="img/skills/mikrotik.jpg" className="w-100 rounded border" />
                                           </div>
                                       </div>
                                       </Roll>
                                       <Roll left>
                                       <div className="col-md-3 col-3 mb-5">
                                           <div className="rounded">
                                           <img src="img/skills/linux.jpeg" className="w-100 rounded border" />
                                           </div>
                                       </div>
                                       </Roll>
                                       <Roll left>
                                       <div className="col-md-3 col-3 mb-5">
                                           <div className="rounded">
                                           <img src="img/skills/cisco-logo.jpg" className="w-100 rounded border" />
                                           </div>
                                       </div>
                                       </Roll>
                                   </div>
                                 
                               </div>
                           </div>

                          
                       </div>
                   </div>
               </section>
           </div>

        )
    }
}

export default About
