import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { reducers } from "../reducers"
import thunkMiddleware from "redux-thunk"
import { api } from "../../services/api"
import { Toast } from "../../services/toast"

const middleware = applyMiddleware(thunkMiddleware.withExtraArgument({ api, Toast }))

export function initializeStore(initialState) {
  return createStore(reducers, initialState, composeWithDevTools(middleware))
}
