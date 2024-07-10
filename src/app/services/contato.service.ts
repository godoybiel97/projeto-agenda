import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContatoService {
  private readonly API = "http://localhost:3000/contatos"

  constructor(private http: HttpClient) {}

   obterContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.API)
   }

   salvarContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.API, contato)
   }

   buscarPorId(id: number): Observable<Contato> {
    const URL = `${this.API}/${id}`
    return this.http.get<Contato>(URL)
   }

   excluirContato(id: number): Observable<Contato> {
    const URL = `${this.API}/${id}`
    return this.http.delete<Contato>(URL)
   }

   editarContato(contato: Contato): Observable<Contato> {
    const URL = `${this.API}/${contato.id}`
    return this.http.put<Contato>(URL, contato)
   }

   editarOuSalvar(contato: Contato): Observable<Contato> {
    if(contato.id) {
      return this.editarContato(contato)
    } else {
      return this.salvarContato(contato)
    }
   }
}
