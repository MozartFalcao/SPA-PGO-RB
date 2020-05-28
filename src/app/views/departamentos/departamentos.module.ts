import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { ComercialComponent } from './comercial.component';
import { FinanceiroComponent } from './financeiro.component';
import { OperacoesComponent } from './operacoes.component';
import { RhComponent } from './rh.component';
import { SociosComponent } from './socios.component';
import { TecnologiaComponent } from './tecnologia.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';


@NgModule({
  imports: [
    CommonModule,
    DepartamentosRoutingModule,
    CollapseModule.forRoot()
  ],
  declarations: [
    ComercialComponent,
    FinanceiroComponent,
    OperacoesComponent,
    RhComponent,
    SociosComponent,
    TecnologiaComponent]
})
export class DepartamentosModule { }
