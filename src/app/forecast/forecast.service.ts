import { Injectable } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor(private api: ApiService) {}

  fetchLocationByPostalCode(postalCode: string) {
    const data = {
      q: postalCode,
    };
    return this.api.get('/locations/v1/postalcodes/search', data);
  }

  fetchForecastByLocationKey(locationKey: string) {
    const data = {
      metric: true,
    };
    return this.api.get(`/forecasts/v1/daily/5day/${locationKey}`, data);
  }
}
