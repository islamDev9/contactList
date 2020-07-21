import { Component, OnInit } from '@angular/core';
import { NewContactService } from '../services/new-contact.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.css']
})
export class AddNewContactComponent implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;

  constructor(private newContactServ: NewContactService, private location: Location) { }

  ngOnInit() {
  }

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
  submitContact(addNewForm) {
    this.newContactServ.changeMessage(addNewForm.value);
    this.location.back();
  }
}
