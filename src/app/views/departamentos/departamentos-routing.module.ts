import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { ComercialComponent } from './comercial.component';
import { FinanceiroComponent } from './financeiro.component';
import { OperacoesComponent } from './operacoes.component';
import { RhComponent } from './rh.component';
import { SociosComponent } from './socios.component';
import { TecnologiaComponent } from './tecnologia.component';



export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Departamentos'
    },
    children: [
      {
        path: '',
        redirectTo: 'departamentos'
      },
      {
        path: 'comercial',
        component: ComercialComponent,
        data: {
          title: 'Comercial'
        }
      },
      {
        path: 'financeiro',
        component: FinanceiroComponent,
        data: {
          title: 'Financeiro'
        }
      },
      {
        path: 'operacoes',
        component: OperacoesComponent,
        data: {
          title: 'Operações'
        }
      },
      {
        path: 'rh',
        component: RhComponent,
        data: {
          title: 'rh'
        }
      },
      {
        path: 'socios',
        component: SociosComponent,
        data: {
          title: 'Sócios'
        }
      },
      {
        path: 'tecnologia',
        component: TecnologiaComponent,
        data: {
          title: 'Tecnologia'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DepartamentosRoutingModule {
}