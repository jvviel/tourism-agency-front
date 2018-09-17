import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaCategoriaComponent } from './pagina-categoria/pagina-categoria.component';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';

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
  declarations: [PaginaCategoriaComponent],
  exports: [PaginaCategoriaComponent]
})
export class CategoriaModule { }
