import { Routes, RouterModule } from '@angular/router';
import { NavigateComponent } from './navigate.component';
import { NgModule } from '@angular/core';




const routes: Routes = [

    {

        path: '',
        pathMatch: 'full',
        component: NavigateComponent,
        data: {
            title: 'navigation Component'
        }
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavigationRoutingModule { }



