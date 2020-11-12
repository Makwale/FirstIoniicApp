import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


import { HomePage } from './home/home.page';
import { InputsComponent } from './inputs/inputs.component'
import { GridComponent } from './grid/grid.component'

const routes: Routes = [
  {path: '', component: GridComponent},
  {path: 'inputs', component: InputsComponent},
  {path: 'home', component: HomePage}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
