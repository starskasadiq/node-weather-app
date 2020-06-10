const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=570da3de4854c53e995ff8552df0036d&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        console.log('Request received for forecast... \nLatitude - [' + latitude + '], longitute - [' + longitude + '].')
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. But it feelslike ' + body.current.feelslike + '. The humidity is ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast