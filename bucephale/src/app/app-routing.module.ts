import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { BICEPHALE_ROUTES } from './types/routes';

const routes: Routes = [
  {path:BICEPHALE_ROUTES.DEFAULT, component: WelcomePageComponent},
  {path:BICEPHALE_ROUTES.WELCOME, component: WelcomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
