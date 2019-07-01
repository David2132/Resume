import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import {skill,education,award,experience,project,Log,Visited} from './models/models'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  Skill:skill;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
   }
   baseURL = "https://resume-backend-david.herokuapp.com/"
  constructor(private httpClient:HttpClient) {
    
  }
  getSkills(){
    return this.httpClient.get<skill[]>(this.baseURL+"skill");
  }
  getSkill(data:skill){
    return this.httpClient.get<skill>(this.baseURL+'skill/'+data._id)
  }
  postSkill(data:skill){
    return this.httpClient.post(this.baseURL+'skill/',data)
  }
  updateSkill(data:skill){
    return this.httpClient.patch(this.baseURL+'skill/'+ data._id,data);
  }
  deleteSkill(data:skill){
    return this.httpClient.delete(this.baseURL+'skill/'+data._id);
  }
  getEducations(){
    return this.httpClient.get<education[]>(this.baseURL+'education/');
  } 
  getEducation(data:education){
    return this.httpClient.get<education>(this.baseURL+'education/'+data._id)
  }
  postEducation(data:education){
    return this.httpClient.post(this.baseURL+'education/',data)
  }
  updateEducastion(data:education){
    return this.httpClient.patch(this.baseURL+'education/'+data._id,data);
  }
  deleteEducation(data:education){
    return this.httpClient.delete(this.baseURL+'education/'+data._id);
  }
  getExperiences(){
    return this.httpClient.get<experience[]>(this.baseURL+'experience/');
  }
  getExperience(data:experience){
    return this.httpClient.get<experience>(this.baseURL+'experience/'+data._id)
  }
  postExperience(data:experience){
    return this.httpClient.post(this.baseURL+'experience/',data)
  }
  updateExperience(data:experience){
    return this.httpClient.patch(this.baseURL+'experience/',data);
  }
  deleteExperience(data:experience){
    return this.httpClient.delete(this.baseURL+'experience/'+data._id+data._id);
  }
  getProjects(){
    return this.httpClient.get<project[]>(this.baseURL+'project/');
  }
  getProject(data:project){
    return this.httpClient.get<project>(this.baseURL+'project/'+data._id)
  }
  postProject(data:project){
    return this.httpClient.post(this.baseURL+'project/',data)
  }
  updateProject(data:project){
    return this.httpClient.patch(this.baseURL+'project/'+data._id,data);
  }
  deleteProject(data:project){
    return this.httpClient.delete(this.baseURL+'project/'+data._id);
  }
  getAwards(){
    return this.httpClient.get<award[]>(this.baseURL+'award/');
  }
  getAward(data:award){
    return this.httpClient.get<award>(this.baseURL+'award/'+data._id)
  }
  postAward(data:award){
    console.log("service")
    return this.httpClient.post(this.baseURL+'award/',data)
  }
  updateAward(data:award){
    return this.httpClient.patch(this.baseURL+'award/' + data._id,data);
  }
  deleteAward(data:award){
    return this.httpClient.delete(this.baseURL+'award/'+data._id);
  }
  getLog(){
    return this.httpClient.get<Log[]>(this.baseURL)
  }
  getVisited(){
    return this.httpClient.get<Visited[]>(this.baseURL+'visited/')
  }
  postVisited(){
    return this.httpClient.post(this.baseURL+'visited/', {})
  }
}