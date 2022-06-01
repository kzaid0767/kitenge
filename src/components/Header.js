import React, { Component }  from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import VitengeLogo from '../app/assets/images/vitengelogo.png';



class HeaderComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);

    }

    
    toggleNav() {
        this.setState ({
            isNavOpen: !this.state.isNavOpen,
            
        });
    }

    toggleModal() {
        this.setState ({
            isModalOpen: !this.state.isModalOpen,
            
        });
    }

    render() {
    return (
        <React.Fragment>
            <div className='jumbotron jumbotron-fluid'>
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-sm-3 col-md-2 align-self-center">
                                <img  src={VitengeLogo} className="img-fluid mr-5 logo" alt="a logo of vitenge fashions" />
                            </div>
                            <div className="col ml-5">
                                <h1>Vitenge Fashions Online</h1>
                                <h2>Authentic Styles From Tanzania</h2>
                            </div>
                            <div className="col-md-4 col-xl-2 mt-4 ">
                                <a role="button" href="tel:+255718367218">
                                    <button type="button"  className="btn btn-outline-success btn-lg text-dark ml-5 "> Call Us</button>
                                </a>
                            </div>
                        
                        </div>
                    </div>
                </div>

                <Navbar dark sticky="top" expand='md'>
                    <div className="container">
                        <NavbarBrand className='mr-auto' href="/"><img src="/assets/images/vitengelogo.png" height='30' width='30' alt='NuCamp Logo'/></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>
                                        <i className ='fa fa-home fa-lg'/> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/mens'>
                                        <i className='fa fa-male fa-lg'/> Mens
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/womens'>
                                        <i className='fa fa-female fa-lg'/> Womens
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/kids'>
                                        <i className='fa fa-child fa-lg'/> Kids
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/wedding'>
                                        <i className='fa fa-ring fa-lg'/> Wedding Collection
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/couples'>
                                        <i className='fa fa-venus-mars fa-lg'/> Couples Collection
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/womenbusiness'>
                                        <i className='fa fa-venus fa-lg'/> Women Business Collection
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className='navbar-text ml-auto'>
                                <Button outline onClick={this.toggleModal}>
                                    <i className='fa fa-sign-in fa-lg'/> Login
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>



        </React.Fragment>
        )
    }
}

export default HeaderComponent