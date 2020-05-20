import React, {Component} from 'react';
import {Button} from 'antd-mobile'

interface IProps {

}

class Test extends Component<IProps> {
    constructor(props:IProps) {
        super(props);
        window.nativeExpressRewardedVideoAdDidClose = this.videoCallBackSucceed.bind( this ); //播放成功
    }
    render() {
        return (
            <div>
                <Button type='primary' onClick={this.showRewardAlertHandler.bind(this)}>showRewardAlert</Button><br/>
                <Button onClick={this.showRewardedVideoADWithSlotIdHandler.bind(this)}>showRewardedVideoADWithSlotId</Button>
            </div>
        );
    }

    showRewardAlertHandler(e?:React.MouseEvent) {
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

    showRewardedVideoADWithSlotIdHandler() {
        console.log(this)
        try {
            window.locJs.showRewardedVideoADWithSlotId("945059442");
        } catch (e) {

        }
    }
    videoCallBackSucceed(){
        this.showRewardAlertHandler()
    }
}

export default Test;