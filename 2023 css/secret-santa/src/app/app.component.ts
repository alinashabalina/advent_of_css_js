import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IconsComponent} from './shared/icons/icons.component';
import {AvatarComponent} from './shared/avatar/avatar.component';
import {InputFieldComponent} from './shared/input-field/input-field.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IconsComponent, AvatarComponent, InputFieldComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secret-santa';
}
