import axios from 'axios'

const APIKey = "66b5568d56afdd12c43503be3ca6d758"

const client = axios.create({
    baseURL : "https://api.openweathermap.org/data/2.5"
})

export async function getCurrentWeather({lat , lon} : {lat : string , lon : string}){
    const {data} = await client(`/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`)
    return data
}