import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //----------------------- Varaible -------------------//
  title = 'Amine';
  seconds: number;
  counterSubscription: Subscription;
  
  //------------------------- Constructeur ---------------// 

  constructor() { }

// //--------------------- Méthodes ---------------//
// ngOnInit methode authomatique 

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) =>{
        this.seconds = value;
      },
      (error) => {
        console.log('Uh-oh, an error occured! : ' + error);
      },
      () => {
        console.log('Observal complete');        
      }
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.counterSubscription.unsubscribe();
  }

}
