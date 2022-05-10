import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Router} from '@angular/router';
import { DebutPartieComponent } from './debut-partie/debut-partie.component';
import { LobbyComponent } from './lobby/lobby.component';
import { FormulaireJoueurComponent } from './formulaire-joueur/formulaire-joueur.component';
// Route (Vu en TP)
const APP_ROUTING: Routes = [
    {path: 'debut-partie', component: DebutPartieComponent},
    {path: '', component: LobbyComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTING);