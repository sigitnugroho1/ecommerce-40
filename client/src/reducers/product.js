import { ADD_DATA, LOAD_PRODUCT_SUCCESS, LOAD_PRODUCT_FAILURE, ADD_PRODUCT_SUCCESS } from '../constants/ActionTypes';


export default function data(state = [], action) {

    switch (action.type) {

        case LOAD_PRODUCT_SUCCESS:
            return action.products

        case LOAD_PRODUCT_FAILURE:
            return state

        case ADD_DATA:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    rate: action.rate,
                    description: action.description,
                    price: action.price,
                    brand: action.brand,
                    detailProduct: action.detailProduct
                }
            ]

        case ADD_PRODUCT_SUCCESS:
            let addData = state
            let add = addData.map(x => {
                if (x.id === action.id) {
                    x.title = action.title
                    x.rate = action.rate
                    x.description = action.description
                    x.price = action.price
                    x.brand = action.brand
                    x.detailProduct = action.detailProduct
                }
                return x
            })
            return add

        default:
            return state

    }
}