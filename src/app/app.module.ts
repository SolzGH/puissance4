import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DebutPartieComponent } from './debut-partie/debut-partie.component';
import { FormulaireJoueurComponent } from './formulaire-joueur/formulaire-joueur.component';
import { routing } from './app.routing';
import { LobbyComponent } from './lobby/lobby.component';

@NgModule({
  declarations: [
    AppComponent,
    DebutPartieComponent,
    FormulaireJoueurComponent,
    LobbyComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
