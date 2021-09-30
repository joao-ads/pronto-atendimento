import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtendimentoService, AtendimentoConcluidoDirective } from './shared';
import { ListarAtendimentoComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarAtendimentoComponent } from './cadastrar';
import { EditarAtendimentoComponent } from './editar';



@NgModule({
  declarations: [
    ListarAtendimentoComponent,
    CadastrarAtendimentoComponent,
    EditarAtendimentoComponent,
    AtendimentoConcluidoDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    AtendimentoService
  ]
})
export class AtendimentosModule { }
