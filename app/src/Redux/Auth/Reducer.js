import * as types from './actionTypes';


const initState={
    isAuth:false,
    isLoading:true,
    isError:false,
    token:'',
}

export const authReducer=(state=initState,{payload,type})=>{
    switch(type){
     case types.SIGNUP_REQUEST:{
         return {
            ...state,
            isLoading:true,
         }
     }
     case types.SIGNUP_SUCCESS:{
        localStorage.setItem('token',payload.token);
        return {
           ...state,
           isLoading:false,
           isError:false,
           token:payload.token,
        }
    }
    case types.SIGNUP_FAILURE:{
        return {
           ...state,
           isLoading:false,
           token:'',
           isError:true,
        }
    }
        default: 
        return state;
    }
}