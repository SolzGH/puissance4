import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Joueur } from 'src/models/app.joueur';
import { MatricePuissance4Service } from '../matrice-puissance4.service';
@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {
  // Déclaration de mes variables
  Joueur1!: Joueur;
  Joueur2!: Joueur;
  score: Number = 0;
  tourJoueur: Boolean = false;
  etatPartie: Boolean = false;
  constructor() { }
  myData: Joueur[] = [this.Joueur1, this.Joueur2];
  sendData(value: string) {
    this.Joueur1 = new Joueur(value[0]);
    this.Joueur2 = new Joueur(value[1]);
    this.Joueur1.setScore(0);
    this.Joueur2.setScore(0);
    this.etatPartie = true;
  }
  ngOnInit(): void {
  }
}
