import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RichTextEditorModule, ToolbarService, LinkService, ImageService, 
  HtmlEditorService, FileManagerService } from '@syncfusion/ej2-angular-richtexteditor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RichTextEditorModule,
    AppRoutingModule
  ],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, FileManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
