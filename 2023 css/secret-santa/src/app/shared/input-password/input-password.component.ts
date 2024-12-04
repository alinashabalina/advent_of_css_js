import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input-password',
  imports: [],
  templateUrl: './input-password.component.html',
  standalone: true,
  styleUrl: './input-password.component.css'
})
export class InputPasswordComponent {
  @Input() svgId:string = ''
  @Input() input:string = ''
}
