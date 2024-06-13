import { Routes } from '@angular/router';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { ContatosComponent } from './paginas/contatos/contatos.component';

export const routes: Routes = [
    {
        path: "formulario",
        component: FormularioComponent
    },
    {
        path: "contatos",
        component: ContatosComponent
    },
    {
        path: "",
        redirectTo: "/contatos",
        pathMatch: 'full'
    }
];
