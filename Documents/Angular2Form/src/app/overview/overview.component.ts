import { Component, OnInit, HostBinding } from '@angular/core';
import { moveOut } from '../router.animations';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.sass'],
  animations: [
    moveOut()
  ]
})
export class OverviewComponent implements OnInit {
  @HostBinding('@moveOut') moveOut;

  constructor() { }

  ngOnInit() {
  }

}
