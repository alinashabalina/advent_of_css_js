import { Component } from '@angular/core';
import { Input} from '@angular/core';

@Component({
  selector: 'app-icons',
  imports: [],
  templateUrl: './icons.component.html',
  standalone: true,
  styleUrl: './icons.component.css'
})
export class IconsComponent {
  @Input() svgId:string = ''
}
