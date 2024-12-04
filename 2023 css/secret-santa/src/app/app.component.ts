import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IconsComponent} from './shared/icons/icons.component';
import {AvatarComponent} from './shared/avatar/avatar.component';
import {InputFieldComponent} from './shared/input-field/input-field.component';
import {InputEmailComponent} from './shared/input-email/input-email.component';
import {InputPasswordComponent} from './shared/input-password/input-password.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IconsComponent, AvatarComponent, InputFieldComponent, InputEmailComponent, InputPasswordComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secret-santa';
  svgId = signal('eyeClosed');
  input_type = signal('password')
  showPassword() {
    if (this.svgId() === 'eyeClosed') {
      this.svgId.set('eyeOpened')
      this.input_type.set('text')
    }
    else {this.svgId.set('eyeClosed')
      this.input_type.set('password')
    }
  }
}
