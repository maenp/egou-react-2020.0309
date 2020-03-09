import {handleActions} from "redux-actions";

const defaultState = {
    username: "未登录",
    userPic: "",
    n: 0
}


// export default (state = defaultState, action) => {
//             let newState = {...state}
//     switch (action.type) {
//         case 'add_num':
//             newState.n++
//             return newState
//         break;
//         case 'minus_num':
//             newState.n--
//             return newState
//          case 'change_num':
//             newState.n=action.value
//             return newState
//         default:

//     }
//     return state
// }

export default handleActions({
    add_num:(state,action)=>{
        let newState = Object.assign({},state);
        newState.n++
        return newState;
    },
    minus_num:(state,action)=>{
        let newState = Object.assign({},state);
        newState.n--
        return newState;
    },
    change_num:(state,action)=>{
        let newState = Object.assign({},state);
        newState.n=action.value
        return newState;
    }
},defaultState)