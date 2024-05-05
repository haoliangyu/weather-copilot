const { OpenWeatherAPI } = require("openweather-api-node")

async function getCurrentWeather () {
  const service = new OpenWeatherAPI({
    key: process.env.OPEN_WEATHER_API_KEY,
    zipCode: "22003",
    units: "metric"
  })

  return service.getCurrent()
}

function getTemperature (data: any) {
  return data.weather.temp.cur
}

const currentWeather = await getCurrentWeather()
const currentTemperature = getTemperature(currentWeather)

console.log(`current temperature is ${currentTemperature}`)