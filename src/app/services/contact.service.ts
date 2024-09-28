import { Injectable } from "@angular/core";
import { Contact } from "../models/contact";

@Injectable({
    providedIn: 'root',
})

export class ContactService {

    private contacts: Contact = new Contact(
        `Contact me`,
        `If you'd like to get in touch, feel free to reach out through any of the following methods (due to too much cold calling, please leave me a message so that I can get back to you)`,
        `olivia.bergalia@gmail.com`,
        `621843088`,
        `olivia-bergaglia/`,
        `olivia-brg`
    )

    getContacts(): Contact {
        return this.contacts;
      }
}