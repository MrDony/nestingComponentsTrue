import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstMainChildOneComponent } from './first-main-child-one/first-main-child-one.component';
import { FirstMainChildTwoComponent } from './first-main-child-two/first-main-child-two.component';
import { FirstMainComponent } from './first-main/first-main.component';
import { SecondMainChildOneComponent } from './second-main-child-one/second-main-child-one.component';
import { SecondMainChildTwoComponent } from './second-main-child-two/second-main-child-two.component';
import { SecondMainComponent } from './second-main/second-main.component';

export const routes: Routes = [
  {path:'',redirectTo:'firstMain',pathMatch:'full'},
  {
    path:'firstMain',component:FirstMainComponent,
    children:[
      {path:'firstMainChildOne',component:FirstMainChildOneComponent,pathMatch:'full'},
      {path:'firstMainChildTwo',component:FirstMainChildTwoComponent},
      {path:'',redirectTo:'firstMainChildOne',pathMatch:'full'}]
  },
  {
    path:'secondMain',component:SecondMainComponent,
    children:[
      {path:'secondMainChildOne',component:SecondMainChildOneComponent,pathMatch:'full'},
      {path:'secondMainChildTwo',component:SecondMainChildTwoComponent},
      {path:'',redirectTo:'secondMainChildOne',pathMatch:'full'}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
