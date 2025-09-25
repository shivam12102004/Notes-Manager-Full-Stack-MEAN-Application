import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Simple function to use service without injection issues
const getNotesFromAPI = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/notes');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    return { success: false, data: [] };
  }
};

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent implements OnInit {
  notes: any[] = [];
  loading = false;
  error = '';

  constructor() { }

  async ngOnInit(): void {
    this.loading = true;
    
    try {
      const result = await getNotesFromAPI();
      if (result.success) {
        this.notes = result.data;
      } else {
        this.error = 'Could not load notes from backend';
        // Fallback to sample data
        this.notes = [
          { title: 'Sample 1', content: 'Backend not connected', createdAt: new Date() }
        ];
      }
    } catch (error) {
      this.error = 'Backend connection failed';
      this.notes = [
        { title: 'Offline Mode', content: 'Using sample data', createdAt: new Date() }
      ];
    }
    
    this.loading = false;
  }
}