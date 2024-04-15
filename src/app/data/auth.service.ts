import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: BehaviorSubject<string> = new BehaviorSubject('no user');
  user$: Observable<string> = this._user.asObservable();


  constructor() { }

  Login(user: string, pass: string) {
    console.log("llegaron al servicio: ", user, pass)
    this._user.next(user);
  }
}
