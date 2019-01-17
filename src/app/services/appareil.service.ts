import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  // -------------------- Variables ----------------------------- 
  appareilSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      IsAllumer: true
    },
    {
      id: 2,
      name: 'Frigo',
      IsAllumer: false
    },
    {
      id: 3,
      name: 'Ordinateur',
      IsAllumer: true
    }
  ];

  constructor() { }


  switchOnAll() {
    this.appareils.forEach(function (value) {
      value.IsAllumer = true;
      //this.appareilSubject.emitAppareilSubject();
    });
  }

  switchOffAll() {
    for (let a of this.appareils) {
      a.IsAllumer = false;
      this.emitAppareilSubject();
    };
  }

  switchOnOff(i: number) {
    if (this.appareils[i].IsAllumer) {
        this.appareils[i].IsAllumer = false;
        this.emitAppareilSubject();
    } else {
        this.appareils[i].IsAllumer = true;
        this.emitAppareilSubject();
    }
  }

  getAppareilById(id: number){
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }

  emitAppareilSubject(){
    this.appareilSubject.next(this.appareils.slice());
  }


}
