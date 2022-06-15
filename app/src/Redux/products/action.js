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
        Axios.get('/tvdata',{
            params:{
                ...payload
            }
        })
        .then((r)=>dispatch(fetchTVDataSuccess(r.data)))
        .catch(err=>dispatch(fetchTVDataFailure(err.data)))
    }
}

