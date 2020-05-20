import React, {Component} from 'react';
import {Contain} from './styled'
class Index extends Component {
    render() {
        return (
            <Contain>
                <div className="bgBox" ref={"bgBox"} id="map-wrap">
                    <div className="bg" ref="bg" id="bg">
                    </div>
                </div>
            </Contain>
        );
    }
    componentDidMount(){
        this.goMiddleHandler()
    }
    goMiddleHandler() {//定位初始界面位置
        let bgBox=this.refs.bgBox
        this.timeout=setTimeout(() => {
            clearTimeout(this.timeout)
            bgBox.scrollLeft=500
            bgBox.scrollTop=100
        },100);

    }
}

export default Index;