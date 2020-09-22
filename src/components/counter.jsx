import React, { Component } from 'react';
export class Counter extends Component {
    state={
        count:this.props.value,
        tags: ['tag1','tag2','tag3']
    };
    styles={
        fontSize:10,
        fontWeight:'bold'
    }
    
    handleIncrement=(param)=>{
        console.log(param);
        this.setState({count:this.state.count+1});
    };
    doHandleIncrement=()=>{
        this.handleIncrement({id:1});
    }
    render() {
        console.log("props",this.props);
        return(
             <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
         <button  onClick={this.doHandleIncrement} className="btn btn-secondary btn-sm">Increment</button> 
            <button className="btn btn-danger btn-sm m-2">
                Delete
            </button>
            </div>
        );
    }
   
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } =this.state;
        return count===0?'Zero' : count;
    }
}
 
export default Counter;