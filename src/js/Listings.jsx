import React from 'react';
import ListingsItem from './ListingsItem.jsx';
import scss from '../scss/listings.scss';

class Listings extends React.Component {
  constructor(props){
    super(props)
    this.state={
      listings:[{cryptoCurrencyName:'Ethereum Classic combined with Zcash ',curValue:'22000',currency:'PLN',change1day:'0,91',change1month:'-0,21',change3month:'-2,29',change12month:'0,42',change30month:'0,85',ytd:'1,31'},{cryptoCurrencyName:'Ethereum',curValue:'2200',currency:'PLN',change1day:'0,91',change1month:'-0,21',change3month:'-2,29',change12month:'0,42',change30month:'0,85',ytd:'1,31'}]
    }
  }

    render(){
      const listings=this.state.listings.map((item,i)=>{
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
