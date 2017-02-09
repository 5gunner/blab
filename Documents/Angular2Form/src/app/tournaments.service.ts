import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';

@Injectable()
export class TournamentsService {

  constructor(private af: AngularFire) { }

  getTournaments() {
    this.af.database.list('tournaments');
  }

}
