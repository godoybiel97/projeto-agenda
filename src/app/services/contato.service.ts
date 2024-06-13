import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';

@Injectable({
  providedIn: 'root'
})

export class ContatoService {
  private contatos: Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420", "email": "email@email.com"},
    {"id": 3, "nome": "Bruno", "telefone": "95 695521583", "email": "email@email.com"},
    {"id": 5, "nome": "Carlos", "telefone": "94 543197849", "email": "email@email.com"},
    {"id": 7, "nome": "Daniel", "telefone": "56 613692441", "email": "email@email.com"}
  ]

  constructor() {
    const contatosLSS = localStorage.getItem("contatos")
    const contatosLS = contatosLSS ? JSON.parse(contatosLSS) : null

    if (contatosLS !== null) {
      this.contatos = contatosLS || null;
    }
   }

   obterContatos() {
    return this.contatos
   }

   salvarContato(contato: Contato) {
    this.contatos.push(contato)
    localStorage.setItem("contatos", JSON.stringify(this.contatos))
   }
}
