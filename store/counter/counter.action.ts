import { Action } from '@ngrx/store';


export class AddProduct implements Action {
    readonly type = 'ADD_PRODUCT';
    constructor(public payload: Object) { }
}

//delete item
export class RemoveProduct implements Action {
    readonly type = 'REMOVE_PRODUCT'
    constructor(public payload: Array<Object>){}
}
