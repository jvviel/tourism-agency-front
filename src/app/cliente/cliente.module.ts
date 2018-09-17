import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';
import {InputMaskModule} from 'primeng/inputmask';
import {PasswordModule} from 'primeng/password';
import {FieldsetModule} from 'primeng/fieldset';

import { PaginaClienteComponent } from './pagina-cliente/pagina-cliente.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    InputTextModule,
    BrowserAnimationsModule,
    BrowserModule,
    InputMaskModule,
    PasswordModule,
    FormsModule,
    FieldsetModule
  ],
  declarations: [PaginaClienteComponent],
  exports: [PaginaClienteComponent]
})
export class ClienteModule { }
