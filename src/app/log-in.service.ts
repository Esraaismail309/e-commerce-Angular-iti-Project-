import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  private logdInbehavior = new BehaviorSubject(false)

  // isLogged = this.logdInbehavior.asObservable();

  getLoggedIn(){
   return this.logdInbehavior
  }
  setIsLogIn(newValue) {
    this.logdInbehavior.next(newValue)
  }
  constructor() { }

}
