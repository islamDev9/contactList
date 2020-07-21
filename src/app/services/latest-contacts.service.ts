import { Injectable } from '@angular/core';
// import * as data from '../db/recent-contact.json';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LatestContactsService {

  constructor(private http: HttpClient) { }
  getRecentContacts() {
    let jsonUrl = 'assets/json/recent-contact.json';
    return this.http.get(jsonUrl);
  }
}
