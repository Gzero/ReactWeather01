var React = require('react');
var PropTypes = React.PropTypes;
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeathermap = require('openWeathermap');

var Weather = React.createClass({
    getInitialState: function functionName() {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        this.setState({isLoading: true});
        openWeathermap.getTemp(location).then((temp) => {
            this.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (errorMessage) {
            alert(errorMessage);
            // this.setState({isLoading: false});
        });
    },
    render: function () {
        var {isLoading, location, temp} = this.state;

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}></WeatherForm>
                {renderMessage()}
            </div>
        );

        ////////////////

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather ...</h3>
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }
    }

});

module.exports = Weather;
