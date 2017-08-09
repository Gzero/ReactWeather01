const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ee5375da501b2832d45d92c2aa99fd9e&units=metric';

// ee5375da501b2832d45d92c2aa99fd9e
module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

        return axios.get(requestUrl).then(function (response) {
            if (response.data.cod && response.data.message) {
                throw new Error(response.data.message);
            } else {
                return response.data.main.temp
            }
        }, function (response) {
            throw new Error(response.data.message);
        })
    }
};
