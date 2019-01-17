import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // ------------------------ Variable --------------------------
  IsAuth = false;

  constructor() { }

  // ---------------- Methodes ----------------------------------
  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.IsAuth = true;
            resolve(true);
          }, 2000
        )
      }
    );
  }

  signout() {
this.IsAuth = false;
  }
}
