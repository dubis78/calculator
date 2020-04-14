import React from "react";
import Data from './buttonsData';
import OutputDisplay from "./OutputDisplay";
import EqualsButton from "./EqualsButton";
import ClearButton from "./ClearButton";
import Button from "./Button";
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  }

  handleClick(currentButtonClicked) {
    this.setState(prevState => {
      return {
        output:
          prevState.output === 0
            ? currentButtonClicked
            : `${prevState.output}` + currentButtonClicked
      };
    });
  }

  handleClear() {
    this.setState({ output: 0 });
  }

  handleEquals() {
    this.setState(prevState => {
      if (this.state.output === "/0") {
        return {
          output: "undefined"
        };
      } else {
        return {
          output: "NaN"
        };
      }
    });
  }

  render() {
    return (
      <main className="baseboard">
        <OutputDisplay placeThisOnScreen={this.state.output} />
        <
            ClearButton handleClear={this.handleClear}   
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[12].name}
            symbol={Data.btnsData[12].symbol}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[13].name}
            symbol={Data.btnsData[13].symbol}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[14].name}
            symbol={Data.btnsData[14].symbol}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[3].name}
            symbol={Data.btnsData[3].symbol}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[9].name}
            symbol={Data.btnsData[9].symbol}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[10].name}
            symbol={Data.btnsData[10].symbol}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[11].name}
            symbol={Data.btnsData[11].symbol}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[2].name}
            symbol={Data.btnsData[2].symbol}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[6].name}
            symbol={Data.btnsData[6].symbol}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[7].name}
            symbol={Data.btnsData[7].symbol}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[8].name}
            symbol={Data.btnsData[8].symbol}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[1].name}
            symbol={Data.btnsData[1].symbol}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[5].name}
            symbol={Data.btnsData[5].symbol}
        />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[4].name}
            symbol={Data.btnsData[4].symbol}
        />
                
        <EqualsButton
            handleEquals={this.handleEquals} 
         />
        <Button
            handleClick={this.handleClick} 
            name={Data.btnsData[0].name}
            symbol={Data.btnsData[0].symbol}
        />

      </main>
    );
  }
}

export default Calculator;