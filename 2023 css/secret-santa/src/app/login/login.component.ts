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
  ngOnInit() {
    if (new Date().getHours() >= 16) {
      this.mode.set('wrapper--dark')
    }
  }
}
