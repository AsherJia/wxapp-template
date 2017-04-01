import { createStore, applyMiddleware, compose } from './vendors/redux'
import thunk from './vendors/redux-thunk'
import createLogger from './vendors/redux-logger'

import rootReducer from './pages/reducers'

const finalCreateStore = compose(
    applyMiddleware(thunk),
    applyMiddleware(createLogger()),
)(createStore)

function configureStore(initialState) {
    return finalCreateStore(rootReducer, initialState)
}

export default configureStore()
