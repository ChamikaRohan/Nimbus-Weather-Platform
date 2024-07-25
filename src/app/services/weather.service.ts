import { HttpClient   } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey: string = environment.apiKey; 
  private apiUrl: string = environment.apiUrl;

  private cityNameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public cityName$: Observable<string> = this.cityNameSubject.asObservable();

  constructor(private http: HttpClient  ) { }

  setCityName(cityName: string): void {
    this.cityNameSubject.next(cityName);
  }

  getWeatherData(cityName: string): Observable<any> {
    this.setCityName(cityName);
    const url = `${this.apiUrl}?q=${cityName}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
