import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private noteService: NoteService) { }
  notes:any;
  ngOnInit(): void {
    this.noteService.getAllNotes().subscribe((notes:any) => {
      this.notes = notes
    });
  }

  handleNoteEvents(event:any) {
    switch (event.action) {
      case "update":
        this.updateNote(event.data);
        break;
      case "delete":
        this.deleteNote(event.data);
        break;
      default:
        alert("Wrong event received");
    }
  }

  updateNote(data:any) {
    console.log("Update successfull for note -> ", data._id);
    //this.noteService.updateNote().subscribe();
  }

  deleteNote(data:any) {
    console.log("Delete successfull");
  }

}
