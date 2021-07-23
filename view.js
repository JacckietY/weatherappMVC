export default class View {
    dom = {
        inputField : document.querySelector('.search-bar'),
        search_button : document.querySelector(".search button")
    }

    getCity = () => {
        return this.dom.inputField.value;
    }
    showError = () => {
        alert("No weather found.");
        throw new Error("No weather found.");
    }

    displayWeather = data =>{
        console.log('im getting called');
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage =
        "url('https://source.unsplash.com/2560x1297/?" + name + "')";
    }
}