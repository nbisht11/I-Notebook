import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private noteService: NoteService,
    private router: Router) { }

  notesForm!: FormGroup;
  noteCreationFailed: boolean = false;

  ngOnInit(): void {
    this.notesForm = this.formBuilder.group({
      'title': new FormControl('',[Validators.required, Validators.minLength(3)]),
      'description': new FormControl('',[Validators.required, Validators.minLength(5)]),
      'tag': new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  getFormControl(name:string):FormControl {
    return this.notesForm.get(name) ? <FormControl> this.notesForm.get(name) : new FormControl('', Validators.required);
  }

  addNote(){
    if(this.notesForm.invalid) return;
    this.noteService.addNote(this.notesForm.value).subscribe((data:any)=> {},
      (err:any)=> this.noteCreationFailed = true);
  }

}
