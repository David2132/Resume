import { Component, OnInit } from '@angular/core';
import {Log,Visited} from "../models/models"
import {DataService} from "../data.service"
import { MatDialog , MatDialogConfig } from '@angular/material';
import {ContactComponent} from './contact/contact.component'
import { trigger, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations:[
    trigger('slideDown',[
      transition('void => *', [
        style({ marginTop:'-100%'}),
        animate(2000)
      ])
    ]),
    trigger('slideLeft',[
      transition('void => *', [
        style({ opacity:'0'}),
        animate(2000)
      ])
    ]),
    trigger('slideRight',[
      transition('void => *', [
        style({ opacity:'-100%'}),
        animate(2000)
      ])
    ])

    
  ]
})
export class MainComponent implements OnInit {

  log:Log
  visiters:Visited[]
  deviceInfo = false;
  loading = true;

  constructor(private dataService:DataService, private dialog:MatDialog) {
    this.deviceInfo = this.dataService.isDesktopDevice
   }
  

  ngAfterViewInit(){
    
    this.dataService.getLog().subscribe(data => {
      this.log = data[data.length-1]
    })
    this.getVisit();
 }
  ngOnInit() {
    this.dataService.postVisited().subscribe(data=>{console.log('posted')}, err=>console.log(err))
    if (this.visiters != undefined){
      this.loading = false;
      console.log("Loading")
    }

  }
  getVisit():void{
    this.dataService.getVisited().subscribe(data=>this.visiters=data)
  }
  
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(ContactComponent, dialogConfig);
}
 
}
