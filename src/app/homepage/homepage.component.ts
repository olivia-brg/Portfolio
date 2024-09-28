import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    ContactComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  onContactClick() {
    this.router.navigateByUrl('contact');
  }
}
