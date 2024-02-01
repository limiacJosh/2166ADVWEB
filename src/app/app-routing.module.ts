import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /** 
  {
    path:'index',
    component:AppComponent
  },
    {path:'about',
    component:AboutComponent
  },
    {path:'partners',
  component:PartnersComponent
},{
  path:'joinus',
component:JoinusComponent
}
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


