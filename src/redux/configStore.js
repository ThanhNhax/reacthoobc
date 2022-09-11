import { configureStore } from "@reduxjs/toolkit"
import facebookReducer from "./reducers/facebookReducer"
import numberReducer from "./reducers/numberReducer"
import productReudcer from "./reducers/productReudcer"
import userReducer from "./reducers/userReducer"
export const store = configureStore({
    reducer: {
        number: numberReducer,
        facebookReducer: facebookReducer,
        productReducer: productReudcer,
        userReducer: userReducer
    }
})