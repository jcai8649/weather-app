const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=bb9e70566574e5c2e22641ec8f110d25&query='+ lat + ',' + long +'&units=f';
    request({url:url, json: true}, (error, response) => {
        if (error){
            callback('Unable to connect to server', undefined)
        } else if (response.body.error){
            callback('Please enter specify valid coordinates', undefined)
        } else {
            callback(undefined, 'The temp is: ' + response.body.current.temperature + "F, feels like "+ response.body.current.feelslike +"F" )
        }
    }) 
}

module.exports = forecast;