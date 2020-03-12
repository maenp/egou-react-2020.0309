import React, {Component} from 'react';
import {connect} from 'react-redux'
import {NavLink} from "react-router-dom";
import {CHANGE_NUM} from '@actions/test'
import {List, InputItem, Button,DatePickerView} from 'antd-mobile';
import {getHomeNowList, AdApi} from '@api/test'

const mapStateToProps = (state) => {
    return {
        n: state.user.getIn(['n'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeHandler: (e) => {
            if (e.target) e = e.target.value
            dispatch(CHANGE_NUM(e))
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class Login extends Component {
    constructor() {
        super();
        Login.this = this
        this.state = {
            butType: 0
        }
    }

    render() {
        let {n} = this.props
        let {butType} = this.state
        return (
            <div>
                <h3>登录</h3>
                <List>
                    <InputItem clear={true} onChange={this.props.changeHandler} value={n}/>
                </List>
                <input type='text' onChange={this.props.changeHandler} value={n}/>
                <br/><NavLink to='/home'>去首页</NavLink>
                <Button type="primary" icon={butType === 2 ? 'check-circle-o' : null}
                        loading={butType === 1 ? 'loading' : ''}
                        onTouchStart={this.requestHandler.bind(this)}>{butType === 2 ? '请求成功' : '去请求'}</Button>
                <DatePickerView/>

            </div>
        );
    }

    requestHandler(e) {
        this.setState({butType: 1})
        getHomeNowList({signName: 'weishu_healthy'}).then(res => {
            setTimeout(_ => {
                this.setState({butType: 2})
            }, 3000)
        })

        AdApi().then(data => {
            console.log(data)
        })
    }
}


export default Login;