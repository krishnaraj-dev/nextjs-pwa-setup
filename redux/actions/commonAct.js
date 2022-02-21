import { CommonActionType } from "../actionTypes"
import { commonApi } from "../../services/apiVariables"

// export const getDetails = (body) => (dispatch, getState, { api, Toast }) => {
//   return new Promise((resolve, reject) => {
//     api(commonApi.getDetails)
//       .then((data) => {
//         dispatch({ type: CommonActionType.getDetails, payload: data })
//         resolve(data);
//       })
//       .catch(() => {
//         reject(true)
//       })
//   })
// }

// export const postDetails = (body) => (dispatch, getState, { api, Toast }) => {
//   return new Promise((resolve, reject) => {
//     api({ ...commonApi.postDetails, body })
//       .then((data) => {
//         resolve(data)
//       })
//       .catch(() => {
//         reject(true)
//       })
//   })
// }
