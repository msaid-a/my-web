import React, { Component } from 'react'
import Bounce from 'react-reveal/Bounce';
import ModalImage from "react-modal-image";

class Achievment extends Component {
    onModal = () =>{
      return   <ModalImage small={ "img/projects/MTCNA.jpg" } large={ "img/projects/MTCNA.jpg" } alt="Hello World!" />
    }
    render() {
        return (
            <div className='bg-light border-top' id="achievment">
               <section className="projects_area p_120">
                   <div className="container">
                       <div className="main_title text-white">
                           <h2>Achievment</h2>
                           <p>This is my Achievment</p>
                       </div>
                       <div className="projects_inner row mx-auto">
                       <Bounce left>
                           <div className="col-lg-4 col-sm-6 brand web">
                               <a href="img/projects/MTCNA.jpg">
                               <div className="projects_item">
                                   <img className="img-fluid" src="img/projects/MTCNA.jpg" alt />
                                   <div className="projects_text">
                                   </div>
                               </div>
                               </a>
                           </div>
                           </Bounce>
                           <Bounce buttom>
                           <div className="col-lg-4 col-sm-6 brand web">
                               <a href="img/projects/MTCRE.PNG">

                               <div className="projects_item">
                                   <img className="img-fluid" src="img/projects/MTCRE.PNG" alt />
                               </div>
                               </a>
                           </div>
                           </Bounce>
                           <Bounce right>
                           <div className="col-lg-4 col-sm-6 brand web">
                               <a href="img/projects/MTA.PNG">

                               <div className="projects_item">
                                   <img className="img-fluid" src="img/projects/MTA.PNG" alt />
                                   <div className="projects_text">
                                   </div>
                               </div>
                               </a> 
                           </div>
                               </Bounce>
                       </div>
                   </div>
               </section>

            </div>
        )
    }
}

export default Achievment
