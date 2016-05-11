var React = require('react');


var Country = React.createClass({
  render: function(){

    if(!this.props.countryInfo) return <div></div>;
    var borderingCountriesListItems = this.props.borderingCountries.map(function(country){
      return <li> <strong>Country:</strong> {country.name}, <br/><strong>Capital City</strong>: {country.capital} </li>
    });



    return (
      <div>
        <h4> {this.props.countryInfo.name} </h4>
        <p> Capital city: {this.props.countryInfo.capital} </p>
        <p> Population: {this.props.countryInfo.population} </p>
        <p> Region: {this.props.countryInfo.region} </p>
        <p> SubRegion: {this.props.countryInfo.subregion} </p>
        <ul> Translations 
          <li> German: {this.props.countryInfo.translations.de} </li>
          <li> Spanish: {this.props.countryInfo.translations.es} </li>
          <li> French: {this.props.countryInfo.translations.fr} </li>
          <li> Italian: {this.props.countryInfo.translations.it} </li>
          <li> Japanese: {this.props.countryInfo.translations.ja} </li>

        </ul>

        <ul> Bordering Countries
          
          {borderingCountriesListItems}
        </ul>

      </div>
    )
  }

});



module.exports = Country;