import React, { Component } from "react";

export default class Product extends Component {
  state = {
    prd: this.props.prd,
  };
  render() {
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted"># {this.state.prd.id}</div>
            <h5 className="pt-5 border-top">{this.state.prd.productName}</h5>
            <div>£ {this.state.prd.price}</div>
          </div>
          <div className="card-footer text-right">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
