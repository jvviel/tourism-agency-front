import { RequestOptions, Http } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

export function authHttpServiceFactory(http: Http, options: RequestOptions){

    return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    providers: [
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        }
    ]

})

/**
 * @author Luis Franco
 * @description Modulo responsável por injetar automaticamente o ACCESS TOKEN em todas
 * as requisições HTTP.
 */
export class SegurancaModule{

}