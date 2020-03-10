import React, {Component} from 'react';
import {connect} from 'react-redux'
import {NavLink} from "react-router-dom";
import {CHANGE_NUM} from '@actions/test'
const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        changeHandler:(e)=>{
            console.log(e.target)
            dispatch(CHANGE_NUM(e.target.value))
        }
    }
}
@connect(mapStateToProps,mapDispatchToProps)
class Login extends Component {
    constructor() {
        super();
        Login.this=this
    }
    render() {
        let {user}=this.props
        return (
            <div>
                <h3>登录</h3>
                <input type='text' onChange={this.props.changeHandler} value={user.n}/>
                <br/><NavLink to='/home'>去首页</NavLink>
            </div>
        );
    }
}


export default Login;