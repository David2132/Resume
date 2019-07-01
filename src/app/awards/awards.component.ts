import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { award } from '../models/models'
@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {
  Data: award[]
  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log("HELLLOOOOOOOOO")
    this.getAwards();
  }
  // postAward(): void {
  //   var x = {
  //     Title: "Dean's List",
  //     Date: "Spring 2017"
  //   }
  //   this.dataService.postAward(x).subscribe(data => { console.log("Post was successful"), this.getAwards(); }, err => console.log(err))
  // }
  getAwards(): void {
    this.dataService.getAwards().subscribe(data => this.Data = data)
  }
}
