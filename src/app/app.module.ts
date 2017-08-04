import { IssuesComponent } from './careplan/issues/issues.component';
import { CustomHttp } from './custom-http';
import { Http, HttpModule, ConnectionBackend, RequestOptions, XHRBackend } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CareplanComponent } from './careplan/careplan/careplan.component';
import { NocareplanComponent } from './careplan/nocareplan/nocareplan.component';

export function getCustomHttp(backend: ConnectionBackend, defaultOptions: RequestOptions) {
  return new CustomHttp(backend, defaultOptions);
}

const appRoutes: Routes = [
  {
    path: 'careplan',
    component: CareplanComponent
  },
  {
    path: 'issues',
    component: IssuesComponent
  },
  {
    path: 'nocareplan',
    component: NocareplanComponent
  },
  // {
  //   path: '',
  //   redirectTo: '/careplan',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CareplanComponent,
    IssuesComponent,
    NocareplanComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    HttpModule
  ],
  providers: [{
    provide: Http,
    useFactory: getCustomHttp,
    deps: [XHRBackend, RequestOptions]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
