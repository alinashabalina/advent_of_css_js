import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent {
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
