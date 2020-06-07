import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/icofont/icofont.min.css';
import '../../assets/vendor/boxicons/css/boxicons.min.css';
import '../../assets/vendor/venobox/venobox.css';
import '../../assets/vendor/line-awesome/css/line-awesome.min.css';
import '../../assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../../assets/css/style.css';
import {Link} from 'react-router-dom';
import HeroImage from '../../assets/img/hero-img.png';
import React, { Component } from 'react';

class Hero extends Component {

    render() {
        return (
            <section id="hero" className="d-flex align-items-center" style={{ 
                height: '100vh'
             }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>Hello, I am Wisnu</h1>
                            <h2>I am a software engineer. </h2>
                            <div>
                                <Link to="/about" className="btn-get-started scrollto">See More</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src={HeroImage} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;