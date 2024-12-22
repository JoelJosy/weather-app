const API_KEY = "14219db5bedee47c93715d4dc24619f8"

export const getWeather = async (location) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
    const data = await response.json();

    return data;
}

// const check = async () => {
//     const data = await getWeather("aadads")
//     console.log(data);
// }

// data.cod = '404'

// check()