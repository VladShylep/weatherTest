import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast.component';
import { ForecastRoutingModule } from './forecast.routes';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ForecastService } from './forecast.service';

@NgModule({
  declarations: [ForecastComponent],
  imports: [CommonModule, FormsModule, ForecastRoutingModule, TextMaskModule],
  providers: [ForecastService],
})
export class ForecastModule {}
