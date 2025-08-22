import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar-component/sidebar-component';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet,SidebarComponent,Footer],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.css'
})
export class PublicLayout {

}
