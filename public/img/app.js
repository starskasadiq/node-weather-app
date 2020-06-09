const request = require('request')

//const url = 'http://api.weatherstack.com/current?access_key=570da3de4854c53e995ff8552df0036d&query=Yellandu'
//const url = 'http://api.weatherstack.com/current?access_key=570da3de4854c53e995ff8552df0036d&query=Yellandu&units=f'
const url = 'http://api.weatherstack.com/current?access_key=570da3de4854c53e995ff8552df0036d&query=Yellandu' //for error

const log = console.log

// log('Starting...')

// setTimeout( () => {
//     log('2 seconds timer...')
// }, 2000)

// setTimeout( () => {
//     log('0 seconds timer...')
// }, 0)

// log('Stopping...')

// setTimeout( () => {
//     log('1 seconds timer...')
// }, 1000)

request({ url: url, json: true }, (error, response) => {
    if(error) {
        log('Error occured: ' + error)
    } else if (response.body.error) {
        log('unable to find location...')
    } else {
        log(response.body.current)
        //const data = JSON.parse(response.body) //commented because we have added 'json: true' in the options, so we dont need to parse
        //log(data.current)
        log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + ".")
    }
})