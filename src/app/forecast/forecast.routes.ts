import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastComponent } from './forecast.component';


const forecastRoutes: Routes = [
  {
    path: '',
    component: ForecastComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(forecastRoutes)],
  exports: [RouterModule],
})
export class ForecastRoutingModule {}
