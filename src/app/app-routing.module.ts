import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/Driver/list-driver/list.component';
import { AddComponent } from './components/Driver/add-driver/add.component';
import { EditComponent } from './components/Driver/edit-driver/edit.component';


const routes: Routes = [
  {path:'', redirectTo:'drivers', pathMatch:'full'},
  {path:'drivers', component:ListComponent},
  {path:'edit', component:EditComponent},
  {path:'add', component:AddComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
