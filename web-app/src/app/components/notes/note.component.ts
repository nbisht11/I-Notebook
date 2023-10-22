import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface INote {
  _id: string;
  title: string;
  description: string;
  tag: string;
}

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Input() note:any;
  @Output() action = new EventEmitter();
  @ViewChild('closeEditModal') closeEditModal!: ElementRef;
  @ViewChild('closeDeleteModal') closeDeleteModal!: ElementRef;
  showDeleteModal = false;
  showEditModal = false;
  noteEditForm!: FormGroup;
  ngOnInit(): void {
    this.processNote();
    this.noteEditForm = this.formBuilder.group({
      '_id': new FormControl('', [Validators.required]),
      'title': new FormControl('',[Validators.required, Validators.minLength(3)]),
      'description': new FormControl('',[Validators.required, Validators.minLength(5)]),
      'tag': new FormControl('', [Validators.required, Validators.minLength(3)])
    });
    this.noteEditForm.setValue(this.note);
  }

  deleteNote(){
    this.action.emit({action:'delete', data: {id: this.note._id}});
    this.closeDeleteModal.nativeElement.click();
  }

  updateNote(){
    this.action.emit({action:'update', data: this.noteEditForm.value});
    this.closeEditModal.nativeElement.click();
  }

  processNote() {
    const propertyNames = ["_id", "title", "description", "tag"];
    let obj:any = {};
    for(let property of propertyNames) {
      obj[property] = this.note[property];
    }
    this.note = obj;
  }

  getFormControl(name:string):FormControl {
    return this.noteEditForm.get(name) ? <FormControl> this.noteEditForm.get(name) : new FormControl('', Validators.required);
  }

}
