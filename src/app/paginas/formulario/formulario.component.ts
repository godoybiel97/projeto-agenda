import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';
import { PerfilContatoComponent } from '../perfil-contato/perfil-contato.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent, 
    SeparadorComponent,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent implements OnInit {
  contatoForm!: FormGroup;

  constructor(private contatoService: ContatoService, private router: Router) {}

  ngOnInit(): void {
      this.criarFormulario()
  }

  criarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      telefone: new FormControl('', [Validators.required, Validators.minLength(11)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    })
  }

  salvarContato() {
    const novoContato = this.contatoForm.value

    this.contatoService.salvarContato(novoContato).subscribe(() => {
      this.contatoForm.reset()
      this.router.navigateByUrl("/contatos")
    })
  }

  cancelar() {
    this.contatoForm.reset()
  }
}
