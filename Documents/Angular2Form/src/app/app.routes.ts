import { RouteGuardService } from './route-guard.service';
import { SocialsComponent } from './socials/socials.component';
import { OverviewComponent } from './overview/overview.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: OverviewComponent }
    // {
    //     path: 'sign-up', component: SignUpComponent, canActivate: [RouteGuardService], children: [
    //         { path: '', redirectTo: 'OverviewComponent', pathMatch: 'full' },
    //         { path: 'social', component: SocialsComponent },
    //         { path: 'social/:id', component: SocialsComponent}
    // ]}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
