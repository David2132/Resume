import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service"
import {education} from "../models/models"
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  Data:education[];
  selectedData:education;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getEducation();
  }
  getEducation():void{
    this.dataService.getEducations().subscribe(data => this.Data = data
      )
    
  }
}
