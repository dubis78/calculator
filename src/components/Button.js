import React from 'react';
//import Data from './buttonsData';

class DecimalButton extends React.Component{
    render(){        
        return(
        <button id={this.props.name} className='arithmetic' onClick={() => this.props.handleClick(this.props.symbol)}>{this.props.symbol}</button>
        )        
    }
}
export default DecimalButton;