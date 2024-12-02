import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IconsComponent} from './shared/icons/icons.component';
import {AvatarComponent} from './shared/avatar/avatar.component';
import {AvatarHatComponent} from './shared/avatar-hat/avatar-hat.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IconsComponent, AvatarComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secret-santa';
}
