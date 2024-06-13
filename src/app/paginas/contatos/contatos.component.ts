import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../componentes/container/container.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormularioComponent } from '../formulario/formulario.component';
import agenda from '../../../agenda.json'
import { RouterLink } from '@angular/router';

interface Contato {
  id: number
  nome: string
  telefone: string
}

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [
    ContainerComponent, 
    CabecalhoComponent, 
    SeparadorComponent,
    ContatoComponent,
    FormularioComponent,
    FormsModule,
    RouterLink
  ],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})

export class ContatosComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: Contato[] = agenda;
  filtroPorTexto: string = ''

  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatosPorTexto(): Contato[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }

    return this.contatos.filter(contato => {
      return this.removerAcentos(contato.nome).toLowerCase().includes(this.removerAcentos(this.filtroPorTexto).toLowerCase());
    })
  }

  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.filtrarContatosPorTexto().filter(contato => {
      return this.removerAcentos(contato.nome).toLowerCase().startsWith(this.removerAcentos(letra).toLowerCase());
    })
  }
}
