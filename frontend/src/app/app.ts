import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // Remove NoteListComponent and NoteFormComponent from here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Notes Manager';
}