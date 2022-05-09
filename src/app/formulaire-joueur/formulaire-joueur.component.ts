import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-formulaire-joueur',
  templateUrl: './formulaire-joueur.component.html',
  styleUrls: ['./formulaire-joueur.component.scss']
})

export class FormulaireJoueurComponent implements OnInit {
  // Création de myData qui permet de récupérer les données du formulaires des joueurs.
  myData: any[] | undefined;
  
  constructor(private router:Router){}
  versPartie(){
    this.router.navigate(['/debut-partie']);
  }
  @Output()
  sendRequestToFather = new EventEmitter();
  ngOnInit(): void {
  }
  // A la complétion du formulaire des joueurs, on envoit les noms dans Joueurs.
  onSubmit(form: NgForm) {
    this.myData = [form.value.Joueur1, form.value.Joueur2];
    console.log(this.myData);
    // On envoit Joueurs pour traitement
    this.sendRequestToFather.emit(this.myData);
  }
}
