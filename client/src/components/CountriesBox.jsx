var React = require('react');
var CountrySelect = require('./CountrySelect.jsx')
var CountryInfoBox = require('./CountryInfoBox.jsx')


var CountriesBox = React.createClass({

  getInitialState: function(){
    //React calls this before the render function
    
    return {countries: [], selectedCountry: null, borderingCountries: []};
    // if pass down null, need a if(!props.country) return <div></div>
    // basically says if props.country is null, return empty div
    // or we pass down an empty object and if a method looks for an attribute and cant find it,
    // just returns undefined. This DOESNT break code like when looking for an attribute on null
  },

  setBorderingCountries:function(countries){
    // console.log("captured countries", countries)
    this.setState({borderingCountries: countries});
  },

  setSelectedCountry: function(country){
    // console.log(country)
    this.setState({selectedCountry:  country});
  },

  componentDidMount: function(){
    var request = new XMLHttpRequest();
    request.open("GET", "https://restcountries.eu/rest/v1/all");
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      //fetched data but not done anything with it
      this.setState({countries: data});
      //use .setState to trigger the re-render.
    }.bind(this);
    request.send();
  },

  render: function(){
    return (
      <div>
        <h4> Countries Box </h4>
        <CountrySelect countries={this.state.countries} onSelectCountry={this.setSelectedCountry} captureSelectCountryBorderingCountries={this.setBorderingCountries}></CountrySelect>
        <CountryInfoBox country={this.state.selectedCountry} borderingCountries={this.state.borderingCountries}></CountryInfoBox>
      </div>
    )
    //() these brackets allows things to be on separate lines
    //wrapped multiple things in one div 
  }

});




module.exports = CountriesBox;