import { NoticiaService } from './services/noticia.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DpDatePickerModule} from 'ng2-date-picker';


import { AppComponent } from './app.component';
import { ListarNoticiasComponent } from './listar-noticias/listar-noticias.component';
import { CriarNoticiaComponent } from './criar-noticia/criar-noticia.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarNoticiasComponent,
    CriarNoticiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DpDatePickerModule
  ],
  providers: [NoticiaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
