import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { Home } from '../home/home';

@Component({
  selector: 'app-movies',
  imports: [HeroComponent, Home],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class Movies {

}
