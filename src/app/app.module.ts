import { PacotesModule } from './pacotes/pacotes.module';
import { ClienteModule } from './cliente/cliente.module';
import { ViagemModule } from './viagem/viagem.module';
import { DespesasModule } from './despesas/despesas.module';
import { HotelModule } from './hotel/hotel.module';
import { CidadeModule } from './cidade/cidade.module';
import { CategoriaModule } from './categoria/categoria.module';
import { BarraModule } from './barra/barra.module';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { ToastyModule } from 'ng2-toasty';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';


import { AppComponent } from './app.component';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { SegurancaModule } from './seguranca.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ToastyModule.forRoot(),
    RouterModule,
    ConfirmDialogModule,
    SegurancaModule,
    AppRoutingModule,
    BarraModule,
    CategoriaModule,
    CidadeModule,
    HotelModule,
    DespesasModule,
    ViagemModule,
    ClienteModule,
    PacotesModule
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
