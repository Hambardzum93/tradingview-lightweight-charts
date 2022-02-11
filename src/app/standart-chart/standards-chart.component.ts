import {Component, DoCheck, HostListener, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as lightweightChart from 'lightweight-charts'

@Component({
  selector: 'app-standards-chart',
  templateUrl: './standards-chart.component.html',
  styleUrls: ['./standards-chart.component.css']
})
export class StandardsChartComponent implements OnInit, DoCheck {

  chart = lightweightChart.createChart(
    document.body,
    {
      width: window.screen.availWidth, height: 800,
      timeScale: {
        timeVisible: true,
        secondsVisible: false
      },
      crosshair: {
        mode: lightweightChart.CrosshairMode.Normal,
      },


    }
  );
  public lineSeries = this.chart.addCandlestickSeries({
    upColor: "#009900",
    downColor: "#FF0000",
    borderDownColor: "#ff4976",
    borderUpColor: "#4bffb5",
    wickDownColor: "#838ca1",
    wickUpColor: "#838ca1"
  });

  ngOnInit() {
    this.lineSeries.setData([
      {time: "2018-07-19", open: 91.77, high: 100.39, low: 165.25, close: 145.72},
      {time: "2018-07-20", open: 145.72, high: 147.99, low: 100.11, close: 108.19},
      {time: "2018-07-21", open: 108.19, high: 118.43, low: 74.22, close: 75.16},
      {time: "2018-07-22", open: 75.16, high: 82.84, low: 36.16, close: 45.72},
      {time: "2018-07-23", open: 45.12, high: 53.90, low: 45.12, close: 48.09},
      {time: "2018-07-24", open: 60.71, high: 60.71, low: 53.39, close: 59.29},
      {time: "2018-07-25", open: 68.26, high: 68.26, low: 59.04, close: 60.50},
      {time: "2018-07-26", open: 67.71, high: 105.85, low: 66.67, close: 91.04},
      {time: "2018-07-27", open: 91.04, high: 121.40, low: 82.70, close: 111.40},
      {time: "2018-07-28", open: 111.51, high: 142.83, low: 103.34, close: 131.25},
      {time: "2018-07-29", open: 131.33, high: 151.17, low: 77.68, close: 96.43},
      {time: "2018-07-30", open: 106.33, high: 110.20, low: 90.39, close: 98.10},
      {time: "2018-08-19", open: 91.77, high: 100.39, low: 165.25, close: 145.72},
      {time: "2018-08-20", open: 145.72, high: 147.99, low: 100.11, close: 108.19},
      {time: "2018-08-21", open: 108.19, high: 118.43, low: 74.22, close: 75.16},
      {time: "2018-08-22", open: 75.16, high: 82.84, low: 36.16, close: 45.72},
      {time: "2018-08-23", open: 45.12, high: 53.90, low: 45.12, close: 48.09},
      {time: "2018-08-24", open: 60.71, high: 60.71, low: 53.39, close: 59.29},
      {time: "2018-08-25", open: 68.26, high: 68.26, low: 59.04, close: 60.50},
      {time: "2018-08-26", open: 67.71, high: 105.85, low: 66.67, close: 91.04},
      {time: "2018-08-27", open: 91.04, high: 121.40, low: 82.70, close: 111.40},
      {time: "2018-08-28", open: 111.51, high: 142.83, low: 103.34, close: 131.25},
      {time: "2018-08-29", open: 131.33, high: 151.17, low: 77.68, close: 96.43},
      {time: "2018-08-30", open: 106.33, high: 110.20, low: 90.39, close: 98.10},
      {time: "2018-09-19", open: 91.77, high: 100.39, low: 165.25, close: 145.72},
      {time: "2018-09-20", open: 145.72, high: 147.99, low: 100.11, close: 108.19},
      {time: "2018-09-21", open: 108.19, high: 118.43, low: 74.22, close: 75.16},
      {time: "2018-09-22", open: 75.16, high: 82.84, low: 36.16, close: 45.72},
      {time: "2018-09-23", open: 45.12, high: 53.90, low: 45.12, close: 48.09},
      {time: "2018-09-24", open: 60.71, high: 60.71, low: 53.39, close: 59.29},
      {time: "2018-09-25", open: 68.26, high: 68.26, low: 59.04, close: 60.50},
      {time: "2018-09-26", open: 67.71, high: 105.85, low: 66.67, close: 91.04},
      {time: "2018-09-27", open: 91.04, high: 121.40, low: 82.70, close: 111.40},
      {time: "2018-09-28", open: 111.51, high: 142.83, low: 103.34, close: 131.25},
      {time: "2018-09-29", open: 131.33, high: 151.17, low: 77.68, close: 96.43},
      {time: "2018-09-30", open: 106.33, high: 110.20, low: 90.39, close: 98.10},
      {time: "2018-10-19", open: 91.77, high: 100.39, low: 165.25, close: 145.72},
      {time: "2018-10-20", open: 145.72, high: 147.99, low: 100.11, close: 108.19},
      {time: "2018-10-21", open: 108.19, high: 118.43, low: 74.22, close: 75.16},
      {time: "2018-10-22", open: 75.16, high: 82.84, low: 36.16, close: 45.72},
      {time: "2018-10-23", open: 45.12, high: 53.90, low: 45.12, close: 48.09},
      {time: "2018-10-24", open: 60.71, high: 60.71, low: 53.39, close: 59.29},
      {time: "2018-10-25", open: 68.26, high: 68.26, low: 59.04, close: 60.50},
      {time: "2018-10-26", open: 67.71, high: 105.85, low: 66.67, close: 91.04},
      {time: "2018-10-27", open: 91.04, high: 121.40, low: 82.70, close: 111.40},
      {time: "2018-10-28", open: 111.51, high: 142.83, low: 103.34, close: 131.25},
      {time: "2018-10-29", open: 131.33, high: 151.17, low: 77.68, close: 96.43},
      {time: "2018-10-30", open: 106.33, high: 110.20, low: 90.39, close: 98.10},
      {time: "2018-11-19", open: 91.77, high: 100.39, low: 165.25, close: 145.72},
      {time: "2018-11-20", open: 145.72, high: 147.99, low: 100.11, close: 108.19},
      {time: "2018-11-21", open: 108.19, high: 118.43, low: 74.22, close: 75.16},
      {time: "2018-11-22", open: 75.16, high: 82.84, low: 36.16, close: 45.72},
      {time: "2018-11-23", open: 45.12, high: 53.90, low: 45.12, close: 48.09},
      {time: "2018-11-24", open: 60.71, high: 60.71, low: 53.39, close: 59.29},
      {time: "2018-11-25", open: 68.26, high: 68.26, low: 59.04, close: 60.50},
      {time: "2018-11-26", open: 67.71, high: 105.85, low: 66.67, close: 91.04},
      {time: "2018-11-27", open: 91.04, high: 121.40, low: 82.70, close: 111.40},
      {time: "2018-11-28", open: 111.51, high: 142.83, low: 103.34, close: 131.25},
      {time: "2018-11-29", open: 131.33, high: 151.17, low: 77.68, close: 96.43},
      {time: "2018-11-30", open: 106.33, high: 110.20, low: 90.39, close: 98.10},
      {time: "2018-11-31", open: 91.87, high: 114.69, low: 85.66, close: 111.26},
      {time: "2018-12-19", open: 91.77, high: 100.39, low: 165.25, close: 145.72},
      {time: "2018-12-20", open: 145.72, high: 147.99, low: 100.11, close: 108.19},
      {time: "2018-12-21", open: 108.19, high: 118.43, low: 74.22, close: 75.16},
      {time: "2018-12-22", open: 75.16, high: 82.84, low: 36.16, close: 45.72},
      {time: "2018-12-23", open: 45.12, high: 53.90, low: 45.12, close: 48.09},
      {time: "2018-12-24", open: 60.71, high: 60.71, low: 53.39, close: 59.29},
      {time: "2018-12-25", open: 68.26, high: 68.26, low: 59.04, close: 60.50},
      {time: "2018-12-26", open: 67.71, high: 105.85, low: 66.67, close: 91.04},
      {time: "2018-12-27", open: 91.04, high: 121.40, low: 82.70, close: 111.40},
      {time: "2018-12-28", open: 111.51, high: 142.83, low: 103.34, close: 131.25},
      {time: "2018-12-29", open: 131.33, high: 151.17, low: 77.68, close: 96.43},
      {time: "2018-12-30", open: 106.33, high: 110.20, low: 90.39, close: 98.10},
      {time: "2018-12-31", open: 91.87, high: 114.69, low: 85.66, close: 111.26},

    ]);
  }

  ngDoCheck(): void {
    // console.log(11111111111111111111111111111)
  }
}
