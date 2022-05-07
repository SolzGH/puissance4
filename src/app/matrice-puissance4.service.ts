import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatricePuissance4Service {
  constructor() { }
  MaMatrice: number[][]= [[0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0]];
  getMatricePuissance4(){
    return this.MaMatrice;
  }
  checkColonne(j : number){
  let Compte=0;
  for (let i = 1; i<6; i++) {
    if (this.MaMatrice[i][j]==0) {
      Compte=i;
      }
    }
    return Compte;
  }
}