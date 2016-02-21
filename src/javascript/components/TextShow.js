import React,{Component} from 'react'

export default class TextShow extends Component{
    render(){
        return(
            <input type="text" value={this.props.value} />
        );
    }
}