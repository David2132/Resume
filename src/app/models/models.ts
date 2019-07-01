
export class skill {
    _id?: string;
    Name:string;
    Link: string;
    __v?: number
  }
export class education{
    _id?: string;
    School: string;
    Location: string;
    Grad: string;
    Bachelors: string;
    Major: string;
    __v?: number

}
export class experience {
  _id?: string;
  __v?: number;
  Name: String;
  Position: String;
  Location: String;
  Start: String;
  End: String

}
export class project{
  _id?: string;
  __v?: number;
  Name: String;
  Date: String;
  Description:String;
  Github: String;
  Link: String;

}
export class award{
  _id?: string;
  __v?: number;
  Title: String;
  Date:String;
}
export class Log{
  _id?:String;
  __v?:number;
  Description:String;
  Type:String;
  Date:String

}
export class Visited{
  _id?:String;
  __v?:number;
  Date?:string;
}