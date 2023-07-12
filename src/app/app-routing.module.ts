import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JavaScript1Component } from './java-script1/java-script1.component';
import { JsStyleComponent } from './js-style/js-style.component';

const routes: Routes = [

  // {
  //   path:"app-java-script1",
  //   component:JavaScript1Component,
  // },
  // {
  //   path:"app-js-style",
  //   component: JsStyleComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
