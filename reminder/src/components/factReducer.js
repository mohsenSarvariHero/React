import { ACTION_TYPE } from "./ActionType";

export const initialState = {
    loading : "false",
    excuse : "",
    error : "false"
}

export const factReducer = (state , action)=>{

    switch (action.type) {
        case ACTION_TYPE.fetch_start:
            return{loading : true , excuse : "" , error : false};
        case ACTION_TYPE.fetch_success:
            return{loading : false , excuse : action.data , error : false};
        case ACTION_TYPE.fetch_error:
            return{loading : false , excuse : "" , error : true};

        default:
            return state;
    }
    // if(action.type === "fetch_start")
    //     return{loading : true , excuse : "" , error : false};
    // if(action.type === "fetch_success")
    //     return{loading : false , excuse : action.data , error : false};
    // if(action.type === "fetch_error")
    //     return{loading : false , excuse : "" , error : true}
};