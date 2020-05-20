import React, {Component} from 'react';
import One from "./childs/one";
import AntdInp from './childs/antd_input'
import Counter from "./funcComponent/conuter";
import Button from "./button";
import {Request} from './promise'
import UserInp from "./userInp";
interface IProps {
    name:string
}
interface IState {
    color:'red' | 'blue',
    count:number
}
//TS的优势是什么？ 便于维护 识别错误
class Index extends Component<IProps,IState> {//IProps,IState的顺序不能变
    constructor(props:IProps) {
        super(props);
        this.state={
            color:'red',
            count:0
        }
    }
    changeColorHandler=()=>{
        let color=this.state.color
        if(color==='red'){
            this.setState({
                color:'blue'
            })
        }else {
            this.setState({
                color:'red'
            })
        }
    }
    incrementCounter=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    decrementCounter=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    ChildrenClick=(e:React.TouchEvent)=>{
        console.log(e)
    }
    requestHandler=()=>{
        Request({
            url:'/api/10001',
            type:'get'
        }).then((data)=>{
            console.log(data)
        })
    }
    render() {
        return (
            <div>
                <h3 style={{color:this.state.color}}>{this.props.name}</h3><br/>
                <button onClick={this.changeColorHandler}>change color</button>
                <One name="one中国加油"/>
                <AntdInp/>
                <Counter
                    count={this.state.count}
                    increment={this.incrementCounter}
                    decrement={this.decrementCounter}
                />
                <Button click={this.ChildrenClick}>
                    <span>ChildrenClick</span>
                </Button>
                <br/>
                <button onTouchStart={this.requestHandler}>请求</button>
                <UserInp/>
            </div>
        );
    }
}

export default Index;
