import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"

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

import { getStudentFirstName } from '../redux/actions.js'


const Container = styled.div.attrs({
    className: 'container',
})
    `
`

const mapStateToProps = state => {
    const { dashboard } = state
    return {
        state: dashboard,
        firstName: dashboard.student.firstName,
        isLoggedIn: dashboard.isLoggedIn
    }
}

class EventForm extends Component {
    constructor(props) {
        super(props);
        this.submitProfile = this.submitProfile.bind(this);
    }

    submitProfile() {
    }
    render() {

        return (
            <React.Fragment>
                <div style={{ textAlign: "center" }}>
                    <Form>
                        <FormGroup row>
                            <Label style={{ fontFamily: 'Poppins', }} for="exampleText" sm={4}>Event Name</Label>
                            <Col sm={8} >
                                <Input style={{ fontFamily: 'Poppins', }} type="text" name="text" id="exampleText" placeholder="please enter the event name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label style={{ fontFamily: 'Poppins', }} for="exampleText" sm={4}>Host</Label>
                            <Col sm={8} >
                                <Input style={{ fontFamily: 'Poppins', }} type="text" name="text" id="exampleText" placeholder="please enter the event host" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label style={{ fontFamily: 'Poppins', }} for="exampleText" sm={4}>Company</Label>
                            <Col sm={8} >
                                <Input style={{ fontFamily: 'Poppins', }} type="text" name="text" id="exampleText" placeholder="please enter the event company" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label style={{ fontFamily: 'Poppins', }} for="exampleText" sm={4}>Date</Label>
                            <Col sm={8} >
                                <Input style={{ fontFamily: 'Poppins', }} type="text" name="text" id="exampleText" placeholder="ex. May 14, 2020" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label style={{ fontFamily: 'Poppins', }} for="exampleText" sm={4}>Time</Label>
                            <Col sm={8} >
                                <Input style={{ fontFamily: 'Poppins', }} type="text" name="text" id="exampleText" placeholder="ex. 3PM - 5PM" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label style={{ fontFamily: 'Poppins', }} for="exampleText" sm={4}>Calendly Link</Label>
                            <Col sm={8} >
                                <Input style={{ fontFamily: 'Poppins', }} type="text" name="text" id="exampleText" placeholder="please enter event Calendly link" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col >
                                <button className="button"
                                    style={{ margin: "2vh 0px 0px", color: "black", borderColor: "#FFA824", width: "125px" }}
                                    onClick={() => this.submitProfile(true)}
                                >Submit
                                </button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStudentFirstName: (event) => dispatch({ type: "GET_STUDENT_FIRST_NAME", payload: event.target.value }),
        setLoggedIn: (bool) => dispatch({ type: "IS_LOGGED_IN", payload: bool }),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventForm)