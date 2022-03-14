import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HideAfterDirective } from './hide-after.directive';
import { PassNgTemplateViaInputBindingComponent } from './pass-ng-template-via-input-binding/pass-ng-template-via-input-binding.component';
import { HideContentAfterDirective } from './hide-content-after.directive';

@NgModule({
  declarations: [
    AppComponent,
    HideAfterDirective,
    PassNgTemplateViaInputBindingComponent,
    HideContentAfterDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
