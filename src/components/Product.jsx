import React, { Component } from 'react'
import Card from './Card'
import * as Products from '../Response.json';
import { connect } from 'react-redux'

let data = { ...Products.default };

const mapStateToProps = state => ({
    orders: state.orders
})


const mapDispatchToProps = (dispatch => {
    return {
        updateOrders: (data) => dispatch({ type: 'ORDERS', payload: data })
    }
})

class Product extends Component {
    state = { categories: Object.keys({ ...data }), selectedCat: Object.keys({ ...data }) }

    handleChange = (e) => {
        if (e.target.value)
            this.setState({ selectedCat: this.state.categories.filter((cat) => cat === e.target.value) })
        else
            this.setState({ selectedCat: Object.keys({ ...data }) })
    }
    render() {
        return (
            <>
                <div className="row justify-content-center m-2">
                    <div className="col-md-3 col-sm-6">
                        <label>Category</label>
                        <select className="form-control" onChange={(e) => { this.handleChange(e) }} value={this.state.selectedCat}>
                            <option value=''>All</option>
                            {this.state.categories.map((item, i) =>
                                <option value={item} key={i}>{item}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="row justify-content-center m-1 pt-4">
                    <>{
                        this.state.selectedCat.map(
                            category => {
                                return data[category.toString()].map((item, i) => {
                                    return <div className="col-md-3 col-sm-6 m-1" key={i}>
                                        <Card
                                            name={item.name}
                                            img_src={item.img_src}
                                            description={item.description}
                                            price={item.price}
                                            onClick={e => this.props.updateOrders([...this.props.orders, item])}
                                        />
                                    </div>
                                }
                                )
                            }
                        )
                    }
                    </>
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
