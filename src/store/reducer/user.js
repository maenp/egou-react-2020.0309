import {handleActions} from "redux-actions";

const defaultState = {
    username: "未登录",
    userPic: "",
    n: 0
}


export default (state = defaultState, action) => {
            let newState = {...state}
    switch (action.type) {
        case 'add_num':
            newState.n++
            return newState
        break;
        case 'minus_num':
            newState.n--
            return newState
         case 'change_num':
            newState.n=action.value
            return newState
        default:

    }
    return state
}

// export default handleActions({
//     login_action:(state,action)=>{
//         let newUserState = Object.assign({},state);
//         newUserState.username = action.payload.info.username;
//         newUserState.userPic = action.payload.info.userPic;
//         return newUserState;
//     },
//     user_action:(state,action)=>{
//         console.log(action);
//         let newImgUrlState = Object.assign({},state);
//         newImgUrlState.userPic = action.payload;
//         return newImgUrlState;
//     }
// },defaultState)