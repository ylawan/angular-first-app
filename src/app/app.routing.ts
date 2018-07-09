import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { AboutComponent } from './about/about.component';

const routes : Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path:'home', component: HomeComponent },
    { path:'first', component: FirstComponent },
    { path:'about', component: AboutComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(routes);
