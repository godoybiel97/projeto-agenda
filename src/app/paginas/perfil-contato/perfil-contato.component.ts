import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { Contato } from '../../componentes/contato/contato';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    RouterLink
  ],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})

export class PerfilContatoComponent {
  contato: Contato = {
    id: 0,
    nome: "Gabriel",
    telefone: "(11)95277-3857",
    email: "gabriel@gmail.com",
    aniversario: "23/02/1997",
    redes: "",
    observacoes: ""
  }
}
