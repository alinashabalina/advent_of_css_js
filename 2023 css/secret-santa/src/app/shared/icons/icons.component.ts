import { Component } from '@angular/core';
import { Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-icons',
  imports: [
    RouterLink
  ],
  templateUrl: './icons.component.html',
  standalone: true,
  styleUrl: './icons.component.css'
})
export class IconsComponent {
  @Input() svgId:string = ""
}
