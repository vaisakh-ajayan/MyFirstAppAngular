import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ControlpannelComponent } from './controlpannel/controlpannel.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServerdetailsComponent } from './serverdetails/serverdetails.component';
import { TdformComponent } from './tdform/tdform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { BlogsComponent } from './blogs/blogs.component';

const appRoutes : Routes =[
    { path: '', component: HomeComponent },
    { path: 'controlpannel', component: ControlpannelComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'server/:numid', component: ServerdetailsComponent },
    { path: 'tdform', component: TdformComponent },
    { path: 'reactiveform', component: ReactiveformComponent },
    { path: 'blogs', component: BlogsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],

})
export class AppRoutingModule{

}