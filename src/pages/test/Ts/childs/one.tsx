import React, {Component} from 'react';
interface IProps {
    name:string
}
interface IState {
    color:'red' | 'blue',
    n:number,
    time:number
}
class One extends Component<IProps,IState> {
    constructor(props:IProps) {
        super(props);
        this.state={
            color:'red',
            n:1,
            time:0
        }
    }
    render() {
        return (
            <div>
                <h3 style={{color:this.state.color}}>{this.props.name}</h3>
                <button onClick={this.isColorHandler}>isColor</button>
            </div>
        );
    }
    isColorHandler=()=>{
        let time=new Date().getTime()
        console.log(time-this.state.time)
        this.setState({
            time
        })
        let color=this.state.color
        if(color==='red'){
            this.setState({
                color:'blue'
            })
        }else{
            this.setState({
                color:'red'
            })
        }
    }
}

export default One;