import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }
  getContacts() {
    let jsonUrl = 'assets/json/contacts.json';
    return this.http.get(jsonUrl);
  }
}
