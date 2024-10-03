import { Injectable } from "@angular/core";
import { Contact } from "../models/contact";

@Injectable({
    providedIn: 'root',
})

export class ContactService {

    private contacts: Contact = new Contact(
        `olivia.bergalia@gmail.com`,
        `621843088`,
        `https://www.linkedin.com/in/olivia-bergaglia/`,
        `https://github.com/olivia-brg`
    )

    getContacts(): Contact {
        return this.contacts;
      }
}