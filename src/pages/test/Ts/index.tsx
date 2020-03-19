import React, {Component} from 'react';
import One from "./childs/one";
import AntdInp from './childs/antd_input'
interface IProps {
    name:string
}
interface IState {
    color:'red' | 'blue'
}
//TS的优势是什么？ 便于维护 识别错误
class Index extends Component<IProps,IState> {//IProps,IState的顺序不能变
    constructor(props:IProps) {
        super(props);
        this.state={
            color:'red'
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
    render() {
        return (
            <div>
                <h3 style={{color:this.state.color}}>{this.props.name}</h3><br/>
                <button onClick={this.changeColorHandler}>change color</button>
                <One name="one中国加油"></One>
                <AntdInp/>
            </div>
        );
    }
}

export default Index;