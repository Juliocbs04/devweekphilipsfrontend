import { Component, OnInit } from '@angular/core';
import { FaixaEtaria } from '../model/faixaetaria';
import { Ocorrencia } from '../model/ocorrencia';
import { Regiao } from '../model/regiao';
import { FaixaEtariaService } from '../service/faixa-etaria.service';
import { OcorrenciaService } from '../service/ocorrencia.service';
import { RegiaoService } from '../service/regiao.service';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {

  regioes: Regiao[] = [];
  ocorrencia_exame: Ocorrencia[] = [];
  faixaetaria: FaixaEtaria[] = [];
  
  constructor(
    private regiaoService: RegiaoService,
    private ocorrenciaService: OcorrenciaService,
    private faixaEtariaService: FaixaEtariaService
    ) { 

  }

  ngOnInit(): void {
    this.regiaoService.listRegioes().subscribe(regioes=> this.regioes = regioes);
    this.ocorrenciaService.listOcorrencia().subscribe(ocorrencia_exame=> this.ocorrencia_exame = ocorrencia_exame);
    this.faixaEtariaService.listFaixaEtaria().subscribe(faixaetaria=> this.faixaetaria = faixaetaria);
  }

}
