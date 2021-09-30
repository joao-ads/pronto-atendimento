import { Component, OnInit } from '@angular/core';
import { Atendimento, AtendimentoService } from '../shared';

@Component({
  selector: 'app-listar-atendimento',
  templateUrl: './listar-atendimento.component.html',
  styleUrls: ['./listar-atendimento.component.css']
})
export class ListarAtendimentoComponent implements OnInit {

  atendimentos: Atendimento[];

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit(){
    this.atendimentos = this.listarTodos();
  }

  listarTodos(): Atendimento[] {
    return this.atendimentoService.listarTodos();
  }

  alterarStatus(atendimento: Atendimento): void {
    if (confirm('Deseja alterar o status da tarefa "' + atendimento.nome + '"?')) {
      this.atendimentoService.alterarStatus(atendimento.id);
      this.atendimentos = this.listarTodos();
    } else {
      this.atendimentos = this.listarTodos();
    }
  }

  remover($event: any, atendimento: Atendimento): void {
    $event.preventDefault();
    if (confirm('Deseja remover realmente o paciente "' + atendimento.nome + '"?')) {
      this.atendimentoService.remover(
        atendimento.id
      );
      this.atendimentos = this.listarTodos();
    } else {
      this.atendimentos = this.listarTodos();
    }

  }

}
