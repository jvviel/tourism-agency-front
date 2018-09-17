import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaViagemComponent } from './pagina-viagem/pagina-viagem.component';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {SidebarModule} from 'primeng/sidebar';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    DataTableModule,
    TooltipModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    BrowserModule,
    SidebarModule,
    DropdownModule,
    CalendarModule,
    MultiSelectModule,
    CurrencyMaskModule
  ],
  declarations: [PaginaViagemComponent],
  exports: [PaginaViagemComponent]
})
export class ViagemModule { }
