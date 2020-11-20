import React, { Component } from 'react'
import styled from 'styled-components'
import { NavBar } from '../components'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"

import { motion, AnimatePresence } from "framer-motion"


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
import { addEvent } from '../redux/actions'

import events from '../data/events'

const Container = styled.div.attrs({
    className: 'container',
})
    `
`
const Space = styled.div.attrs({
    className: 'container',
})
    `
    height:45px;
`

const Events = styled.div.attrs({
})
    `
    width:100%;
`

const mapStateToProps = state => {
    const { dashboard } = state
    return {
        eventArray: dashboard.eventArray.array,
        state: dashboard,
        isLoggedIn: dashboard.isLoggedIn,
    }
}

class StudentResources extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: null
        };
    }




    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
    }

    render() {


        const items = events.filter((x) => {
            if (this.state.search == null)
                return x
            else if (x.name.toLowerCase().includes(this.state.search.toLowerCase()) || x.company.toLowerCase().includes(this.state.search.toLowerCase()) || x.host.toLowerCase().includes(this.state.search.toLowerCase())) {
                return (x)
            }
        }).map(x => {
            return (
                <Col sm="4">
                    <AnimatePresence >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>

                            <Card body outline style={{ height: "200px", justifyContent: "center", borderWidth: "3px", borderRadius: "18px", borderColor: "#495057", margin: "30px 0px 0px" }} >
                                {/* <div style={{ textAlign: "left" }}> */}
                                <CardTitle style={{ textAlign: "center", fontFamily: 'Poppins', fontWeight: "bold", fontSize: "19px" }}>{x.name}</CardTitle>

                                <CardText style={{ textAlign: "center", fontFamily: 'Poppins', fontSize: "16px" }}>{x.host} - {x.company}</CardText>
                                <CardText style={{ textAlign: "center", fontFamily: 'Poppins', fontSize: "16px" }}>{x.date} | {x.time}</CardText>
                                {/* <CardText style={{ fontSize: "17px" }}>{x.time}</CardText> */}
                                {/* </div> */}
                                <div style={{ textAlign: "center" }}>
                                    <form target="_blank">
                                        <button className="button"
                                            // formAction={x.link}
                                            style={{ margin: "5px 0px 0px", color: "black", borderColor: "#495057", width: "125px", fontSize: "15px", textAlign: "center" }}

                                            onClick={() => this.props.addNewEvent(x)}
                                        >Sign Up
                                    </button>
                                    </form>
                                </div>
                            </Card>
                        </motion.div>
                    </AnimatePresence>


                </Col>
            )
        }
        )
        console.log(this.props.state)
        console.log(this.props.eventArray)

        return (
            <React.Fragment>

                <Row>
                    <Col sm="4">
                        <Card body inverse style={{ borderColor: "#495057", justifyContent: "center", borderRadius: "18px", height: "50px", backgroundColor: "#495057", margin: "15vh 0px 0px", }} >
                            <CardText style={{ fontFamily: 'Poppins', fontSize: "21px", textAlign: "center" }}>
                                {this.props.eventArray.length} events added to calendar.
                                </CardText>
                        </Card>
                    </Col>
                    <Col sm="8">
                        <div style={{ margin: "15vh 0px 0px" }}>
                            <Input onChange={(e) => this.searchSpace(e)} style={{ fontFamily: 'Poppins', borderRadius: "18px", borderWidth: "3px", textAlign: "center", color: "black", fontSize: "20px", height: "50px", borderColor: "#495057", }} type="text" name="email" id="exampleEmail" placeholder="search by event name, company or host" />
                        </div>
                    </Col>
                </Row>


                <Events style={{ marginTop: "15px", height: "1000px", overflowY: "auto" }}>
                    <Row>
                        {items}
                    </Row>
                </Events>

            </React.Fragment>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewEvent: (event) => dispatch(addEvent(event)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentResources)

