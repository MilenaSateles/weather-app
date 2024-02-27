import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'e61b27c84b4c434aac08818d574523b3';

  //Injeção do serviço Http Client
  constructor(private http:HttpClient) { }

  getWeatherData(cityName: string): Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&apiid=${this.apiKey}`,{})
  }
}
