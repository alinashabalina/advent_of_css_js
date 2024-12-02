import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-avatar-letter',
  imports: [],
  templateUrl: './avatar-letter.component.html',
  standalone: true,
  styleUrl: './avatar-letter.component.css'
})
export class AvatarLetterComponent {
  @Input() letter:string = ''
}
