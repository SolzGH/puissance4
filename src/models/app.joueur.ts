
export class Joueur {
    NomJoueur!: String;
    Score!: Number;
    Tour!: Boolean;
    constructor(NomJoueur: String){
        this.NomJoueur= NomJoueur;       
        this.Score= 0;     
        this.Tour=false;
    }
    public setNomJoueur(NomJoueur: String) {
      this.NomJoueur=NomJoueur;
    }
    public setScore(Score: Number) {
      this.Score=Score;
    }
    public setTour(Tour: Boolean) {
      this.Tour=Tour;
    }
    public getNomJoueur() {
      return this.NomJoueur;
    }
    public getScore() {
      return this.Score;
    }
    public getTour() {
      return this.Tour;
    }
  }