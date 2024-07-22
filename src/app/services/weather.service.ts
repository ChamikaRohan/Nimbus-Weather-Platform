import { HttpClient   } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey: string = environment.apiKey; 
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient  ) { }

  getWeatherData(cityName: string): Observable<any> {
    const url = `${this.apiUrl}?q=${cityName}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
