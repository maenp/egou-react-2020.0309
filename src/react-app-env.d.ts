/// <reference types="react-scripts" />

interface LocJs{
    showRewardAlert:(obj:string)=>{}
    showRewardedVideoADWithSlotId:(adId:string)=>{}
    [key:string]:(param:string)=>{}
}

interface Window{
    nativeExpressRewardedVideoAdDidClose:any
    locJs:LocJs
}