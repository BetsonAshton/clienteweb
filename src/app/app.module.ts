import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CadastrarClienteComponent } from './components/cadastrar-cliente/cadastrar-cliente.component';
import { ConsultarClienteComponent } from './components/consultar-cliente/consultar-cliente.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'consultar-cliente' },
  { path: 'cadastrar-cliente', component: CadastrarClienteComponent },
  { path: 'consultar-cliente', component: ConsultarClienteComponent },
  { path: 'editar-cliente/:id', component: EditarClienteComponent }
  

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CadastrarClienteComponent,
    ConsultarClienteComponent,
    EditarClienteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
