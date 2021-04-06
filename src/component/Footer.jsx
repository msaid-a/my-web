import React, { Component } from 'react'
import Roll from 'react-reveal/Roll'


class Footer extends Component {
    render() {
        return (
            <div id="contact">
                <footer className="footer_area p_120" >
                    <div className="container">
                        <Roll left>
                        <div className=" text-center" style={{fontSize:100}}>
                            <a href="https://github.com/msaid-a" target="blank"><i className=" fab fa-github text-white m-3"> </i></a>
                            <a href="https://www.instagram.com/msaid_a/" target="blank"><i className="fab fa-instagram text-white m-3"> </i></a>
                            <a href="https://www.facebook.com/m.said.arrafi" target="blank"><i className="fab fa-facebook text-white m-3"> </i></a>
                            <a href="https://www.linkedin.com/in/muhammad-said-arrafi-9122ab174/" target="blank"><i className="fab fa-linkedin text-white m-3"> </i></a>
                        </div>
                       <h5 className="text-white  text-center mt-4"> <i className="mr-2 mt-1 far fa-envelope text-white"></i>muhammadsaidarrafi@gmail.com</h5>
                     <p className="text-center text-white">© Muhammad Said Arrafi | 2019  </p>
                    </Roll> 
                    </div>
                </footer>

            </div>
        )
    }
}

export default Footer
