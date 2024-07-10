import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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

  constructor(
    private contatoService: ContatoService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this.criarFormulario()
      this.carregarContato()
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

  carregarContato() {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    if(id) {
      this.contatoService.buscarPorId(parseInt(id)).subscribe((contato) => {
        this.contatoForm.patchValue(contato)
      })
    }
  }

  salvarContato() {
    const novoContato = this.contatoForm.value
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    novoContato.id = id ? parseInt(id) : null

    this.contatoService.editarOuSalvar(novoContato).subscribe(() => {
      this.contatoForm.reset()
      this.router.navigateByUrl("/contatos")
    })
  }

  cancelar() {
    this.contatoForm.reset()
  }
}
