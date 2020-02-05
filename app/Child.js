import React from 'react';
import ReactDOM from 'react-dom';

class Child extends React.Component {
    render() {
        return <h1>Hey, my name is {this.props.name}!</h1>;
    }
}