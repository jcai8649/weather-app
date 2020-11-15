
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address){
    console.log("Please provide an address")
}

if (address){
    geocode(process.argv[2], (error, geoData) => {
        if (error) {
            return console.log(error)
        } 
        forecast(geoData.latitude, geoData.longtitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(geoData.location)
            console.log(forecastData)
          })
    })
}



