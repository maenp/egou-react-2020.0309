import React, {Component} from 'react';
import {Button} from 'antd-mobile'

class Test extends Component {
    constructor() {
        super();
        window.nativeExpressRewardedVideoAdDidClose = this.videoCallBackSucceed.bind( this ); //播放成功
    }
    render() {
        return (
            <div>
                <Button type='primary' onClick={this.showRewardAlert.bind(this)}>showRewardAlert</Button><br/>
                <Button onClick={this.showRewardedVideoADWithSlotId.bind(this)}>showRewardedVideoADWithSlotId</Button>
            </div>
        );
    }

    showRewardAlert() {
        console.log(this)
        let luckInfo = {
            result: 'ok',
            awardId: 1108,
            amount: 10,
            name: '成语阶梯',
            id: 3741
        }
        try {
            window.locJs.showRewardAlert(JSON.stringify(luckInfo));
        } catch (e) {

        }
    }

    showRewardedVideoADWithSlotId() {
        console.log(this)
        try {
            window.locJs.showRewardedVideoADWithSlotId("945059442");
        } catch (e) {

        }
    }
    videoCallBackSucceed(){
        this.showRewardAlert()
    }
}

export default Test;