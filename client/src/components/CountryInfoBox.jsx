var React = require('react');
var Country = require('./Country.jsx');

var CountryInfoBox = React.createClass({
  // getInitialState: function(){
  //   return {country: null}
  // },

  render: function(){
    console.log(this.props.country)
    // var countryInfoListItems = this.props.country.map(function(country){
    //   return <li>{}</li>
    // })
    return(
      <div>
        <h4> Country Info Box </h4>
        <Country key={0} countryInfo={this.props.country} borderingCountries={this.props.borderingCountries}></Country>
      </div>
    ) 

  }
});





module.exports = CountryInfoBox;