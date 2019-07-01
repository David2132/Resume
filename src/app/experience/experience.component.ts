import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service"
import {experience} from '../models/models' 
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  Data:experience[]
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getExperiences();
  }
  getExperiences():void{
    this.dataService.getExperiences().subscribe(data=>this.Data=data.reverse())
  }
}
