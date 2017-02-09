import { Observable } from 'rxjs/Observable';
import { Employee } from './../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(public af: AngularFire) {
  }

  ngOnInit() {
    
  }

}
