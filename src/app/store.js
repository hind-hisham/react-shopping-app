import {configureStore} from '@reduxjs/toolkit'
import CartReducer from '../page/cartSlice'
import PlantsReducer from '../page/plantsSlice'

export const store=configureStore({
    reducer:{
        cart:CartReducer,
        plants:PlantsReducer
    }
})