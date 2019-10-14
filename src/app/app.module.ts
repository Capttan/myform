import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import {} from './models';

//components here
import { FormviewComponent } from './components/formview.component';
import { ListviewComponent } from './components/listview.component';
import { InfoviewComponent } from './components/infoview.component';
//directives here
import { CustomdirectiveDirective } from './directives/customdirective.directive';
import { JuriValidatorDirective } from './directives/customdirective.directive';
import { AgeValidatorDirective } from './directives/customdirective.directive';
//services here
import { CustomserviceService } from './services/customservice.service';



// const appRoutes: Routes = [
//   {path: '', component: MainpageComponent},
//   {path: 'city', component: CitypageComponent},
//   {path: 'city/:cusId', component: CitypageComponent},
//   {path: '**', redirectTo:'', pathMatch: 'full'}
// ]

const appRoutes: Routes = [
  {path: '', component: FormviewComponent},
  {path: 'confirm', component: InfoviewComponent},
  // {path: 'info/:cusId', component: InfoviewComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent, //components here
    FormviewComponent,
    ListviewComponent,
    InfoviewComponent,
    CustomdirectiveDirective, //directives here
    JuriValidatorDirective,
    AgeValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomserviceService], //services here
  bootstrap: [AppComponent]
})
export class AppModule { }
