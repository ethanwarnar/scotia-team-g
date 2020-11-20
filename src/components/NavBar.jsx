import React, { useState, Component } from 'react'
import styled from 'styled-components'
import logo from '../logo.png'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Col,
    Row,
    Button
} from 'reactstrap';

import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"

import { Logo } from '../components'


import '../style/main.scss'

import { MdPerson, MdLocalCafe, MdDashboard, MdEvent, MdAccountCircle, MdGroup, MdAdd } from "react-icons/md"

const Container = styled.div.attrs({
    className: 'container',
})
    `
`
const NavContainer = styled.div.attrs({
    className: 'container',
})``


const mapStateToProps = state => {
    const { dashboard } = state
    return {
        state: dashboard,
        firstName: dashboard.student.firstName,
        isLoggedIn: dashboard.isLoggedIn,
        eventArray: dashboard.eventArray.array
    }
}
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React",
            isOpen: false,
            setIsOpen: false
        };
    }



    render() {

        if (this.props.isLoggedIn == false) {
            return <Redirect to='/' />
        }
        return (

            <NavContainer>

                <Navbar style={{ height: "100px", backgroundColor: "#e9ecef" }} fixed="top" light expand="md">
                    <Container>

                        <NavbarBrand style={{ fontSize: "23px" }} href="/team-g/dashboard">
                            <Logo />
                            FitPal
                        </NavbarBrand>
                        <NavbarToggler onClick={() => this.setState({ isOpen: !this.state.isOpen })} />

                        <Col></Col>
                        <Collapse style={{ textAlign: "center" }} isOpen={this.state.isOpen} navbar>

                            <Col>
                                <Nav style={{ backgroundColor: '#00000' }} className="mr-auto right" navbar>
                                    {/* <div style={{ width: "30vh" }} /> */}
                                    <Col sm="2"></Col>
                                    <NavItem style={{ margin: "10px 25px " }}>
                                        <MdDashboard href="/team-g/dashboard" style={{ width: "30", height: "30" }} />
                                        <a className="nav-button" style={{ textDecoration: "none", fontFamily: 'Poppins', fontSize: "17px" }} href="/team-g/dashboard">Home</a>
                                    </NavItem>
                                    <NavItem style={{ margin: "10px 25px " }}>
                                        <MdEvent href="/team-g/resources" style={{ width: "30", height: "30" }} />
                                        <a className="nav-button" style={{ textDecoration: "none", fontFamily: 'Poppins', fontSize: "17px" }} href="/team-g/resources">Exercises </a>
                                    </NavItem>
                                    <NavItem>
                                        <button className="logout-button"
                                            style={{ fontSize: "17px", marginLeft: "30px", margin: "10px", color: "black", borderColor: "#495057", width: "100px" }}
                                            onClick={() => (this.props.setLoggedIn())}
                                        >
                                            Log-out
                                    </button>
                                    </NavItem>
                                </Nav>
                            </Col>
                        </Collapse>
                    </Container>
                </Navbar>
            </NavContainer>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoggedIn: () => dispatch({ type: "IS_LOGGED_IN", payload: false })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar) 