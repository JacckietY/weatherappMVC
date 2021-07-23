import Model from "./model.js";
import View from "./view.js";

export default class Controller {
    constructor(){
        this.view = new View();
        this.model = new Model();
        
        this.view.dom.search_button.addEventListener("click", this.handleGetWeather);        
        
        this.view.dom.inputField
        .addEventListener("keyup", (event) =>  {
            if (event.key == "Enter") {
                this.handleGetWeather();
            }
        });


        this.onWeatherSearch('Dnipro');
    }

    handleGetWeather = () => {
        const city = this.view.getCity();
        this.onWeatherSearch(city);
    }

    onWeatherSearch = (city) => {
        if(city == ''){
            this.view.showError();
            return;
        }

        this.model.getWeather(city).then((data) => this.view.displayWeather(data));;
    }
}