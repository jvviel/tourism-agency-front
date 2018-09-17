import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';
import { PaginaPacotesComponent } from './pagina-pacotes/pagina-pacotes.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    DataTableModule,
    TooltipModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [PaginaPacotesComponent],
  exports: [PaginaPacotesComponent]
})
export class PacotesModule { }
