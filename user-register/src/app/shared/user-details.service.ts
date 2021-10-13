import { Injectable } from '@angular/core';
import { UserDetails } from './user-details.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http:HttpClient) { }

  formData:UserDetails = new UserDetails();
  readonly baseURL = 'http://localhost:5000/api/UserRegister'
  list: UserDetails[];

  postUserDetails() {
   return this.http.post(this.baseURL, this.formData);
  }

  refreshLists() {
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as UserDetails[]);
  }
  
}
 