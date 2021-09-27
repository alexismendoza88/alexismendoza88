import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes,CanActivate  } from '@angular/router';
import { 
  AuthguardService as AuthGuard 
} from './services/authguard.service';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'inicio',//Aquí se configura con que página queremos iniciar
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'solicitude',
    loadChildren: () => import('./pages/solicitude/solicitude.module').then( m => m.SolicitudePageModule)
  },
  {
    path: 'solicitudelist',
    loadChildren: () => import('./pages/solicitudelist/solicitudelist.module').then( m => m.SolicitudelistPageModule)
  },
  {
    path: 'companysol',
    loadChildren: () => import('./pages/companysol/companysol.module').then( m => m.CompanysolPageModule)
  },
  {
    path: 'solicitude-detail',
    loadChildren: () => import('./pages/solicitude-detail/solicitude-detail.module').then( m => m.SolicitudeDetailPageModule)
  },
  {
    path: 'response',
    loadChildren: () => import('./pages/response/response.module').then( m => m.ResponsePageModule)
  },
  {
    path: 'response-detail',
    loadChildren: () => import('./pages/response-detail/response-detail.module').then( m => m.ResponseDetailPageModule)
  },
  {
    path: 'response-list',
    loadChildren: () => import('./pages/response-list/response-list.module').then( m => m.ResponseListPageModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./pages/company/company.module').then( m => m.CompanyPageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./pages/customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'resetpass',
    loadChildren: () => import('./pages/resetpass/resetpass.module').then( m => m.ResetpassPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'companyup',
    loadChildren: () => import('./pages/companyup/companyup.module').then( m => m.CompanyupPageModule)
  },
  {
    path: 'customerup',
    loadChildren: () => import('./pages/customerup/customerup.module').then( m => m.CustomerupPageModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts/posts.module').then( m => m.PostsPageModule)
  },
  {
    path: 'activities',
    loadChildren: () => import('./pages/activities/activities.module').then( m => m.ActivitiesPageModule)
  },
  {
    path: 'favors',
    loadChildren: () => import('./pages/favors/favors.module').then( m => m.FavorsPageModule)
  },
  {
    path: 'classified',
    loadChildren: () => import('./pages/classified/classified.module').then( m => m.ClassifiedPageModule)
  },
  {
    path: 'activityadd',
    loadChildren: () => import('./pages/activityadd/activityadd.module').then( m => m.ActivityaddPageModule)
  },
  {
    path: 'favoradd',
    loadChildren: () => import('./pages/favoradd/favoradd.module').then( m => m.FavoraddPageModule)
  },
  {
    path: 'classifiedadd',
    loadChildren: () => import('./pages/classifiedadd/classifiedadd.module').then( m => m.ClassifiedaddPageModule)
  },
  {
    path: 'postdetail',
    loadChildren: () => import('./pages/postdetail/postdetail.module').then( m => m.PostdetailPageModule)
  },
  {
    path: 'resetpassup',
    loadChildren: () => import('./pages/resetpassup/resetpassup.module').then( m => m.ResetpassupPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
