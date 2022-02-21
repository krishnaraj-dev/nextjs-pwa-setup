import React, { Component } from "react"
import { HeaderWrapper } from "../components/Layout/Header/HeaderWrapper"

export class MainLayout extends Component {
  render() {
    let { children } = this.props
    return (
      <>
        <HeaderWrapper />
        welcome to my page
        {children}
      </>
    )
  }
}
