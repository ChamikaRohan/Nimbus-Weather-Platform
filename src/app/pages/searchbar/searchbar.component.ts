import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {

  cityName: string = '';

  constructor(private weatherService: WeatherService) {}

  getWeatherData(): void {
    this.weatherService.getWeatherData(this.cityName);
  }
}
