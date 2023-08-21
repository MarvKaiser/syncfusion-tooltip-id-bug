import {Component, OnInit} from '@angular/core';
import {AxisModel} from "@syncfusion/ej2-charts/src/chart/axis/axis-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'syncfusion-bar-chart-tooltip';
  public chartData!: Object[];
  public primaryXAxis!: AxisModel;
  public primaryYAxis!: AxisModel;
  public tooltip!: any;
  public marker!: any;

  ngOnInit() {
    this.chartData = [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];

    this.primaryXAxis = {
      valueType: 'Category'
    };

    this.primaryYAxis = {
      labelFormat: '${value}K'
    };

    this.tooltip = {
      enable: true
    }

    this.marker = {
        visible: true
    };
  }
}
