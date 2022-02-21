import React from "react"
import App from "next/app"
import Head from "next/head"
import withReduxStore from "../redux/helpers/with-redux-store"
import { Provider } from "react-redux"

import { NotificationContainer } from "react-notifications"

import "antd/dist/antd.css"
import "react-notifications/lib/notifications.css"
import "../public/fonts/icomoon/style.css"
import "../assets/scss/index.scss"

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1.0,initial-scale=1,user-scalable=yes"
          />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <title>My Profile</title>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />

          {/* PWA tags below */}
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#90cdf4" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
        </Head>
        <Provider store={reduxStore}>
          <NotificationContainer />
          <Component {...pageProps} />
        </Provider>
      </>
    )
  }
}

export default withReduxStore(MyApp)
