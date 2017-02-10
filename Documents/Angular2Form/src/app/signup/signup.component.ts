import { Component, OnInit } from '@angular/core';
import { moveOut } from '../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass'],
  animations: [
    moveOut()
  ],
  host: {'[@moveOut]': ''}
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
