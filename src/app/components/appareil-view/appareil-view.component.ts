import { Component, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/services/appareil.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  //----------------------- Varaible -------------------//

  appareils: Array<any>;
  appareilSubscription: Subscription;
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
    this.appareilSubscription = this.appareilservice.appareilSubject.subscribe(
      (appareils :any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilservice.emitAppareilSubject();
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

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.appareilSubscription.unsubscribe();
  }
  


}
