import  Axios  from 'axios';
import * as types from './actionTypes';

export const fetchDataRequest=(payload)=>({
    type:types.PHONE_DATA_REQUEST,
    payload
})


export const fetchDataSuccess=(payload)=>({
    type:types.PHONE_DATA_SUCCESS,
    payload
})

export const fetchDataFailure=(payload)=>({
    type:types.PHONE_DATA_FAILURE,
    payload
})

export const fetchData=(payload)=>{
    return (dispatch)=>{
        dispatch(fetchDataRequest());
        Axios.get('/phone',{
            params:{
                ...payload
            }
        })
        .then((r)=>dispatch(fetchDataSuccess(r.data)))
        .catch(err=>dispatch(fetchDataFailure(err.data)))
    }
}

export const fetchlaptopDataRequest=(payload)=>({
    type:types.LAPTOP_DATA_REQUEST,
    payload
})


export const fetchlaptopDataSuccess=(payload)=>({
    type:types.LAPTOP_DATA_SUCCESS,
    payload
})

export const fetchlaptopDataFailure=(payload)=>({
    type:types.LAPTOP_DATA_FAILURE,
    payload
})

export const fetchLaptopData=(payload)=>{
    return (dispatch)=>{
        dispatch(fetchlaptopDataRequest());
        Axios.get('/laptop',{
            params:{
                ...payload
            }
        })
        .then((r)=>dispatch(fetchlaptopDataSuccess(r.data)))
        .catch(err=>dispatch(fetchlaptopDataFailure(err.data)))
    }
}

export const fetchTVDataRequest=(payload)=>({
    type:types.TV_DATA_REQUEST,
    payload
})


export const fetchTVDataSuccess=(payload)=>({
    type:types.TV_DATA_SUCCESS,
    payload
})

export const fetchTVDataFailure=(payload)=>({
    type:types.TV_DATA_FAILURE,
    payload
})

export const fetchTVData=(payload)=>{
    return (dispatch)=>{
        dispatch(fetchTVDataRequest());
        Axios.get('/tv',{
            params:{
                ...payload
            }
        })
        .then((r)=>dispatch(fetchTVDataSuccess(r.data)))
        .catch(err=>dispatch(fetchTVDataFailure(err.data)))
    }
}


export const addProductCartRequest=(payload)=>({
    type:types.ADD_PRODUCT_CART_REQUEST,
    payload
})
export const addProductCartSuccess=(payload)=>({
    type:types.ADD_PRODUCT_CART_SUCCESS,
    payload
})
export const addProductCartFailure=(payload)=>({
    type:types.ADD_PRODUCT_CART_FAILURE,
    payload
})
export const addProductCart=(payload)=>(dispatch)=>{
    console.log("addProductToCartFunctionInAction:",payload);
    dispatch(addProductCartRequest())
    Axios.post('/cart',payload)
    .then(r=>dispatch(addProductCartSuccess(r.data)))
    .catch(e=>dispatch(addProductCartFailure(e.data)))
}

export const getProductCartRequest=()=>({
    type:types.GET_PRODUCT_CART_REQUEST,
})
export const getProductCartSuccess=(payload)=>({
    type:types.GET_PRODUCT_CART_SUCCESS,
    payload
})
export const getProductCartFailure=(payload)=>({
    type:types.GET_PRODUCT_CART_FAILURE,
    payload
})
export const getProductCart=(payload)=>(dispatch)=>{
    dispatch(getProductCartRequest())
    Axios.get('/cart',payload)
    .then(r=>dispatch(getProductCartSuccess(r.data)))
    .catch(e=>dispatch(getProductCartFailure(e.data)))
}

export const sortTVDataL2H = () => ({
    type: types.SORT_TV_DATA_L2H
  });
  
  export const sortTVDataH2L = () => ({
    type: types.SORT_TV_DATA_H2L
  });
  export const sortPhoneDataL2H = () => ({
    type: types.SORT_PHONE_DATA_L2H
  });
  
  export const sortPhoneDataH2L = () => ({
    type: types.SORT_PHONE_DATA_H2L
  });
  export const sortLaptopDataL2H = () => ({
    type: types.SORT_LAPTOP_DATA_L2H
  });
  
  export const sortLaptopDataH2L = () => ({
    type: types.SORT_LAPTOP_DATA_H2L
  });
