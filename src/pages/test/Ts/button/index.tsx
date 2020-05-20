import React from 'react'

type IProps={
    // click:(e:React.MouseEvent)=>void,
    click(e:React.TouchEvent):void,
    children:React.ReactNode
}



const Button=(props:IProps)=>{
    return(
        <button onTouchStart={props.click}>{props.children}</button>
    )
}



export default Button