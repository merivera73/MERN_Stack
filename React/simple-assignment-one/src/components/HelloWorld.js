import React, {Component} from 'react';
class HelloWorld extends Component {
    render(){
        return <h1>{this.props.someText}</h1>
    }
}

export default HelloWorld;