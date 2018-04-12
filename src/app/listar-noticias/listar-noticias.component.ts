import { Noticia } from './../models/noticia';
import { NoticiaService } from './../services/noticia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-noticias',
  templateUrl: './listar-noticias.component.html',
  styleUrls: ['./listar-noticias.component.css']
})
export class ListarNoticiasComponent implements OnInit {

  noticias;

  constructor(private noticiaService: NoticiaService) {
      console.log("chamando noticias");
      this.noticiaService.getNoticias().subscribe(p=>this.noticias = p);
   }

  ngOnInit() {
  }

}
