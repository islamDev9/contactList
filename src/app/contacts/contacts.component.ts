import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LatestContactsService } from './../services/latest-contacts.service';
import { ContactsService } from './../services/contacts.service';
import { NewContactService } from '../services/new-contact.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  latestContacts: any = [];
  recentContactsData: any = [];
  filteredRecentContacts: any = [];
  AllContacts: any = [];
  AllContactsData: any = [];
  contactsGroup: any = [];
  newContact: any;
  constructor(
    private _latestContactsServ: LatestContactsService,
    private _contactsServ: ContactsService,
    private _newContactServ: NewContactService) { }
  getLatestContacts() {
    this._latestContactsServ.getRecentContacts().subscribe((result: Array<Object>) => {
      this.latestContacts = result as string[];
      this.recentContactsData = this.latestContacts.data;
      let uniqueObject = {};
      for (let i in this.recentContactsData) {
        let objTitle = this.recentContactsData[i]['contactId'];
        uniqueObject[objTitle] = this.recentContactsData[i];
      }
      for (let i in uniqueObject) {
        this.filteredRecentContacts.push(uniqueObject[i]);
      }
    })
  }

  getAllContacts() {
    this._contactsServ.getContacts().subscribe((data: Array<Object>) => {
      this.AllContacts = data;
      let resultData = this.AllContacts.data;
      let newContact: any;
      this._newContactServ.currentMessage.subscribe(message => (newContact = message));
      resultData.push(newContact);
      let dataList = resultData.reduce((r, e) => {
        if (e.firstName != null) {
          let group = e.firstName[0].toUpperCase();
          if (!r[group]) r[group] = { group, children: [e] }
          else r[group].children.push(e);
        }
        return r;
      }, {})
      this.contactsGroup = Object.values(dataList);
      for (let i = 0; i < this.contactsGroup.length; i++) {
        this.AllContactsData.push(this.contactsGroup[i].children);
      }
    })
  }
  ngOnInit() {
    this.getLatestContacts();
    this.getAllContacts();
  }

}
