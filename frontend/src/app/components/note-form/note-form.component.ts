import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.css'
})
export class NoteFormComponent {
  note = { title: '', content: '' };
  loading = false;

  constructor() { } // No service injection

  onSubmit(): void {
    console.log('Form submitted:', this.note);
    alert('Note created: ' + this.note.title);
    
    // Simple redirect after 1 second
    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  }
}