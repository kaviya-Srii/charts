import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MychartComponent } from "./mychart/mychart.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MychartComponent]
})
export class AppComponent {
  title = 'charts';
}

