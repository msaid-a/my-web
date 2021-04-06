import React, { Component } from 'react'
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'
import Fade from 'react-reveal/Fade';


export class Header extends Component {
    

    render() {
        return (
            <div id="home">
            <section className="home_banner_area">
            <Fade buttom>                
                <div className="banner_inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="home_left_img">
                                    <img src="img/banner/home-left-1.png" alt />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner_content ml-5">
                                    <h5>Hello.....</h5>
                                    <h3>Iam Muhammad Said Arrafi</h3>
                                    <h3>Full Stack Developer & Network Engineer</h3>
                                    <h4 className=" text-primary">I Can Develop or Configuration</h4>
                                    <TypistLoop interval={0}>
                                        {[
                                        'Javascript',
                                        'ReactJs + Redux',
                                        'React Native',
                                        'MongoDB',
                                        'MySQL',
                                        'Mikrotik',
                                        'Cisco',
                                        'Linux Server',
                                        ].map(text => <Typist className="h1 text-center" key={text} startDelay={1200}>
                                            {text}
                                            <Typist.Backspace count={text.length +1} delay={1000} />
                                        </Typist> )}
                                    </TypistLoop>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            </section>



            </div>
        )
    }
}

export default Header
