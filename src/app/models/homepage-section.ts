import { Contact } from "./contact";

export class HomepageSection {

    // text?: string;
    // imagePath?: string;
    id: string;
    contact?: Contact;

    constructor (
        public title: string,
    ) {
        this.id = crypto.randomUUID().substring(0, 8);
        
    };

    // setText(text: string): void {
    //     this.text = text;
    // }

    // withText(text: string): HomepageSection {
    //     this.setText(text);
    //     return this;
    // }

    // setImage(imgPath: string): void {
    //     this.imagePath = imgPath;
    // }
    
    // withImage(imgPath: string): HomepageSection {
    //     this.setImage(imgPath);
    //     return this;
    // }

    setContact(contact: Contact): void{
        this.contact = contact;
    }
    
    withContact(contact: Contact): HomepageSection {
        this.contact = contact;
        return this;
    }

}