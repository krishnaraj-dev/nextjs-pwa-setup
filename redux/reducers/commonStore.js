import { CommonActionType } from "../actionTypes"

const initialState = {
  // details: {},
}

export default (state = Object.assign({}, initialState), { type, payload }) => {
  switch (type) {
    // case CommonActionType.getDetails:
    //   return {
    //     ...state,
    //     details: payload,
    //   }
    default:
      return state
  }
}
