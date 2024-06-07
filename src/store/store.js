import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../store/feature/todoSlice'

const store = configureStore({
    reducer : {
        todos : todoReducer
    }
})

export default store
