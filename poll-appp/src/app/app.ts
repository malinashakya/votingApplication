import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';  
import { PollComponent } from './poll/poll';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, PollComponent],   
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('poll-appp');
}
