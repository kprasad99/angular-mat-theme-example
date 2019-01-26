import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OverlayContainer } from '@angular/cdk/overlay';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatRippleModule,
  MatIconModule, MatButtonModule, MatMenuModule, MatDividerModule, MatCardModule, MatTabsModule, MatButtonToggleModule, MatIconRegistry
} from '@angular/material';
import { CardComponent } from './card/card.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule, MatTabsModule, FormsModule, MatButtonToggleModule,
    MatToolbarModule, MatRippleModule, MatIconModule, MatButtonModule, MatMenuModule, MatDividerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(overlayContainer: OverlayContainer) {
  //   overlayContainer.getContainerElement().classList.add('k-dark');
  // }

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'k_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/k_icon.svg')
    );
  }
}
