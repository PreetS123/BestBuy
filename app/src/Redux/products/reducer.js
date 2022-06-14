import * as types from './actionTypes'

const initState={
    tv:[],
    phone:[],
    error:'',
    loading:false
}

 export const productReducer=(state=initState,action)=>{
    const {type ,payload}= action;
    switch(type){
        case types.PHONE_DATA_REQUEST:
            return{
                ...state,
                error:'',
                loading:true             
            }
            case types.PHONE_DATA_SUCCESS:
            return{
                ...state,
                phone:payload,
                error:'',
                loading:false            
            }
            case types.PHONE_DATA_FAILURE:
            return{
                ...state,
                error:payload,
                loading:false             
            }
            
            default:
                return state;
    }
}