import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  addNote(note:any){
    const url = environment.NOTE_HOST+environment.CREATE_NOTE_ENDPOINT;
    return this.http.post(url,note);
  }
}
