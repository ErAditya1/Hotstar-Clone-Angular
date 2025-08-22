import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { Home } from '../home/home';

@Component({
  selector: 'app-creators',
  imports: [HeroComponent, Home],
  templateUrl: './creators.html',
  styleUrl: './creators.css'
})
export class Creators {

}
