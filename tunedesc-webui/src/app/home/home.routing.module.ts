import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
        path: '',
        pathMatch: 'full',
        
        component: HomeComponent,
        data: {
          title: 'Home Component'
        }
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }



