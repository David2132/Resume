import { Component, OnInit } from '@angular/core';
import {Log,Visited} from "../models/models"
import {DataService} from "../data.service"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  log:Log
  visiters:Visited[]

  constructor(private dataService:DataService) { }

  ngAfterViewInit(){
    
    this.dataService.getLog().subscribe(data => {
      this.log = data[data.length-1]
    })
    this.getVisit();
 }
  ngOnInit() {
    this.dataService.postVisited().subscribe(data=>{console.log('posted')}, err=>console.log(err))
  }
  getVisit():void{
    this.dataService.getVisited().subscribe(data=>this.visiters=data)
  }
 
}
