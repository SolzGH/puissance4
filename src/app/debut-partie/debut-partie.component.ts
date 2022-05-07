import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatricePuissance4Service } from '../matrice-puissance4.service';

@Component({
  selector: 'app-debut-partie',
  templateUrl: './debut-partie.component.html',
  styleUrls: ['./debut-partie.component.scss']
})

export class DebutPartieComponent implements OnInit 
{
  constructor(public MatricePuissance4Service: MatricePuissance4Service) {}
  score: Number = 0;
  tourJoueur: Boolean = false;
  etatPartie: Boolean = false;
  matrice: number[][] = this.MatricePuissance4Service.getMatricePuissance4();

  ngOnInit(): void {
    console.log(this.matrice);
  }
  debutPartie(){
    this.etatPartie = true;
  }

  finPartie(){
    //if () {
      
    //}
    this.etatPartie = false;
  }
  Clique(value: number, i: number, j:number){
    console.log(value+ ' ' + i + ' '  + j);
    let Tombe = this.MatricePuissance4Service.checkColonne(j);
    console.log(j);
    const cell = document.getElementById(`${Tombe-1}-${j}`);
    const cache1 = document.getElementById(`cache1`);
    console.log(j);
    console.log(cell);
    if (cell){
      if(this.etatPartie==false){
        this.etatPartie=true;
        console.log("Tour du joueur 2");
        cell.classList.add('Joueur2');
        cache1?.classList.add('cachéJoueur1');
        if(value != 1){
          this.MatricePuissance4Service.MaMatrice[Tombe][j]=1;
        }
      console.table(this.matrice);
      }
      else
      {
        this.etatPartie=false;
        console.log("Tour du joueur 1");
        cell.classList.add('Joueur1');

        if(value != 1){
          this.MatricePuissance4Service.MaMatrice[Tombe][j]=1;
        }
        console.table(this.matrice);
      }
    }
  }
}
