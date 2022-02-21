import React, { Component } from "react"
import HeaderTop from "./HeaderTop"
import HeaderMain from "./HeaderMain"
import styles from "./styles/header.module.scss"

export class HeaderWrapper extends Component {
  render() {
    return (
      <div className={styles.headerWrapper}>
        <HeaderTop />
        <HeaderMain />
      </div>
    )
  }
}
