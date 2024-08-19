import {combineReducers, configureStore} from '@reduxjs/toolkit'
import Product from './slice'

const reducer = combineReducers({
    Product,
})

const store = configureStore({reducer})

export default store;