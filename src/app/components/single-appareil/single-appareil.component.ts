import { Component, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
 // ---------------------- Variable --------------------------------------
  name: string = 'Appareil';
  isAllumer: boolean;
 // index: number;
  constructor(private appareilService: AppareilService, private route : ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id).name;
    this.isAllumer = this.appareilService.getAppareilById(+id).IsAllumer;
  }

}
