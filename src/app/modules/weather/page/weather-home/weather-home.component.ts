import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
//Injeção do serviço criado
export class WeatherHomeComponent {
  constructor (private weatherService : WeatherService){}

  getWeatherData(cityName: string): void{
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => console.log(error)
    })

  }
}
