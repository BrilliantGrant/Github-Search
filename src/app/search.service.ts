import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class ProfileService {
  private userName: string;
  private clientId = ' Iv1.29805752b1385b11';
  private clientSecret =' 00692eb30486c8f001f0c89cf4309fa3cbc642ef';


  constructor(private http:Http) {
console.log("");
this.userName = 'cruzlof';

  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.userName + "?client_Id=" + this.clientId + "&client_Secret=" + this.clientSecret) .map(res => res.json());



  }
  getProfileRepo(){
    return this.http.get("https://api.github.com/users/" + this.userName + "/repos?client_Id=" + this.clientId + "&client_Secret=" + this.clientSecret) .map(res => res.json());

  }
updateProfile(username:string){
  this.userName = username

}
}