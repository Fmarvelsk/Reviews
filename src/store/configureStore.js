import { createStore, combineReducers, compose } from 'redux'
import authModalReducer from './reducers/authModalReducer'

const rootReducer = combineReducers({
    authModalReducer
})

let composeEnhancers = compose

if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}


const configureStore = () => {
    return createStore(rootReducer, composeEnhancers())
}

export default configureStore
