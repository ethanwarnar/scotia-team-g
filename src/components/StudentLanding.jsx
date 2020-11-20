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
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    FormGroup,
    Label,
    CustomInput,
    Input,
    Form,
    FormText
} from 'reactstrap';

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import StudentProfile from './StudentProfile'

import { MdLocalCafe, MdAdd } from "react-icons/md"


const Container = styled.div.attrs({
    className: 'container',
})
    `
`



class StudentLanding extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        console.log("hello");
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col sm="5">
                        <h1 style={{ fontFamily: 'Poppins', margin: "38vh 0px 0px", fontSize: "70px", }}>
                            Rediscover your health.
                            </h1>
                        <CardText style={{ fontFamily: 'Poppins', margin: "5vh 0px 0px", fontSize: "30px", }}>
                            Get connected. Stay Inspired. Get healthy.
                            </CardText>
                        <div style={{ textAlign: "center" }}>
                            <button className="button" onClick={() => this.toggleModal()}
                                style={{ margin: "5vh 0px 0px", color: "black", borderColor: "#FFA824", width: "125px" }}
                            >
                                Register
                            </button>
                        </div>
                    </Col>
                    <Col sm="7">
                        <div style={{ height: "250px", width: "100%", justifyContent: "center", textAlign: "center", margin: "10vh 0px 0px" }}>
                            <img
                                alt=""
                                src={logo}
                                width="750px"
                                height="750px"
                            />{'  '}
                        </div>
                    </Col>
                </Row>
                <Modal style={{ top: "15vh", width: "550px" }}
                    isOpen={this.state.showModal}
                    toggle={() => this.toggleModal()}
                >
                    <ModalHeader style={{ fontFamily: 'Poppins' }}>
                        Profile
                    </ModalHeader>
                    <ModalBody style={{ height: "400px", overflowY: "auto" }}>
                        <div style={{ overflow: "scoll" }}>
                            <StudentProfile style={{ overflow: "scroll" }} />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}



export default StudentLanding