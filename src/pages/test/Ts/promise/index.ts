interface IResponse<T> {//响应数据类型
    msg:string,
    data:T
}
type IParams={
    url:string,
    type:'get'|'post',
    data?:any
}

function Request(data:IParams):Promise<IResponse<number[]>> {
    return new Promise((res,rej)=>{
        setTimeout(_=>{
            res({
                msg:'成功',
                data:[1,2,3]
            })
        },2000)
    })
}

export  {
    Request
}