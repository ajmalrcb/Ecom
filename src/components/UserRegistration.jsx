import React, { Component } from 'react'

export default class UserRegistration extends Component {
  state = { name: '', age: '', gender: '', email: '', password: '', address: '', isRegistered: false }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const mandData = [this.state.name, this.state.password, this.state.email];
    if (mandData.every(this.isValid)) {
      this.setState({ isRegistered: true })

      setTimeout(() => this.props.history.push('/'),3000)
    }
  }

  isValid = (item) => item !== ''

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center my-4">
          <div className="col-md-4 col-sm-10 text-left font-weight-bold">
            {this.state.isRegistered &&
              <div class="alert alert-success" role="alert">
                Successfully registered !! You will be navigated to products page. Enjoy your shopping.
            </div>
            }
            <h4 className="text-center">New User Registration</h4>
            <form>
              <label>Name</label>
              <input type="text" className="form-control" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} required />
              <label>email</label>
              <input type="email" className="form-control" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} required />
              <label>Password</label>
              <input type="password" className="form-control" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} required />
              <label>Age</label>
              <input type="number" className="form-control" name="age" value={this.state.age} onChange={(e) => this.handleChange(e)} />
              <label>Gender</label>
              <select className="form-control" name="gender" value={this.state.gender} onChange={(e) => this.handleChange(e)} >
                <option value="" defaultValue>Select</option>
                <option value="M" >Male</option>
                <option value="F">Female</option>
              </select>
              <label>Address</label>
              <input className="form-control" name="address" value={this.state.address} onChange={(e) => this.handleChange(e)} />
              <button type="submit" className="btn btn-primary w-100 mt-3" onClick={e => { this.handleSubmit(e) }}>Register</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
