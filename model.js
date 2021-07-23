export default class Model{
    apiKey = 'e26d2c964ee0a3f5d1af7aad5a903051'

    createURL = city => {
        return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`;
    }

    getWeather = (city) => {
        return fetch(this.createURL(city))
        .then((response) => {
            if (!response.ok) {
              alert("No weather found.");
              throw new Error("No weather found.");
            }
            return response.json();
          })
    }
}