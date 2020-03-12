import React, {Component} from 'react';
import store from '@store'
import {ADD_NUM,MINUS_NUM} from '@actions/test'
import {Button} from "antd-mobile";

import TabBar from "@components/test/tabBar2";

class Home extends Component {
    constructor() {
        super();
        store.subscribe(this.updateHandler.bind(this))
        this.state={
            ...store.getState().user.toJS()
        }
    }
    render() {
        console.log(this.state)
        let {n}=this.state
        return (
            <>
                首页
                <h2>{n}</h2>
                <Button onClick={this.addHandler.bind(this)}>点击增加</Button>
                <Button type="primary" onClick={this.minusHandler.bind(this)}>点击减少</Button>
                <TabBar flag={100}/>
            </>
        );
    }
    addHandler(){
        store.dispatch(ADD_NUM)
    }
    minusHandler(){
        store.dispatch(MINUS_NUM)
    }
    updateHandler(){
        this.setState(store.getState().user.toJS())
    }
}

export default Home;