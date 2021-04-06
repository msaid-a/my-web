import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';


class Portofolio extends Component {
    render() {
        return (
            <div id='portofolio'>
                <section className="latest_blog_area p_120">
                    <div className="container ">
                        <div className="main_title">
                            <h2>Project</h2>
                        </div>
                        <div className="row latest_blog_inner justify-content-center">
                            <div className="col-lg-3 ">
                                <Fade left>
                                <div className="l_blog_item">
                                    <div className="l_blog_img">
                                        <img className="img-fluid" src="img/projects/qur'an.jpg" alt />
                                    </div>
                                    <div className="l_blog_text" style={{marginTop:48}}>
                                        <div className="date">
                                        </div>
                                        <a href="http://alquran-web.herokuapp.com" target="blank">
                                            <h4>Alqur'an Web </h4>
                                        </a>
                                            <h5>Technologies : </h5>
                                        <h5 className><button className="btn btn-secondary">React JS</button> <button className="btn btn-secondary">Bachors API</button></h5>
                                    </div>
                                </div>
                                </Fade>
                            </div>
                            
                                <Fade buttom>
                            <div className="col-lg-3 ml-lg-5">
                                <div className="l_blog_item">
                                    <div className="l_blog_img">
                                        <img className="img-fluid border" src="img/projects/task.png" alt />
                                    </div>
                                    <div className="l_blog_text" style={{marginTop:60}}>
                                        <a href="https://said-mongoose.herokuapp.com/" target="blank">
                                            <h4>Task App</h4>
                                        </a>
                                            <h5>Technologies:</h5>
                                            <h5 className><button className="btn btn-secondary">React JS</button> <button className="btn btn-secondary">Redux</button><button className="btn btn-secondary mt-lg-1 ml-1 ml-lg-0">Express JS</button><button className="btn btn-secondary mt-lg-1 ml-lg-1 ml-lg-0 mt-1 mt-lg-0">MongoDB</button></h5>
                                    </div>
                                </div>
                            </div> 
                            </Fade>
                            <Fade right>
                            <div className="col-lg-3 ml-lg-5">
                                <div className="l_blog_item">
                                    <div className="l_blog_img">
                                        <img className="img-fluid border" src="img/projects/workManage.jpg" alt />
                                    </div>
                                    <div className="l_blog_text" style={{marginTop:10}}>
                                        <a href="https://drive.google.com/open?id=1QHg36lAieCu8n733czj3cA7cFoMQtk2H" target="blank">
                                            <h4>Work manage</h4>
                                        </a>
                                            <p>Documentation (under deploy)</p>
                                            <h5>Technologies:</h5>
                                            <h5 className><button className="btn btn-secondary">React JS</button> <button className="btn btn-secondary">Redux</button><button className="btn btn-secondary mt-lg-1 ml-1 ml-lg-0">Express JS</button><button className="btn btn-secondary mt-lg-1 ml-lg-1 ml-lg-0 mt-1 mt-lg-0">MySql</button></h5>
                                    </div>
                                </div>
                            </div>
                            </Fade>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Portofolio
