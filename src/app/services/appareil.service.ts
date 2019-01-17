import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  // -------------------- Variables ----------------------------- 
  appareils = [
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
    });
  }

  switchOffAll() {
    for (let a of this.appareils) {
      a.IsAllumer = false;
    };
  }

  switchOnOff(i: number) {
    if (this.appareils[i].IsAllumer) {
        this.appareils[i].IsAllumer = false;
    } else {
        this.appareils[i].IsAllumer = true;
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


}
