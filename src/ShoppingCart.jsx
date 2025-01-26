import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iPhone-8", price: 8900, quantity: 85 },
      { id: 2, productName: "iPhone-SE", price: 5300, quantity: 31 },
      { id: 3, productName: "Samsung-Galarxy-S5", price: 7100, quantity: 49 },
      { id: 4, productName: "Samsung-Galarxy-S10", price: 8200, quantity: 39 },
      { id: 5, productName: "Nikon-3300", price: 3500, quantity: 21 },
      { id: 6, productName: "Nikon-5300", price: 4500, quantity: 33 },
      { id: 7, productName: "Xbox", price: 2000, quantity: 41 },
      { id: 8, productName: "DellMonitor32", price: 1100, quantity: 40 },
      { id: 9, productName: "HPNotebook", price: 3200, quantity: 20 },
      { id: 10, productName: "MacbookPro2", price: 9999, quantity: 10 },
    ],
  };
  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product key={prod.id} prd={prod}>
                <button className="btn btn-primary">Buy Item</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
}
