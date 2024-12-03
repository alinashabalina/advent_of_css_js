import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input-field',
  imports: [],
  templateUrl: './input-field.component.html',
  standalone: true,
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {
  @Input() type:string = ''
  @Input() placeholder:string = ''
}
