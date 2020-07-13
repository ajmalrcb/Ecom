import React, { Component } from 'react';
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch => {
    return {
        dispatchUserId: (data) => dispatch({ type: 'USERNAME', payload: data })
    }
})

class Login extends Component {
    state = { email: '', password: '' }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleClick = (e) => {
        if (this.state.email && this.state.password) {
            this.props.dispatchUserId(this.state.email)
            this.props.history.push('/')
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center my-4">
                    <div className="col-md-4 col-sm-10  text-left font-weight-bold">
                        <h4 className="text-center">New User Registration</h4>
                        <form>
                            <label>email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email" value={this.state.email}
                                onChange={(e) => this.handleChange(e)}
                                required />
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={this.state.password}
                                onChange={(e) => this.handleChange(e)}
                                required />
                            <button type="submit" className="btn btn-primary w-100 mt-3" onClick={e => this.handleClick(e)}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Login)
