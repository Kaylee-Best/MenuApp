import React from "react"

export default class MenuItem extends React.Component {
  render() {
    return (
      <><>
        <div class="menu-item" id= {'menu-item ' + this.props.itemId}>
        <span>${this.props.itemPrice}</span>
        <h2>{this.props.itemName}</h2>
        <p>{this.props.itemDescription}</p>
        <button>Add to Cart</button></div></>
        </>
    );

  }
}