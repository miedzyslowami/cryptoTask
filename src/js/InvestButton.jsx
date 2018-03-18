import React from 'react';
import scss from '../scss/investButton.scss';

class InvestButton extends React.Component {
  constructor(props){
    super(props);
  }
    render(){
      return(<button className={scss.investButton}>{this.props.buttonText}</button>)
    }
  }
export default InvestButton;
