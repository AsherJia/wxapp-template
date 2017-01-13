import { createStore, applyMiddleware, compose } from './vendors/redux.js';
import thunk from './vendors/redux-thunk';
import createLogger from './vendors/redux-logger.js';

import rootReducer from './pages/reducers.js'

const finalCreateStore = compose(
  applyMiddleware(thunk),
  applyMiddleware(createLogger())
)(createStore)

function configureStore(initialState) {
    return finalCreateStore(rootReducer, initialState)
}

export default configureStore()
