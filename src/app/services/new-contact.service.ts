import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { AddNewContactComponent } from '../add-new-contact/add-new-contact.component';
@Injectable({
  providedIn: 'root'
})
export class NewContactService {
  public editDataDetails: any = [];
  public contactData: AddNewContactComponent = {} as AddNewContactComponent;
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  constructor() { }
}
