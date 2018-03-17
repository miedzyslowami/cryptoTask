import React from 'react';
import scss from '../scss/listingsItem.scss';
import InvestButton from './InvestButton.jsx';
class ListingsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curValue: this.props.curValue
    }
  }

  formatValue = () => {
    return this.props.curValue.split('').reverse().map((value, i) => {
      return ((i + 1) % 3 == 0)
        ? " " + value
        : value;
    }).reverse().join('');

  }
  formatPercent = (percent) => {
    let percentVal = percent.replace(',', '.');
    let sign = Math.sign(parseFloat(percentVal)) === 1
      ? '+'
      : '';
    return sign + percent + '%';

  }

  render() {

    return (<div className={scss.listingsItem}>
      <div className={scss.listingLabel}>
        <div className={scss.labelWrapper}>
          <p>Altcoins</p>
        </div>
      </div>
      <div className={scss.infoBox}>
        <div className={scss.cryptoDetails}>
          {this.props.cryptoCurrencyName}
          <div>
            <div className={scss.umbrella}></div>
            <div>Ethereum foundation</div>
          </div>
          <div>
            <div className={scss.dot}></div>
            <div>Altcoins - highest growth</div>
          </div>
        </div>
        <div>
          <div className={scss.curValue}>{this.formatValue()}
            <span className={scss.currency}> {this.props.currency}</span>
          </div>
          <div className={scss.permanentLabel}>Wartość</div>
        </div>
        <div>
          <div className={scss.changeValue}>{this.formatPercent(this.props.change1day)}</div>
          <div className={scss.permanentLabel}>1D</div>
        </div>
        <div>
          <div className={scss.changeValue}> {this.formatPercent(this.props.change1month)}</div>
          <div className={scss.permanentLabel}>1M</div>
        </div>
        <div>
          <div className={scss.changeValue}>{this.formatPercent(this.props.change3month)}</div>
          <div className={scss.permanentLabel}>3M</div>
        </div>
        <div>
          <div className={scss.changeValue}>{this.formatPercent(this.props.change12month)}</div>
          <div className={scss.permanentLabel}>12M</div>
        </div>
        <div>
          <div className={scss.changeValue}>{this.formatPercent(this.props.change30month)}</div>
          <div className={scss.permanentLabel}>30M</div>
        </div>
        <div>
          <div className={scss.changeValue}>{this.formatPercent(this.props.ytd)}</div>
          <div className={scss.permanentLabel}>YTD</div>
        </div>
        <div><InvestButton/>
        </div>

          <div className={scss.eyeIcon}></div>
          <div className={scss.scaleIcon}></div>

      </div>

    </div>)
  }
}
export default ListingsItem;
