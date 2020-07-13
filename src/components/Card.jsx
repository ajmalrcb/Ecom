import React, { Component } from 'react'
import '../css/card.css'


export default class Card extends Component {
    render() {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top border-bottom" src={this.props.img_src} alt="Product" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="text-left">{this.props.description}</p>
                    <p className="card-text"><b>{this.props.price}</b></p>
                    <button onClick={e => this.props.onClick(e)} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        )
    }
}

