var React = require('react');


var CountrySelect = React.createClass({

  countryToOption: function(country, index){
    return <option key={index}> {country.name} </option>;
  },

  countriesAsOptions: function(){
    return this.props.countries.map(this.countriesToOption);
    //map automatically passes the object and index without us having to declare it above
  },
  //above are refactornig methods. Would then pass the countriesAsOption method into {}
  //inside the select tags. see below
  // <select>
  // {this.countriesAsOptions}
  // </select>

  getInitialState: function(){
    return {selectedIndex: null }
  },

  findSelectedCountry: function(index){
    var result = this.props.countries[index];
    return result;
  },

  captureBorderingCountriesCodes: function(country){
    console.log("bordering country codes", country.borders)
    return country.borders;
  },
  captureBorderingCountries: function(countriesCodesArray){
    // console.log("countries codes", countriesCodesArray[0])
    var borderingCountries = []
    for(var i=0; i<countriesCodesArray.length; i++){
      this.props.countries.forEach(function(country){
        // console.log("all country codes", country.alpha3Code)
        // console.log("target code", countriesCodesArray[i])
        if(country.alpha3Code == countriesCodesArray[i]){
          borderingCountries.push(country);
        }
      })
    }
    // console.log("bordering countries", borderingCountries)
    return borderingCountries;
  },

  handleChange: function(e){
    e.preventDefault();
    var newIndex = e.target.value;
    this.setState({selectedIndex: newIndex});
    var selectedCountry = this.findSelectedCountry(newIndex);
    var countryCodes = this.captureBorderingCountriesCodes(selectedCountry);
    var borderingCountries = this.captureBorderingCountries(countryCodes);
    this.props.captureSelectCountryBorderingCountries(borderingCountries);
    // refactor 1 below
    // var selectedCountry = this.findSelectedCountry(newIndex)
    // this.props.onSelectCountry(selectedCountry);
    // refactor 2 below
    // this.props.onSelectCountry(this.findSelectedCountry(newIndex))
    // original below
    this.props.onSelectCountry(this.props.countries[newIndex])
  },


  render: function(){
    // console.log(this.props.countries[0])
    //var options = this.props.countries.map(function(country, index){
      // return this.countryToOption(country, index)
    // }.bind(this))
    var options = this.props.countries.map(function(country, index){
      return <option key={index} value={index}> {country.name} </option>;
      //makes a whole array of option tags which can then be passed to the dropdown menu
    });
    // console.log(options)
    return (
      <div>
        <h4> Country Select </h4>
        <select value={this.selectedIndex} onChange={this.handleChange}>
          {options}
          
        </select>
      </div>
    )
  }
});





module.exports = CountrySelect;