import React, { Component } from 'react';
export class Counter extends Component {
    state={
        count:1,
        tags: ['tag1','tag2','tag3']
    };
    styles={
        fontSize:10,
        fontWeight:'bold'
    }
    render() {
        let classes = this.getBadgeClasses();
        return(
             <div>
          
        <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
            </div>
        );
    }
   
}
 
export default Counter;