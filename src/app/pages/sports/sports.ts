import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { Home } from '../home/home';

@Component({
  selector: 'app-sports',
  imports: [HeroComponent, Home],
  templateUrl: './sports.html',
  styleUrl: './sports.css'
})
export class Sports {

}
