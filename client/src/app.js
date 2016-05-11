var React = require('react');
var ReactDOM = require('react-dom');
var CountriesBox = require('./components/CountriesBox.jsx')


window.onload = function(){
  ReactDOM.render(
    <CountriesBox></CountriesBox>,
    document.getElementById('app')
  );
}
