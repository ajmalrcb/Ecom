import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    orders: state.orders,
    user: state.username
})

const mapDispatchToProps = (dispatch => {
    return {
        resetUserId: (data) => dispatch({ type: 'USERNAME', payload: '' })
    }
})

class Header extends Component {
    setLabel = () => {
        return (this.props.user.length ? "Sign Out" : "Sign in")
    }
    setRoute = () => {
        return (this.setLabel() === "Sign Out" ? "/" : "/login")
    }
    handleClick = () => {
        if (this.setLabel() === "Sign Out")
            this.props.resetUserId()
    }
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <Link to="/"> <h4>Ecom</h4></Link>
                <section>
                    <Link to="/">
                        <i
                            className="fa fa-2x fa-shopping-cart"
                            style={this.props.orders.length ? { color: "#0f6cd0" } : {}}
                        >
                        </i>
                    </Link>
                    <span><b>{this.props.orders.length}</b></span>
                    <Link to={this.setRoute()} className="mr-4" onClick={e => { this.handleClick(e) }}>{this.setLabel()}</Link>
                    {this.props.user.length === 0 && <Link to="/new" className="mr-4">Register</Link>}
                </section>

            </nav>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
