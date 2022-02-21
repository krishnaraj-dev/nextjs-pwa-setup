import axios from "axios"
import ApiList from "./ApiList"

const axiosInstance = axios.create()
axiosInstance.isCancel = axios.isCancel

const logout = () => {
  axiosInstance.defaults.headers.common["access_key"] = ""
  localStorage.clear()
  history.push("/")
}

const getAccessToken = () => {
  const urlParams = new URLSearchParams(location.search)
  return localStorage.getItem("access_key")
    ? localStorage.getItem("access_key")
    : urlParams.get("access-key")
}

export var api = async function ({
  api,
  method = "get",
  body,
  status = false,
  baseURL = "normal",
  ReqCancelSource = { token: null },
  isGetWithAuth = true,
}) {
  return await new Promise((resolve, reject) => {
    let requestObj = {
      method,
      url: `${getServiceUrl(baseURL)}${api}`,
      timeout: 30000,
      cancelToken: ReqCancelSource.token,
      data: body ? body : "",
    }

    if (isGetWithAuth) {
      let access_key = getAccessToken()
      requestObj.headers = {
        "access-key": `${access_key}`,
      }
    }

    axiosInstance(requestObj)
      .then((response) => {
        resolve(statusHelper(status, response))
      })
      .catch((error) => {
        try {
          if (axiosInstance.isCancel(error)) {
            console.log("Request canceled", error.message)
            return { status: 700 }
          } else {
            if (error.response) {
              reject(statusHelper(status, error.response))
            } else {
              reject(error)
            }
          }
        } catch (err) {
          reject(err)
        }
      })
  })
}

var statusHelper = (status, dataParam) => {
  let data = dataParam.data
  if (data.status == 401 || data.status == 403) {
    logout()
  }
  if (status) {
    return {
      status: data.status,
      ...data,
    }
  } else {
    return {
      message: "Unable to Reach the server",
      ...data,
    }
  }
}

let getServiceUrl = (baseURL) => {
  let finalURL = ""

  switch (baseURL) {
    case "normal":
      finalURL = ApiList.baseUrl + "/normal"
      break
    default:
      finalURL = ApiList.baseUrl
      break
  }

  return finalURL
}
