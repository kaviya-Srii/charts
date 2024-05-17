import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MasterService } from '../master.service';
Chart.register(...registerables);

@Component({
  selector: 'app-mychart',
  standalone: true,
  imports: [],
  templateUrl: './mychart.component.html',
  styleUrl: './mychart.component.css',
})
export class MychartComponent implements OnInit {
  constructor(private service: MasterService) {}

  chartdata: any;
  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];

  ngOnInit(): void {
    this.RenderChart(
      this.labeldata,
      this.realdata,
      this.colordata,
      'bar',
      'barchart'
    );
    this.RenderBubbleChart();
    this.RenderRadarChart();
    this.RenderPolarChart();
  }


  RenderPolarChart() {
   const polarChart = new Chart('polarchart', {
    type: 'polarArea',
    data: {
      labels: ['Red','Green','Yellow','Grey','Blue'],
      datasets: [{
        label:'Polar Area Dataset',
        data: [11,16,7,3,4],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ]
      }]
    },
    options: {}
   })
  }

  RenderRadarChart() {
    const radarChart = new Chart('radarchart', {
      type: 'radar',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'My Radar Chart',
            data: [75, 59, 90, 61, 56, 75, 50],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
          },
          {
            label: 'My Second Dataset',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      },
    });
  }

  RenderBubbleChart() {
    const canvas: any = document.getElementById('bubblechart');
    const ctx = canvas.getContext('2d');

    const bubblechart = new Chart(ctx, {
      type: 'bubble',
      data: {
        datasets: [
          {
            label: 'First Dataset',
            data: [
              {
                x: 10,
                y: 90,
                r: 10,
              },
              {
                x: 15,
                y: 16,
                r: 10,
              },
              {
                x: 30,
                y: 20,
                r: 10,
              },
              {
                x: 25,
                y: 8,
                r: 10,
              },
            ],
            backgroundColor: 'rgb(255,99,132)',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  RenderChart(
    labeldata: any,
    realdatadata: any,
    colordata: any,
    type: any,
    id: any
  ) {
    const myChart = new Chart('piechart', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 15, 2, 3],
            backgroundColor: [
              'rgba(255,99,132,0.2)',
              'rgba(54,162,235,0.2)',
              'rgba(255,206,86,0.2)',
              'rgba(72,192,192,0.2)',
              'rgba(153,102,255,0.2)',
              'rgba(255,159,64,0.2)',
            ],
            borderColor: ['rgba(255,99,132,1)'],
            borderWidth: 0.5,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
