import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginModal } from './components/login-modal/login-modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginModal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hotstar-developed By Aditya Kumar');
}
