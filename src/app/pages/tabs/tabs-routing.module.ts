import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'game',
        children:[
          {
            path: '',
            loadChildren: (() => import('../game/game.module').then(m => m.GamePageModule))
          }
        ]
      }
      ,
      {
        path:'profile',
        children:[
          {
            path: '',
            loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo: 'home/tabs/game',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
