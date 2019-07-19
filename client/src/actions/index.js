import * as  types from "../constants/ActionTypes"
import request from 'superagent'


const SERVER_URL = 'http://localhost:3001/api/'


export const addData = (id, title, rate, description, price, brand, detailProduct) => {
    return { type: types.ADD_DATA, id, title, rate, description, price, brand, detailProduct }
}

const addProductFailure = () => {
    return { type: types.ADD_PRODUCT_FAILURE }
}

const addProductSuccess = (product) => {
    return { type: types.ADD_PRODUCT_SUCCESS, product }
}


export const addForm = (title, rate, description, price, brand, detailProduct) => {
    let id = Date.now()
    return dispatch => {
        dispatch(addData(id, title, rate, description, price, brand, detailProduct))
        return request
            .post(`${SERVER_URL}products`)
            .type('form')
            .send({ id: id })
            .send({ title: title })
            .send({ rate: rate })
            .send({ description: description })
            .send({ price: price })
            .send({ brand: brand })
            .send({ detailProduct: detailProduct })
            .end((err, res) => {
                if (err) {
                    dispatch(addProductFailure())
                } else {
                    dispatch(addProductSuccess(res.body.data))

                }
            })
    }
}


const loadDataFailure = () => {
    return { type: types.LOAD_PRODUCT_FAILURE }
}

const loadDataSuccess = (products) => {
    return { type: types.LOAD_PRODUCT_SUCCESS, products }
}

export function loadData() {
    return dispatch => {
        return request
            .get(`${SERVER_URL}product`)
            .set('Accept', 'application/json')
            .end((err, res) => {
                console.log(res.body);
                if (err) {
                    console.log(err.message);
                    dispatch(loadDataFailure());
                } else {
                    dispatch(loadDataSuccess(res.body));
                }
            })
    }
}

export function onSelected(item) {
    console.log("di pilih", item)
    return { type: types.ON_SELECTED, item }
}

