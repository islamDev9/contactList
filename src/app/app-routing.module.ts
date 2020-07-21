import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';
import { ContactsComponent } from './contacts/contacts.component';
const routes: Routes = [
  { path: "", redirectTo: "/contacts", pathMatch: "full" },
  { path: "contacts", component: ContactsComponent },
  { path: "addcontact", component: AddNewContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
