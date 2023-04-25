import React from "react"
import MenuItem from "../MenuItem"
export default class Menu extends React.Component {
  render() {
    return (
      <div><h1>{this.props.menuName} Menu</h1>
      {
        this.props.menuItems.map((item) => (
          <MenuItem {...item}></MenuItem>
        ))
      }
      </div>
      )
    }
  }