import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Home1 extends Component {
    render() {
        return (
            <div>
                首页子路由
                <NavLink to='/login'>去登录</NavLink>
            </div>
        );
    }
}

export default Home1;