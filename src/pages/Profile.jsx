import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { isStudent, isProfessional } from '../redux/actions.js'

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

import { NavBar, StudentEditProfile } from '../components'

const mapStateToProps = state => {
    const { dashboard } = state
    return {
        isStudent: dashboard.isStudent,
        isProfessional: dashboard.isProfessional
    }
}

const Container = styled.div.attrs({
    className: 'container',
})
    `
`

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
            <NavBar/>
                <Container >
                    <div style={{
                        position: 'absolute', left: '50%',
                        transform: 'translate(-50%)',
                    }}>
                        <StudentEditProfile />
                    </div>
                </Container>
            </React.Fragment>
        )
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
)(Profile)