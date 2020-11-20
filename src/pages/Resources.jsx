import React, { Component } from 'react'
import styled from 'styled-components'
import { StudentResources, NavBar } from '../components'
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

class Resources extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: null
        };
    }

    render() {


        console.log(this.props.state)
        console.log(this.props.eventArray)

        return (
            <React.Fragment>
                <NavBar/>
                <Container>
                    <StudentResources />
                </Container>
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
)(Resources)

