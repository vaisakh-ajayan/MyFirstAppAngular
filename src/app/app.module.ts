import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CreatorComponent } from './creator/creator.component';
import { ServersService } from './server.service';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServerdetailsComponent } from './serverdetails/serverdetails.component';
import { ControlpannelComponent } from './controlpannel/controlpannel.component';
import { AppRoutingModule } from './app-routing.module';
import { TdformComponent } from './tdform/tdform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ShortenPipe } from './shorten.pipe';
import { BlogsComponent } from './blogs/blogs.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { AuthComponent } from './auth/auth.component';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './placeholder.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CreatorComponent,
    HomeComponent,
    AboutusComponent,
    ServerdetailsComponent,
    ControlpannelComponent,
    TdformComponent,
    ReactiveformComponent,
    ShortenPipe,
    BlogsComponent,
    AuthComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [
    ServersService,
    //providing auth-interceptor in appModule
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
