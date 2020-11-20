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

class StudentProfile extends Component {
    constructor(props) {
        super(props);
        this.submitProfile = this.submitProfile.bind(this);
    }

    componentWillMount() {
        this.props.setLoggedIn(false)
    }

    submitProfile() {
        this.props.setLoggedIn(true)
    }

    render() {
        if (this.props.isLoggedIn) {
            return <Redirect to='/team-g/dashboard' />
        }

        return (

            <React.Fragment>
                <div style={{ textAlign: "center" }}>
                    <Form>
                        <FormGroup row>
                            <Label style={{ fontFamily: 'Poppins', }} for="exampleText" sm={4}>First Name</Label>
                            <Col sm={8} >
                                <Input
                                    style={{ fontFamily: 'Poppins', }}
                                    type="text"
                                    name="text"
                                    id="exampleText"
                                    placeholder="please enter your first name"
                                    onChange={this.props.updateStudentFirstName}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label style={{ fontFamily: 'Poppins', }} for="exampleText" sm={4}>Last Name</Label>
                            <Col sm={8} >
                                <Input style={{ fontFamily: 'Poppins', }} type="text" name="text" id="exampleText" placeholder="please enter your last name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label style={{ fontFamily: 'Poppins', }} for="exampleEmail" sm={4}>Email</Label>
                            <Col sm={8}>
                                <Input style={{ fontFamily: 'Poppins', }} type="email" name="email" id="exampleEmail" placeholder="please enter your email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label style={{ fontFamily: 'Poppins', }} for="exampleSelect" sm={4}>Co-op Term</Label>
                            <Col sm={4}>
                                <Input style={{ fontFamily: 'Poppins', }} type="select" name="select" id="exampleSelect" placeholder="Term">
                                    <option>Spring</option>
                                    <option>Summer</option>
                                    <option>Fall</option>
                                    <option>Winter</option>
                                </Input>
                            </Col>
                            <Col sm={4}>
                                <Input style={{ fontFamily: 'Poppins', }} type="select" name="select" id="exampleSelect" placeholder="Year">
                                    <option>2020</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label style={{ fontFamily: 'Poppins', }} for="exampleSelect" sm={4}>Graduation Date</Label>
                            <Col sm={4}>
                                <Input style={{ fontFamily: 'Poppins', }} type="select" name="select" id="exampleSelect" placeholder="Term">
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </Input>
                            </Col>
                            <Col sm={4}>
                                <Input style={{ fontFamily: 'Poppins', }} type="select" name="select" id="exampleSelect" placeholder="Year">
                                    <option>2020</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label style={{ fontFamily: 'Poppins', }} for="exampleSelect" sm={4}>Sector</Label>
                            <Col sm={8}>
                                <Input style={{ fontFamily: 'Poppins', }} type="select" name="select" id="exampleSelect" placeholder="please select your desired sector">
                                    <option>Business</option>
                                    <option>Information Technology</option>
                                    <option>Healthcare</option>
                                    <option>Retail</option>
                                    <option>Education</option>
                                    <option>Government</option>
                                    <option>Real Estate</option>
                                    <option>Other</option>
                                </Input>
                            </Col>
                        </FormGroup>


                        <FormGroup row>
                            <Label style={{ fontFamily: 'Poppins', }} for="exampleText" sm={4}>University/College</Label>
                            <Col sm={8}>
                                <Input style={{ fontFamily: 'Poppins', }} type="text" name="text" id="exampleText" placeholder="please enter your place of education" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label style={{ fontFamily: 'Poppins', }} for="exampleText" sm={4}>About</Label>
                            <Col sm={8}>
                                <Input style={{ fontFamily: 'Poppins', }} type="text" name="text" id="exampleText" placeholder="please tell us about yourself" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col >
                                <button className='button'
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
)(StudentProfile)

