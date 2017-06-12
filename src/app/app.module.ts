import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// FormsModule required, and must be added to imports for two-way data binding
import { FormsModule } from '@angular/forms';
// HttpModule required, and must be added to imports for Http request
import { HttpModule } from '@angular/http';
// MaterialModule from Material design
import { MaterialModule } from "@angular/material";
// BrowserAnimationsModule for animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// MasonryModule is a layout library
import { MasonryModule } from 'angular2-masonry';
import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';

import { ImageService } from './shared/image.service';

@NgModule({
    declarations: [
        AppComponent,
        ImageListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        BrowserAnimationsModule,
        MasonryModule
    ],
    providers: [ImageService],
    bootstrap: [AppComponent]
})
export class AppModule { }
