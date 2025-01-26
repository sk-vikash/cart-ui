import React, { Component } from "react";

export default class CustomerList extends Component {
  state = {
    title: "Earnings",
    total: 1001,
    customers: [
      {
        id: 1,
        cname: "Jack",
        location: "Manchester",
        contact: 123123,
        pic: "https://picsum.photos/id/1011/60",
      },
      {
        id: 2,
        cname: "Jill",
        location: "Leeds",
        contact: 232323,
        pic: "https://picsum.photos/id/1012/60",
      },
      {
        id: 3,
        cname: "Mike",
        location: "London",
        contact: 990882,
        pic: "https://picsum.photos/id/1013/60",
      },
      {
        id: 4,
        cname: "Jame",
        location: "Glassgow",
        contact: 666234,
        pic: "https://picsum.photos/id/1014/60",
      },
      {
        id: 5,
        cname: "Dave",
        location: "Liverpool",
        contact: 456554,
        pic: "https://picsum.photos/id/1015/60",
      },
      {
        id: 6,
        cname: "Victor",
        location: "Newcastle",
        contact: null,
        pic: "https://picsum.photos/id/1016/60",
      },
      {
        id: 7,
        cname: "Jon",
        location: "Stockport",
        contact: 4343453,
        pic: "https://picsum.photos/id/1018/60",
      },
    ],
  };

  render() {
    return (
      <>
        {/* <h4 className="border-bottom m-1 p-1">
          {this.state.title}
          <span>{this.state.total}</span>
          <button className="btn btn-primary" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4> */}
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Locaation</th>
              <th>Contact</th>
              <th>Picture</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>{this.getCustomers()}</tbody>
        </table>
      </>
    );
  }

  onRefreshClick = () => {
    this.setState({
      total: 1011,
    });
  };

  getPhoneNumber = (contact) => {
    return contact ? contact : <div className="bg-warning p-2">No phone</div>;
  };

  onChangePicuteClick = (cust) => {
    console.log(cust);
  };

  getCustomers = () => {
    return this.state.customers.map((cust) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>{cust.cname}</td>
          <td>{cust.location}</td>
          <td>{this.getPhoneNumber(cust.contact)}</td>
          <td>
            <div>
              <img src={cust.pic}></img>
            </div>
          </td>
          <td>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => {
                this.onChangePicuteClick(cust);
              }}
            >
              Get Details
            </button>
          </td>
        </tr>
      );
    });
  };
}
