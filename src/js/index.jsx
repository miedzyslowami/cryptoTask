import React from 'react';
import ReactDOM from 'react-dom';
import Listings from './Listings.jsx';
import scss from '../scss/index.scss';

class App extends React.Component {
    render() {
        return(<div className={scss.wrapper}>
            <Listings/>
            </div>)
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
