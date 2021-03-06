import {handleActions} from "redux-actions";
import {fromJS} from 'immutable'

const defaultState =fromJS({
    username: "未登录",
    userPic: "",
    n: 111,


    userId: '',
    term: '',
    deviceId: ''
})

export default handleActions({
    // add_num:(state,action)=>{
    //     let newState = Object.assign({},state);
    //     newState.n++
    //     return newState;
    // },
    add_num:(state)=>{
        console.log('add')
        return state.updateIn(['n'],(state)=>++state);
    },
    minus_num:(state)=>{
        return state.updateIn(['n'],(state)=>--state);
    },
    change_num:(state,action)=>{
        console.log(action)
        return state.updateIn(['n'],(state)=>action.value);
    },
    user_update:(state)=>{
        return state.updateIn(['userId'],(state)=>window.locJs ? window.locJs.getRuid() : 1642297)
                    .updateIn(['term'],(state)=>window.locJs ? window.locJs.getTerm() : 3)
                    .updateIn(['deviceId'],(state)=>window.locJs ? window.locJs.getDeviceID() : 22435454)
    }
},defaultState)