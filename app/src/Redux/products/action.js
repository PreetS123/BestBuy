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

