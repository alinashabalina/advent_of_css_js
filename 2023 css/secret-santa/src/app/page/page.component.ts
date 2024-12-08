import {Component, signal} from '@angular/core';
import {SubmitComponent} from '../shared/submit/submit.component';
import {InputFieldComponent} from '../shared/input-field/input-field.component';
import {LoginFormComponent} from '../login-form/login-form.component';
import {IconsComponent} from '../shared/icons/icons.component';

@Component({
  selector: 'app-page',
  imports: [
    SubmitComponent,
    InputFieldComponent,
    LoginFormComponent,
    IconsComponent
  ],
  templateUrl: './page.component.html',
  standalone: true,
  styleUrl: './page.component.css'
})
export class PageComponent {
  mode = signal('wrapper')
  footer_mode = signal('footer')
  logo_mode = signal('logo')
  ngOnInit():void {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.mode.set('wrapper--dark')
      this.footer_mode.set('footer--dark')
      this.logo_mode.set('logo--dark')
    }
    else {
      if (new Date().getHours() >= 16) {
        this.mode.set('wrapper--dark')
        this.footer_mode.set('footer--dark')
        this.logo_mode.set('logo--dark')
      } else {
        this.mode.set('wrapper')
        this.footer_mode.set('footer')
        this.logo_mode.set('logo')
      }
    }
  }
}
