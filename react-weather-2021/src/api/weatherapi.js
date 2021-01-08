import axios from 'axios'; 

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f112785bfbe8adc7712ee4df7a0197f7'; 


export const weatherapi = async(query) =>{ 
const { data } = await axios.get(URL, {
   params: {
       q: query,
       units: 'metrics',
       APPID: API_KEY
   }
})
}