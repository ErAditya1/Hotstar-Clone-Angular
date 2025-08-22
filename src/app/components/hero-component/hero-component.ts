import { Component } from '@angular/core';
import { LoginModal } from '../login-modal/login-modal';

@Component({
  selector: 'hero-component',
  imports: [LoginModal],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.css'
})
export class HeroComponent {

}
