import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { CapacitacaoComponent } from './components/capacitacao/capacitacao.component';
import { CursosPresenciaisComponent } from './components/cursos-presenciais/cursos-presenciais.component';
import { SimposiosComponent } from './components/simposios/simposios.component';
import { SeminariosComponent } from './components/seminarios/seminarios.component';
import { ConferenciasComponent } from './components/conferencias/conferencias.component';
import { OficinasComponent } from './components/oficinas/oficinas.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  {
    path: "sobre-nos",
    component: SobreNosComponent
  },

  {
    path: "capacitacao",
    component: CapacitacaoComponent
  },

  {
    path: "cursos-presenciais",
    component: CursosPresenciaisComponent
  },

  {
    path: "simposios",
    component: SimposiosComponent
  },

  {
    path: "seminarios",
    component: SeminariosComponent
  },

  {
    path: "conferencias",
    component: ConferenciasComponent
  },

  {
    path: "oficinas",
    component: OficinasComponent
  },

  {
    path: "contato",
    component: SobreNosComponent
  },


];
