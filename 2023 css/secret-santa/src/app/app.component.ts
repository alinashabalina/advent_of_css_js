import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IconsComponent} from './shared/icons/icons.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IconsComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secret-santa';
}