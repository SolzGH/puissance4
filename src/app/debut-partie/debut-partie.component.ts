import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  Joueur1!: Joueur;
  Joueur2!: Joueur;
  scoreJoueur1: Number = 0;
  scoreJoueur2: Number = 0;
  tourJoueur: Boolean = false;
  etatPartie: Boolean = true;
  matrice: number[][] = this.MatricePuissance4Service.getMatricePuissance4();
  grille: number[][]= [[0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0]];
  ngOnInit(): void 
  {
    console.log(this.matrice);
  }
  debutPartie(): boolean
  {
    return this.etatPartie = true;
  }
  finPartie(): boolean
  {
    return this.etatPartie = false;
  }
  Clique(value: number, i: number, j:number)
  {
    console.log('Colonne : ' + i + ' Hauteur : '  + j);
    let Tombe = this.MatricePuissance4Service.checkColonne(j);
    const maCellule = document.getElementById(`${Tombe}-${j}`);
    console.log("La cellule modifiée est la suivante");
    console.log(maCellule);
    if (maCellule){
      if(this.tourJoueur==false)
      {
        this.tourJoueur=true;
        console.log("Tour du joueur 2");
        maCellule.classList.add('Joueur2');
        if(value != 1)
        {
          this.MatricePuissance4Service.MaMatrice[Tombe][j]=1;
        }
        console.table(this.matrice);
      }
      else
      {
        this.tourJoueur=false;
        console.log("Tour du joueur 1");
        maCellule.classList.add('Joueur1');
        if(value != 1)
        {
          this.MatricePuissance4Service.MaMatrice[Tombe][j]=2;
        }
        console.table(this.matrice);
      }
    }/*
    for (let i=0; index < array.length; index++) {
      const element = array[index];
      
    }
          for (let i = 0; i < this.rows; i++) {
              count = (this.board[i][column] == player) ? count+1 : 0;
            if (count >= 4) return true;
          }*/
    if(this.etatPartie==false){
      console.log("La partie est terminée");
      /*if (4 Cases = 2) {
        // alors Joueur 2 gagne !
      }*/
    }
  }
}
