import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from 'src/app/services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  //----------------- Varaible -------------------//

  @Input() AppareilName: string;
  @Input() AppareilStatut: boolean;
  @Input() index: number;
  @Input() id: number;
  //pixel = '20px';
  // pixel = '20px';
  // ---------------------------------------------//


  //----------------- Constructeur ---------------// 
  constructor(private appareilservice : AppareilService) { }
  // ---------------------------------------------//



  //----------------- Méthodes ------------------// 
  ngOnInit() {
  }


  getStatus() {
    if (this.AppareilStatut) {
      return 'Allumé';
    }
    else {
      return 'étient';
    }
  }

  getColor() {
    if (this.AppareilStatut === true) {
      return 'green';
    } else if (this.AppareilStatut === false) {
      return 'red';
    }
  }

  OnOFF() {
    this.appareilservice.switchOnOff( this.index);
  }
  // --------------------------------------------//
}
