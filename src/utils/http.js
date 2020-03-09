import {fetch as fetchPro} from "whatwg-fetch"
import qs from "qs"
const get=(url,data)=>{
    if(data){
        let str="";
        for(let key in data){
            str+="&"+key+"="+data[key];
        }
        url=url+"?"+str.slice(1)
    }
    return fetchPro(url,{
        credentials:'include',
        headers:{
            "content-type":"application/json"
        }
    }).then(res=>res.json)

};
const post=(url,data)=>{
    return fetchPro(url,{
        method:'POST',
        credentials:'include',
        headers:{
            "content-type": "application/x-www-form-urlencoded"
        },
        body: qs.stringify(data)
    }).then(res=>res.json())
};


export default {
    get,
    post
}