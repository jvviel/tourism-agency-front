import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaHotelComponent } from './pagina-hotel/pagina-hotel.component';
import { BrowserModule } from '@angular/platform-browser';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';

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
    BrowserModule,
    DropdownModule,
    RadioButtonModule
  ],
  declarations: [PaginaHotelComponent],
  exports: [PaginaHotelComponent]
})
export class HotelModule { }
