import React, { Component, useState } from "react";
import { render } from "react-dom";
import { StudentLanding, RecruiterLanding, Logo } from '../components'
import styled from 'styled-components'
import logo from '../logo.png'
import { connect } from 'react-redux'


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
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    FormGroup,
    Label,
    CustomInput,
    ButtonGroup
} from 'reactstrap';

import { MdLocalCafe, MdAdd } from "react-icons/md"


import { isStudent, isProfessional } from '../redux/actions.js'
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
        isStudent: dashboard.isStudent,
        isProfessional: dashboard.isProfessional
    }
}

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "React",
            showStudentLanding: true,
            showRecruiterLanding: false,
            isOpen: false,
            setIsOpen: false
        };
    }

    componentWillMount() {
        this.props.isLoggedIn(false)
    }

    render() {
        return (
            <React.Fragment>
                <NavContainer>
                    <Navbar style={{ height: "100px", backgroundColor: "#e9ecef" }} fixed="top" light expand="md">
                        <Container>
                            <NavbarBrand style={{ fontFamily: "Poppins', sans-serif;", fontSize: "23px" }} href="/">
                                <Logo />
                                FitPal
                                </NavbarBrand>
                            <NavbarToggler onClick={() => this.setState({ isOpen: !this.state.isOpen })} />
                            <Collapse style={{ textAlign: "center" }} isOpen={this.state.isOpen} navbar>
                                <Col >
                                    <Nav style={{ backgroundColor: '#00000' }} className="mr-auto right" navbar>
                                        <Col sm="7"></Col>
                                        {/* <ButtonGroup >
                                            <button
                                                autofocus
                                                className="nav-button"
                                                style={{
                                                    borderColor: "#fff3e2",
                                                    backgroundColor: "#fff",
                                                    width: "125px",
                                                    fontSize: "18px",
                                                    outline: "none",
                                                    margin: "5px 25px"
                                                }}
                                            >
                                                Students
                                            </button>
                                        </ButtonGroup> */}
                                    </Nav>
                                </Col>
                            </Collapse>
                        </Container>
                    </Navbar>
                </NavContainer>
                <Container>
                    <div>
                        <StudentLanding />
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isLoggedIn: (bool) => dispatch({ type: "IS_LOGGED_IN", payload: bool })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)