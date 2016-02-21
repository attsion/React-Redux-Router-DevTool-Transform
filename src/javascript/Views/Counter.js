import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'; 
import Button from '../components/Button';
import TextShow from '../components/TextShow';
import * as CounterActions from '../actions/counter';


class Counter extends Component{
    render(){
        return(
            <div>
                <h1>计数器</h1>
                <TextShow value={this.props.value}></TextShow>
                <Button text="+" click={this.props.increment}></Button>
                <Button text="-" click={this.props.decrement}></Button>
                <Button text="+ odd" click={this.props.incrementIfOdd}></Button>
                <Button text="+ async" click={this.props.incrementAsync}></Button>
            </div>
        );
    };
    
    
}


function mapStateToProps(state) {
  return {
    value: state.counter
  }
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)