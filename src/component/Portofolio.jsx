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
                                        <a href="https://alquran.msa-noconnection.com/" target="blank">
                                            <h4 className="text-center">Alqur'an Web </h4>
                                        </a>
                                    </div>
                                </div>
                                </Fade>
                            </div>
                            
                                <Fade buttom>
                            <div className="col-lg-3 ml-lg-5">
                                <div className="l_blog_item">
                                    <div className="l_blog_img">
                                        <img className="img-fluid border" src="img/yutaka.png" alt />
                                    </div>
                                    <div className="l_blog_text" style={{marginTop:60}}>
                                        <a href="http://yutakadeltaindoraya.com/" target="blank">
                                            <h4 className='text-center'>Company Yutaka</h4>
                                        </a>
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
                                        <a href="https://github.com/msaid-a/Final-Project" target="blank">
                                            <h4 className='text-center'>Work manage</h4>
                                        </a>
                                            <p className='text-center'>Documentation (under deploy)</p>
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
