import React from "react"
import { MainLayout as Layout } from "../layouts"

class ErrorPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container pt-4 pb-5">
          <div className="row text-center">
            <div className="image-block col-8 col-md-5 aligncenter">
              <img src="/images/404.png" alt="" />
            </div>
            <h5 className="text-c2 d-block w-100 pt-5 fw-bold">page-not-found</h5>
            <p className="text-c1 d-block w-100 pt-3 pb-5">description</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ErrorPage
