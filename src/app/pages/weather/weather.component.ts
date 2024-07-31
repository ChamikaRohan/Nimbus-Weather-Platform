import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, HttpClientModule, WeatherComponent,SearchbarComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {

  weatherData: any;
  cityName: string = 'Colombo';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherData(this.cityName).subscribe(
      data => {
        this.weatherData = data;
        // console.log(this.weatherData)
      },
      error => {
        console.error('Error fetching weather data', error);
      }
    );
  }
}
