import React, { Component } from 'react'
import styled from 'styled-components'
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
    CustomInput
} from 'reactstrap';
import { connect } from 'react-redux'

import { Redirect } from "react-router-dom"
import ben from './ben.jpg';
import harvey from './harvey.jpg';
import jess from './jess.jpg';
import far from './far.jpg';
import ste from './ste.jpg';
import tiff from './tiff.jpg';
import maddy from './maddy.jpg';
import ethan from './ethan.jpg';
import brian from './brian.jpg';

import { Calendar, NavBar } from '../components'

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
        isLoggedIn: dashboard.isLoggedIn,
        eventArray: dashboard.eventArray.array,
        points: dashboard.points
    }
}

class StudentHome extends Component {

    render() {

        console.log(this.props.state)
        return (
            <React.Fragment>
                <Row>
                    <Col sm="6">
                        <Card body inverse style={{ justifyContent: "center", borderRadius: "18px", height: "60px", backgroundColor: "#495057", margin: "15vh 0px 0px", }} >
                            <CardText style={{ fontFamily: 'Poppins', fontSize: "35px", textAlign: "center" }}>Welcome back, {this.props.firstName}!</CardText>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card body outline style={{ borderRadius: "18px", justifyContent: "center", height: "60px", borderColor: "#495057", margin: "15vh 0px 0px", borderWidth: "3px" }}>
                            <CardText style={{ fontFamily: 'Poppins', fontSize: "22px", textAlign: "center" }}>My Events: {this.props.eventArray.length} </CardText>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card body outline style={{ borderRadius: "18px", justifyContent: "center", height: "60px", borderColor: "#495057", margin: "15vh 0px 0px", borderWidth: "3px" }}>
                            <CardText style={{ fontFamily: 'Poppins', fontSize: "22px", textAlign: "center" }}>My points: {this.props.points} </CardText>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        <CardText style={{ fontFamily: 'Poppins', margin: "25px 0px 20px", fontSize: "25px" }}>Upcoming Events</CardText>
                        <Row>


                            <Col sm="6">
                                <Card body outline style={{ borderRadius: "18px", height: "150px", borderColor: "#495057", margin: "0px ", borderWidth: "3px" }} >
                                    {(this.props.eventArray.length >= 1)
                                        ? (
                                            <div>
                                                <CardText style={{ fontFamily: 'Poppins', fontSize: "20px", }}>{this.props.eventArray[0].name} by {this.props.eventArray[0].host}</CardText>
                                                <CardText style={{ fontFamily: 'Poppins', fontSize: "14px", }}>{this.props.eventArray[0].date} | {this.props.eventArray[0].time}</CardText>
                                            </div>
                                        )
                                        :
                                        (
                                            <CardText style={{ fontFamily: 'Poppins', fontSize: "20px", }}>Please add an event</CardText>
                                        )
                                    }
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body outline style={{ borderRadius: "18px", height: "150px", borderColor: "#495057", margin: "0px ", borderWidth: "3px" }} >
                                    {(this.props.eventArray.length >= 2)
                                        ? (
                                            <div>
                                                <CardText style={{ fontFamily: 'Poppins', fontSize: "20px", }}>{this.props.eventArray[1].name} by {this.props.eventArray[1].host}</CardText>
                                                <CardText style={{ fontFamily: 'Poppins', fontSize: "14px", }}>{this.props.eventArray[1].date} | {this.props.eventArray[1].time}</CardText>
                                            </div>
                                        )
                                        :
                                        (
                                            <CardText style={{ fontFamily: 'Poppins', fontSize: "20px", }}>Please add an event</CardText>

                                        )
                                    }
                                </Card>
                            </Col>
                        </Row>

                        <CardText style={{ fontFamily: 'Poppins', margin: "25px 0px 20px", fontSize: "25px" }}>Trending Instructors</CardText>


                        <Row>
                            <Col sm="4">
                                <div style={{ height: "130px", justifyContent: "center", textAlign: "center" }}>
                                    <img style={{ height: "100%", width: "85%", borderRadius: "2000px"}} src = {far}/>
                                </div>
                            </Col>

                            <Col sm="4">
                                <div style={{ height: "130px", justifyContent: "center", textAlign: "center" }}>
                                    <img style={{ height: "100%", width: "85%", borderRadius: "2000px"}} src = {ste} />
                                </div>
                            </Col>

                            <Col sm="4">
                                <div style={{ height: "130px", justifyContent: "center", textAlign: "center" }}>
                                    <img style={{ height: "100%", width: "85%", borderRadius: "2000px"}} src = {jess} />
                                </div>
                            </Col>

                        </Row>

                        <CardText style={{ fontFamily: 'Poppins', margin: "25px 0px 20px", fontSize: "25px" }}>Friends</CardText>
                        <Row>            
                            <Col sm="4">
                                <div style={{ height: "130px", justifyContent: "center", textAlign: "center" }}>
                                    <img style={{ height: "100%", width: "85%", borderRadius: "2000px"}} src = {ben}/>
                                </div>
                            </Col>
                            <Col sm="4">
                                <div style={{ height: "130px", justifyContent: "center", textAlign: "center" }}>
                                    <img style={{ height: "100%", width: "85%", borderRadius: "2000px"}} src = {harvey} />  
                                </div>
                            </Col>
                            <Col sm="4">
                                <div style={{ height: "130px", justifyContent: "center", textAlign: "center" }}>
                                    <img style={{ height: "100%", width: "85%", borderRadius: "2000px"}} src = {tiff} />
                                </div>
                            </Col>
                            <Col sm="4">
                                <div style={{ height: "130px", justifyContent: "center", textAlign: "center" }}>
                                    <img style={{ height: "100%", width: "85%", borderRadius: "2000px"}} src = {maddy} />
                                </div>
                            </Col>
                            <Col sm="4">
                                <div style={{ height: "130px", justifyContent: "center", textAlign: "center" }}>
                                    <img style={{ height: "100%", width: "85%", borderRadius: "2000px"}} src = {ethan} />
                                </div>
                            </Col>
                            <Col sm="4">
                                <div style={{ height: "130px", justifyContent: "center", textAlign: "center" }}>
                                    <img style={{ height: "100%", width: "85%", borderRadius: "2000px"}} src = {brian} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="6">
                        <Card body outline style={{ borderRadius: "18px", borderColor: "#495057", margin: "25px 0px 50px", borderWidth: "3px" }}>
                            <CardText style={{ fontFamily: 'Poppins', fontSize: "22px", textAlign: "center" }}>HELLOOOO</CardText>
                        </Card>
                        <Card body outline style={{ borderRadius: "18px", borderColor: "#495057", margin: "25px 0px 50px", borderWidth: "3px" }}>
                            <CardText style={{ fontFamily: 'Poppins', fontSize: "22px", textAlign: "center" }}>THIS</CardText>
                        </Card>
                        <Card body outline style={{ borderRadius: "18px", borderColor: "#495057", margin: "25px 0px 50px", borderWidth: "3px" }}>
                            <CardText style={{ fontFamily: 'Poppins', fontSize: "22px", textAlign: "center" }}>IS</CardText>
                        </Card>
                        <Card body outline style={{ borderRadius: "18px", borderColor: "#495057", margin: "25px 0px 50px", borderWidth: "3px" }}>
                            <CardText style={{ fontFamily: 'Poppins', fontSize: "22px", textAlign: "center" }}>A</CardText>
                        </Card>
                        <Card body outline style={{ borderRadius: "18px", borderColor: "#495057", margin: "25px 0px 50px", borderWidth: "3px" }}>
                            <CardText style={{ fontFamily: 'Poppins', fontSize: "22px", textAlign: "center" }}>SAMPLE</CardText>
                        </Card>
                        <Card body outline style={{ borderRadius: "18px", borderColor: "#495057", margin: "25px 0px 50px", borderWidth: "3px" }}>
                            <CardText style={{ fontFamily: 'Poppins', fontSize: "22px", textAlign: "center" }}>WOOHHOO</CardText>
                        </Card>
                        <Calendar/>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentHome) 