// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './components/forms/register-form.component';
import { SignInFormComponent } from './components/forms/sign-in-form.component';


// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  { path: 'signup', component:RegisterFormComponent  },
  { path: 'signin', component: SignInFormComponent }  
  
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);