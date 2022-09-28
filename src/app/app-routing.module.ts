import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummycomponentComponent } from './dummycomponent/dummycomponent.component';
const routes: Routes = [
  { path:'home',component:DummycomponentComponent},
  { path:'about us',component:DummycomponentComponent},
  { path:'services',component:DummycomponentComponent},
  { path:'sign up/login',component:DummycomponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
