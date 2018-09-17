import { PaginaCidadeComponent } from './cidade/pagina-cidade/pagina-cidade.component';
import { PaginaCategoriaComponent } from './categoria/pagina-categoria/pagina-categoria.component';
import { PaginaHotelComponent } from './hotel/pagina-hotel/pagina-hotel.component';
import { NgModule, Component } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
/**
 * @author Luis Franco

 * @description
 * Modulo de rotas da aplicação, utilizado para gerenciar todas as rotas de toda a aplicação.
 */
const appRoutes: Routes = [
    {path: 'hoteis', component: PaginaHotelComponent},
    {path: 'categorias', component: PaginaCategoriaComponent},
    {path: 'cidades', component: PaginaCidadeComponent}



];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})


export class AppRoutingModule {

}
