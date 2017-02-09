import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor() { }

  canActivate(): any {
    let answer = prompt('What is your password?') === 'Pratikrai980' ? true : false;
    return answer;
  }
}
