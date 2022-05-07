import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Joueur } from '../models/app.joueur';
import { NgForm } from '@angular/forms';
import { AppModule } from './app.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'puissance4';
  
  ngOnInit(): void {
  }
}
/*(value: String) {
  this.Joueur1 = new Joueur(value[0]);
  this.Joueur2 = new Joueur(value[1]);
  this.gameStart = true;
}
*/
