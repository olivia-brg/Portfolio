import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent implements OnInit {

  contact!: Contact;

  constructor(
    private contactService: ContactService,
  ) {};

  ngOnInit(): void {
      this.contact = this.contactService.getContacts();      
  }

}
