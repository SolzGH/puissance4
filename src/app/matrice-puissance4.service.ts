import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatricePuissance4Service {
  constructor() { }
  // Déclaration de MaMatrice vierge
  MaMatrice: number[][]= [[0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0]];
  getMatricePuissance4(){
    return this.MaMatrice;
  }
  // Réinitialisation de la matrice
  clearMatricePuisance4(){
    this.MaMatrice= [[0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0]];
  }
  // On check les colonnes
  checkColonne(j : number){
  let Compte=0;
  for (let i = 1; i<6; i++) {
    if (this.MaMatrice[i][j]==0) {
      Compte=i;
      }
    }
    return Compte;
  }

  // Regarder si 4 même valeur sont alignés horizontalement ou verticalement ou diagonalement sur MaMatrice
  // On utilisera jetonAlignés pour compter si 4 jetons sont alignés
  gagne(ligne: number, colonne: number, verifJoueur: number) {
        // Horizontalement
        let jetonAlignes = 0;
        for (let j = 0; j < 7; j++) {
          jetonAlignes = (this.MaMatrice[ligne][j] == verifJoueur) ? jetonAlignes+1 : 0;
          if (jetonAlignes >= 4) return true;
        }
        // Verticalement
        jetonAlignes = 0;
        for (let i = 0; i < 6; i++) {
          jetonAlignes = (this.MaMatrice[i][colonne] == verifJoueur) ? jetonAlignes+1 : 0;
            if (jetonAlignes >= 4) return true;
        }
        // Diagolalement
        jetonAlignes = 0;
        let operationColonne = ligne - colonne;
        for (let i = Math.max(operationColonne, 0); i < Math.min(6, 7 + operationColonne); i++) {
          jetonAlignes = (this.MaMatrice[i][i-operationColonne] == verifJoueur) ? jetonAlignes+1 : 0;
            if (jetonAlignes >= 4) return true;
        }
        // Diagolalement inverse
        jetonAlignes = 0;
        operationColonne = ligne + colonne;
        for (let i = Math.max(operationColonne - 7 + 1, 0); i < Math.min(6, operationColonne + 1); i++) {
          jetonAlignes = (this.MaMatrice[i][operationColonne-i] == verifJoueur) ? jetonAlignes+1 : 0;
          if (jetonAlignes >= 4) return true;
    }
    return false;
  }
}