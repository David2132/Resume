import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material/';
import { DataService } from 'src/app/data.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {Contact} from '../../models/models'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  registeredForm: FormGroup
  constructor(public _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ContactComponent>, private dataService: DataService, private fb: FormBuilder, ) { }

  ngOnInit() {
    this.registeredForm = this.fb.group({

      First_Name: new FormControl((' '), [
        Validators.required,
        Validators.maxLength(35),
        Validators.minLength(2),
        Validators.pattern('[a-zA-Z ]*')
      ]),
      Last_Name: new FormControl(' ', [
        Validators.required,
        Validators.maxLength(35),
        Validators.minLength(2),
        Validators.pattern('[a-zA-Z ]*')
      ]),
      Text: new FormControl('', [
        Validators.required
      ]),
      Subject: new FormControl('', [
        Validators.required
      ]),
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern( + '@' + '[a-zA-Z]+' + '.' + '[a-zA-Z]*')
      ]),


    })

  }
  closeDialog() {
    this.openSnackBar('Message was NOT sent!', 'Close');

    this.dialogRef.close()
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 7000,
    });
  }
  get First_Name() { return this.registeredForm.get('First_Name'); }
  get Last_Name() { return this.registeredForm.get('Last_Name'); }
  get Subject() { return this.registeredForm.get('Subject'); }
  get Email() { return this.registeredForm.get('Email') }
  get Text() { return this.registeredForm.get('Text') }
  onSave(): void {
    try {
      if (this.Email.errors.pattern) {
        this.openSnackBar('Email is not filled in correctly!', 'Close');
      }
      else if (this.First_Name.errors || this.Last_Name.errors || this.Subject.errors || this.Text.errors || this.Email.errors) {
        this.openSnackBar('Required fields are not filled in correctly!', 'Close');
      }
      else {
        var contact:Contact ={
          First_Name:this.First_Name.value,
          Last_Name:this.Last_Name.value,
          Email: this.Email.value,
          Subject:this.Subject.value,
          Text:this.Text.value
        }
        this.dataService.postMessage(contact).subscribe(data =>{
          console.log("Message was sent")
        }, error =>{
          console.log(error)
        })
        console.log(contact)
        this.openSnackBar('Message was sent!', 'Close');

      }
    }
    catch{
      var contact:Contact ={
        First_Name:this.First_Name.value,
        Last_Name:this.Last_Name.value,
        Email: this.Email.value,
        Subject:this.Subject.value,
        Text:this.Text.value
      }
      this.dataService.postMessage(contact).subscribe(data =>{
        console.log("Message was sent")
      }, error =>{
        console.log(error)
      })
      this.openSnackBar('Message was sent!', 'Close');
      this.dialogRef.close()
    }

  }
}
