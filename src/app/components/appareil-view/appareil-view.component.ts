import { Component, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/services/appareil.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
//----------------------- Varaible -------------------//

appareils: Array<any>;
  isAuth: boolean = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    )
  });
//------------------------- Constructeur ---------------// 
constructor(private appareilservice: AppareilService, private autoservice: AuthService) {
  this.isAuth = this.autoservice.IsAuth;
  // setTimeout(
  //   () => {
  //     this.isAuth = true;
  //   }, 4000
  // )
}
// //--------------------- Méthodes ---------------//
// ngOnInit methode authomatique 
ngOnInit() {
  this.appareils = this.appareilservice.appareils;
}


onAllumer() {
  this.appareilservice.switchOnAll();
}

onEtient() {
  if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
    this.appareilservice.switchOffAll();
  } else {
    return null;
  }
}

  
}
