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
  tourJoueur: Boolean = false;
  etatPartie: Boolean = true;
  matrice: number[][] = this.MatricePuissance4Service.getMatricePuissance4();
  grille: number[][]= [[0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0],
                       [0,0,0,0,0,0,0]];

  @Input()
  Data: Joueur[] = [];
  reloadCurrentPage() {
    window.location.reload();
   }
  ngOnInit(): void 
  {
    
  }
  debutPartie(): boolean
  {
    return this.etatPartie = true;
  }
  finPartie(): boolean
  {
    return this.etatPartie = false;
  }
  Clique(i: number, j:number)
  {
    if(this.Data[0].getScore()<3 && this.Data[1].getScore()<3)
    {
    let Tombe = this.MatricePuissance4Service.checkColonne(j);
    const maCellule = document.getElementById(`${Tombe}-${j}`);
    if (maCellule && this.MatricePuissance4Service.MaMatrice[Tombe][j] == 0){
      if(this.tourJoueur==false)
      {
        this.tourJoueur=true;
        maCellule.classList.add('Joueur2');
        this.MatricePuissance4Service.MaMatrice[Tombe][j]=1;
        this.etatPartie = !this.MatricePuissance4Service.win(Tombe, j, 1);
        if(this.etatPartie == false){
          console.log("Joueur 2 a gagné");
          this.Data[1].setScore(this.Data[1].getScore() + 1);
        }
      }
      else
      {
        this.tourJoueur=false;
        maCellule.classList.add('Joueur1');
        this.MatricePuissance4Service.MaMatrice[Tombe][j]=2;
        this.etatPartie = !this.MatricePuissance4Service.win(Tombe, j, 2);
        if(this.etatPartie == false){
          console.log("Joueur 1 a gagné");
          this.Data[0].setScore(this.Data[0].getScore() + 1);
        }
      }
    }
    if(this.etatPartie==false){
      alert("La partie est terminée");
      this.grille= [[0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]];
      this.MatricePuissance4Service.clearMatricePuisance4();
      this.etatPartie=true;
    }
  }
  else
  {
    this.finPartie();
  }
}
}
