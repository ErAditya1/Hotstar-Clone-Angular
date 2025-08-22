import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { Home } from '../home/home';

@Component({
  selector: 'app-shows',
  imports: [HeroComponent,Home],
  templateUrl: './shows.html',
  styleUrl: './shows.css'
})
export class Shows {

}
