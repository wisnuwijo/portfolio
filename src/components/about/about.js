import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/icofont/icofont.min.css';
import '../../assets/vendor/boxicons/css/boxicons.min.css';
import '../../assets/vendor/venobox/venobox.css';
import '../../assets/vendor/line-awesome/css/line-awesome.min.css';
import '../../assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../../assets/css/style.css';
import Footer from '../footer/footer';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class About extends Component {

    render() {
        return (
            <div>
                <section id="about" className="about" style={{ marginTop: '80px' }}>
                    <div className="container">

                        <div className="row">
                            <div className="col-xl-5 col-lg-6 d-flex justify-content-center video-box align-items-stretch">
                                <Link to="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true" />
                            </div>

                            <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                                <h3>Story About Me</h3>
                                <p>I am a soft</p>

                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-fingerprint"></i></div>
                                    <h4 className="title">
                                        <Link to="">Lorem Ipsum</Link>
                                    </h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                </div>

                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-gift"></i></div>
                                    <h4 className="title">
                                        <Link to="">Nemo Enim</Link>
                                    </h4>
                                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                </div>

                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-atom"></i></div>
                                    <h4 className="title">
                                        <Link to="">Dine Pad</Link>
                                    </h4>
                                    <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default About;