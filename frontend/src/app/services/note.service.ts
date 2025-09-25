import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = 'http://localhost:3000/api/notes';

  constructor(private http: HttpClient) { }

  getNotes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  createNote(note: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, note);
  }
}