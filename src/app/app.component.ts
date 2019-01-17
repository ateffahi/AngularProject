import { Component, OnInit } from '@angular/core';
import { compileNgModule } from '@angular/core/src/render3/jit/module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //----------------------- Varaible -------------------//
  title = 'Amine';
  
  //------------------------- Constructeur ---------------// 

  constructor() { }

// //--------------------- Méthodes ---------------//
// ngOnInit methode authomatique 

  ngOnInit() {
  }

}
