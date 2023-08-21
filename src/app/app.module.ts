import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {
  BarSeriesService,
  CategoryService,
  ChartModule, DataLabelService,
  LegendService,
  LineSeriesService,
  TooltipService
} from "@syncfusion/ej2-angular-charts";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ChartModule
  ],
  providers: [CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService, BarSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
