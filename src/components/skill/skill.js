import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/icofont/icofont.min.css';
import '../../assets/vendor/boxicons/css/boxicons.min.css';
import '../../assets/vendor/venobox/venobox.css';
import '../../assets/vendor/line-awesome/css/line-awesome.min.css';
import '../../assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../../assets/css/style.css';
import React, {Component} from 'react';

class Service extends Component {

    render() {
        return (
            <section style={{ marginTop: '80px' }} className="services section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Skills</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="icon-box">
                                <div className="icon"><i className="las la-basketball-ball" style={{ color: "#ff689b" }}></i></div>
                                <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="icon-box">
                                <div className="icon"><i className="las la-book" style={{ color: "#e9bf06" }}></i></div>
                                <h4 className="title"><a href="">Dolor Sitema</a></h4>
                                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-wow-delay="0.1s">
                            <div className="icon-box">
                                <div className="icon"><i className="las la-file-alt" style={{ color: "#3fcdc7" }}></i></div>
                                <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-wow-delay="0.1s">
                            <div className="icon-box">
                                <div className="icon"><i className="las la-tachometer-alt" style={{ color: "#1cf2e" }}></i></div>
                                <h4 className="title"><a href="">Magni Dolores</a></h4>
                                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-wow-delay="0.2s">
                            <div className="icon-box">
                                <div className="icon"><i className="las la-globe-americas" style={{ color: "#d6ff22" }}></i></div>
                                <h4 className="title"><a href="">Nemo Enim</a></h4>
                                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-wow-delay="0.2s">
                            <div className="icon-box">
                                <div className="icon"><i className="las la-clock" style={{ color: "#4680ff" }}></i></div>
                                <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
                                <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Service;