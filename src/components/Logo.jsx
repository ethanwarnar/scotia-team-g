
import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


import logo from '../logo.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand d-none d-lg-inline-block',
})
    `
`

class Logo extends Component {
    render() {
        return (
            // <Wrapper href="https://sambarros.com">
            <React.Fragment>
                <Wrapper>
                <img
                    alt=""
                    src={logo}
                    width="150px"
                    height="150px"
                            />{'  '}
                    <Link to="/" className="navbar-brand d-none d-lg-inline-block">
                </Link>
                </Wrapper>

            </React.Fragment>

        )
    }
}

export default Logo
