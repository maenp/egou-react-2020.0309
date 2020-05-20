import React from 'react'
import {Button} from 'antd-mobile'
interface IProps {
    count:number,
    increment:()=>void,
    decrement:()=>void

}
//受控组件
const Counter=(props:IProps)=>{
    return(
        <>
            <h1>{props.count}</h1>
            <Button onClick={props.increment}>increment</Button>
            <Button onClick ={props.decrement}>decrement</Button>
        </>
    )
}
export default Counter