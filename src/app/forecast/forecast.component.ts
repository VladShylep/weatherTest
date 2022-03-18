import { Component, OnInit } from '@angular/core';
import { ForecastService } from './forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  public mask = [/[0-9]/, /\d/, '-', /\d/, /\d/, /\d/];
  postalCode: string = '';
  forecast: any = [];
  voivodship: string = '';

  constructor(private forecastService: ForecastService) {}
  ngOnInit(): void {
    if (localStorage.getItem('forecast')) {
      this.forecast = JSON.parse(localStorage.getItem('forecast') || '[]');
    }
    if (localStorage.getItem('voivodship')) {
      this.voivodship = JSON.parse(localStorage.getItem('voivodship') || '[]');
    }
  }
  searchCityByPostalCode(postalCode: string) {
    this.forecastService
      .fetchLocationByPostalCode(postalCode)
      .subscribe((data) => {
        this.voivodship = data[0]?.AdministrativeArea.LocalizedName;
        localStorage.setItem('voivodship', JSON.stringify(this.voivodship));
        data[0]?.Key
          ? this.fetchForecastByLocationKey(data[0]?.Key)
          : (this.forecast = []);
      });
  }

  dataParse(data: string) {
    const forecastData = new Date(data);
    const parsedData = {
      weekDay: new Intl.DateTimeFormat('pl-PL', { weekday: 'long' }).format(
        forecastData
      ),
      date: forecastData.toLocaleDateString(),
    };
    return parsedData;
  }

  getWeatherIcon(iconId: number) {
    return `https://www.accuweather.com/images/weathericons/0${iconId}.svg`;
  }

  fetchForecastByLocationKey(locationKey: string) {
    this.forecastService
      .fetchForecastByLocationKey(locationKey)
      .subscribe((data) => {
        this.forecast = data.DailyForecasts;
        localStorage.setItem('forecast', JSON.stringify(data.DailyForecasts));
      });
  }
}
