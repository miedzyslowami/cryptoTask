import React from 'react';
import ListingsItem from './ListingsItem.jsx';
import scss from '../scss/listings.scss';
import data from '../data.json';

class Listings extends React.Component {
  constructor(props){
    super(props)
  }
    render(){
      const listings=Object.values(data.listings).map((item,i)=>{
        return (<ListingsItem
        cryptoCurrencyName={item.cryptoCurrencyName}
        curValue={item.curValue}
        currency={item.currency}
        change1day={item.change1day}
        change1month={item.change1month}
        change3month={item.change3month}
        change12month={item.change12month}
        change30month={item.change30month}
        ytd={item.ytd}
        key={i}/>)
      })
      return(<div className={scss.listings}>{listings}</div>)
    }
  }

export default Listings;
