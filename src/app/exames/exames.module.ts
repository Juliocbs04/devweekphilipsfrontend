import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamesRoutingModule } from './exames-routing.module';
import { ExamesComponent } from './exames/exames.component';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import { OcorrenciaService } from './service/ocorrencia.service';
import { RegiaoService } from './service/regiao.service';
import { FaixaEtariaService } from './service/faixa-etaria.service';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    ExamesComponent
  ],
  imports: [
    CommonModule,
    ExamesRoutingModule,
    MatSortModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    OcorrenciaService,
    RegiaoService,
    FaixaEtariaService
  ]
})
export class ExamesModule { }
