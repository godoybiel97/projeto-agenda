import { Routes } from '@angular/router';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { ContatosComponent } from './paginas/contatos/contatos.component';
import { PerfilContatoComponent } from './paginas/perfil-contato/perfil-contato.component';

export const routes: Routes = [
    {
        path: "formulario",
        component: FormularioComponent
    },
    {
        path: "formulario/:id",
        component: FormularioComponent
    },
    {
        path: "contatos",
        component: ContatosComponent
    },
    {
        path: "perfil-contato/:id",
        component: PerfilContatoComponent
    },
    {
        path: "",
        redirectTo: "/contatos",
        pathMatch: 'full'
    }
];
