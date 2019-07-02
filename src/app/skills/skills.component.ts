import { Component, OnInit } from '@angular/core';
import { skill } from '../models/models'
import { DataService } from '../data.service'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private dataService: DataService) { }
  Data: skill[]
  temp:[skill[]]
  selectedSkill: skill
  isDesktopDevice = this.dataService.isDesktopDevice

  ngOnInit() {
    this.getSkills();
    setTimeout(()=>{
      this.temp = [this.Data.splice(0,3)];
        for (var i =0; i < this.Data.length;){
        this.temp.push(this.Data.splice(i,3))
      }
      console.log(this.temp)
      // if (this.Data.length % 3 != 3){
      //   this.temp.push(this.Data.splice(this.Data.length-(this.Data.length%3),this.Data.length))
      // }
    }, 3000)
  
  }

  getSkills(): void {
    this.dataService.getSkills().subscribe(data => {
    this.Data = data

     
    })

  }
 

}
