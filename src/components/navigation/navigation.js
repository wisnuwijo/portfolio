import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/icofont/icofont.min.css';
import '../../assets/vendor/boxicons/css/boxicons.min.css';
import '../../assets/vendor/venobox/venobox.css';
import '../../assets/vendor/line-awesome/css/line-awesome.min.css';
import '../../assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../../assets/css/style.css';
import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../../assets/img/logo.png';

class Navigation extends Component {

    render() {
        return (
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <a href="index.html" className="logo mr-auto">
                        <img src={Logo} alt="" className="img-fluid" />
                    </a>                              

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li>
                                <NavLink activeClassName="nav-active" exact to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="nav-active" exact to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="nav-active" exact to="/experiences">Experiences</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="nav-active" exact to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="nav-active" exact to="/skills">Skills</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="nav-active" exact to="/education">Education</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Navigation;