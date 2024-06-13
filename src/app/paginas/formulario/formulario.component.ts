import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    ContainerComponent, 
    SeparadorComponent, 
    ReactiveFormsModule, 
    NgClass,
    RouterLink
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {
  contatoForm!: FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      telefone: new FormControl('', [Validators.required, Validators.minLength(11)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    })
  }

  onSubmit() {
    if(this.contatoForm.invalid)
      console.log(this.contatoForm.get('nome')?.errors)
    }
}
