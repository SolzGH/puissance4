import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Joueur } from 'src/models/app.joueur';
import { MatricePuissance4Service } from '../matrice-puissance4.service';

@Component({
  selector: 'app-debut-partie',
  templateUrl: './debut-partie.component.html',
  styleUrls: ['./debut-partie.component.scss']
})

export class DebutPartieComponent implements OnInit 
{
  constructor(public MatricePuissance4Service: MatricePuissance4Service) {}
  // Tour Joueur permet de savoir si le joueur 1 ou le joueur 2 joue
  tourJoueur: Boolean = false;
  // Etat Partie permet de savoir si la partie est en cours "true" ou finie "false"
  etatPartie: Boolean = true;
  //Utilisation du service matrice-puissance4
  matrice: number[][] = this.MatricePuissance4Service.getMatricePuissance4();
  //Création de la grille vierge
  grille: number[][]= [[0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0]];
  // On reprend les données des joueurs. Ces dernières sont envoyés depuis Formulaire-Joueur
  @Input()
  Data: Joueur[] = [];
  reloadCurrentPage() {
    window.location.reload();
   }
  ngOnInit(): void {}
  // Début de la partie
  debutPartie(): boolean
  {
    return this.etatPartie = true;
  }
  // Fin de la partie
  finPartie(): boolean
  {
    return this.etatPartie = false;
  }
  // Clic sur la matrice
  Clique(i: number, j:number)
  {
    // Si un des joueurs atteint 3 victoire, alors la partie s'arrête
    if(this.Data[0].getScore()<3 && this.Data[1].getScore()<3)
    {
    // Tombe permet de simuler la chute du pion dans la grille (Valeur de j, j représentant les colonnes)
    let Tombe = this.MatricePuissance4Service.checkColonne(j);
    // MaCellule de connaitre 
    const maCellule = document.getElementById(`${Tombe}-${j}`);
    if (maCellule && this.MatricePuissance4Service.MaMatrice[Tombe][j] == 0){
      // On cherche a savoir quel joueur joue (Le Joueur 1 ou Le Joueur 2)
      if(this.tourJoueur==false)
      {
        this.tourJoueur=true;
        // On met a jour le texte pour le joueur 2
        maCellule.classList.add('Joueur2');
        // Le joueur 2 remplis la matrice avec un jeton "1"
        this.MatricePuissance4Service.MaMatrice[Tombe][j]=1;
        // On cherche a savoir si le joueur 2 gagne
        this.etatPartie = !this.MatricePuissance4Service.gagne(Tombe, j, 1);
        if(this.etatPartie == false){
          console.log("Joueur 2 a gagné");
          // On incrémente le score
          this.Data[1].setScore(this.Data[1].getScore() + 1);
        }
      }
      else
      {
        this.tourJoueur=false;
        // On met a jour le texte pour le joueur 1
        maCellule.classList.add('Joueur1');
        // Le joueur 1 remplis la matrice avec un jeton "2"
        this.MatricePuissance4Service.MaMatrice[Tombe][j]=2;
        // On cherche a savoir si le joueur 1 gagne
        this.etatPartie = !this.MatricePuissance4Service.gagne(Tombe, j, 2);
        if(this.etatPartie == false){
          console.log("Joueur 1 a gagné");
          // On incrémente le score
          this.Data[0].setScore(this.Data[0].getScore() + 1);
        }
      }
    }
    // On regarde si la partie est terminée
    if(this.etatPartie==false){
      alert("La partie est terminée");
      // Si la partie est terminé on réinitialise la matrice
      this.grille= [[0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]];
      // Et on utilise clearMatrice qui fais la même choses que this.grille (au dessus)
      this.MatricePuissance4Service.clearMatricePuisance4();
      // On relance une partie
      this.etatPartie=true;
    }
  }
  // La partie s'arrête si un des joueurs atteint 3 point
  else
  {
    this.finPartie();
  }
}
}
