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
  temp: [skill[]]
  selectedSkill: skill
  isDesktopDevice = this.dataService.isDesktopDevice

  ngOnInit() {
    this.getSkills();
  }

  getSkills(): void {
    this.dataService.getSkills().subscribe(data => {
      this.Data = data
      if (this.isDesktopDevice) {
        this.temp = [this.Data.splice(0, 4)];
        for (var i = 0; i < this.Data.length;) {
          this.temp.push(this.Data.splice(i, 4))
        }
      }
      else {
        this.temp = [this.Data.splice(0, 3)];
        for (var i = 0; i < this.Data.length;) {
          this.temp.push(this.Data.splice(i, 3))
        }

      }
    })




  }


}
