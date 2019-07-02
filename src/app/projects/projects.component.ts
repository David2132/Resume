import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {project} from '../models/models'
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  Data: project[];
  selectedProject:project;
  url:string
  isDesktopDevice = this.dataService.isDesktopDevice

  constructor(private dataService:DataService, private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.getProjects();
  }
  getProjects():void{
    this.dataService.getProjects().subscribe(data =>{
      this.Data = data.reverse()
    })
  }
  updateProject():void{
  //   console.log("Update")
  //   let obj:project =     {
  //     _id: "5d0b991a2dc05308ac9e08e4",
  //     Name: "Conversion101 ",
  //     Description: "A computer application to convert units of measurements to other units based on the user’s preference and what is listed.  ",
  //     __v:null,
  //     Date: "December 2018",
  //     Link:'',
  //     Github: ''
  // }
  //   this.dataService.updateProject(obj).subscribe(Data=>{
  //     console.log("Data was updated")
  //     this.getProjects();
  //   }, error =>{
  //     console.log(error)
  //   })
  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustHtml(url);
}
}