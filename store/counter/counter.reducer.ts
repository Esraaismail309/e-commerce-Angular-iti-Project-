// import { AddProduct, ADD_PRODUCT } from './counter.action';
const initial = {
    producArr: []
}

export function productReducer(state = initial, action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                producArr: [...state.producArr, action.payload],
            }

        case 'REMOVE_PRODUCT':
            return { producArr: action.payload }

        default:
            return state;
    }
}
