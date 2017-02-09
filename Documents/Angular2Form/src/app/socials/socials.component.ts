import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.sass']
})
export class SocialsComponent implements OnInit {
  params;
  constructor(private route: Router, private routeParams: ActivatedRoute) {
    this.routeParams.params.subscribe(snap => this.params = snap['id']);
  }

  ngOnInit() {
  }

}
