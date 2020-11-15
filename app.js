const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=bb9e70566574e5c2e22641ec8f110d25&query=&units=f'
const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/sasd.json?access_token=pk.eyJ1IjoiamNhaTEyMzE0IiwiYSI6ImNraGhlZ2xoYzAxMTAyc3NkaDFjb3JjZzIifQ.XWuJmsPtp53RcfHRNMKa2g&limit=1'
request({url: url, json: true}, (error, response) => {
    if (error) {
        console.log('unable to connect');
    } else if (response.body.error) {
        console.log('unable to find location');
    } else {
        console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degree out but it feels like ${response.body.current.feelslike} degree out`)
    }
})

request({url: geoUrl, json: true}, (error, response) => {
    if (error) {
        console.log('unable to connect')
    } else if (response.body.message){
        console.log('unable to find location')
    } else {
        console.log('latitude: ' + response.body.features[0].center[1] + ' longitude: ' + response.body.features[0].center[0])
    }
})
