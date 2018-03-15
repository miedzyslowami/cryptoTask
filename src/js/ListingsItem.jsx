import React from 'react';
import scss from '../scss/listingsItem.scss';

class ListingsItem extends React.Component {
  constructor(props){
    super(props);
  }
    render(){

      return(<div>
        <div className={scss.label}><p>Altcoins</p></div>
        <div className={scss.infoBox}>
            <div className={scss.cryptoDetails}>{this.props.cryptoCurrencyName}</div>
            <div>{this.props.curValue} {this.props.currency}</div>
            <div>{this.props.change1day}</div>
            <div>{this.props.change1month}</div>
            <div>{this.props.change3month}</div>
            <div>{this.props.change12month}</div>
            <div>{this.props.change30month}</div>
            <div>{this.props.ytd}</div>
        </div>
        </div>)
    }
  }
export default ListingsItem;
