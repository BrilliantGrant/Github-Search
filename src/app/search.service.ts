import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class ProfileService {
  private userName: string;
  accesstoken='1106eaa7ad516a667f2babac56c29be77c651cdc'

  constructor(private http:Http) {
console.log("");
this.userName = 'cruzlof';

  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.userName + "?access_token="+ this.accesstoken) 
    .map(res => res.json());



  }
  getProfileRepo(){
    return this.http.get("https://api.github.com/users/" + this.userName + "/repos?access_token="+ this.accesstoken) 
    .map(res => res.json());

  }
updateProfile(username:string){
  this.userName = username

}
}