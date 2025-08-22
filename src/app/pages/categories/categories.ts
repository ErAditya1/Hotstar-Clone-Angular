import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { Home } from '../home/home';

@Component({
  selector: 'app-categories',
  imports: [HeroComponent, Home],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class Categories {

}
