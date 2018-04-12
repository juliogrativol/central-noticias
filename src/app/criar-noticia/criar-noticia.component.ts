import { Noticia } from './../models/noticia';
import { NoticiaService } from './../services/noticia.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-criar-noticia',
  templateUrl: './criar-noticia.component.html',
  styleUrls: ['./criar-noticia.component.css']
})
export class CriarNoticiaComponent implements OnInit {

  mensagem = '';
  noticia : Noticia;

  constructor(private noticiaService: NoticiaService) { }

  ngOnInit() {
    this.mensagem = '';
  }

  onSubmit(f: NgForm) {
    if (f.value.titulo === undefined
      || f.value.titulo === ''
      || f.value.titulo === null
      || f.value.noticia === undefined
      || f.value.noticia === ''
      || f.value.noticia === null
      || f.value.autor === undefined
      || f.value.autor === ''
      || f.value.autor === null
      || f.value.informativo === undefined
      || f.value.informativo === ''
      || f.value.informativo === null
      || f.value.data === undefined
      || f.value.data === ''
      || f.value.data === null) {

        this.mensagem = "Todos os campos são obrigatórios. Preencha corretamente!"

    }else {

      this.noticia = new Noticia(null, f.value.autor, f.value.titulo, f.value.noticia, f.value.informativo, f.value.data);

      this.noticiaService.postNoticia(this.noticia).subscribe(p=>this.noticia = p);

      this.mensagem = 'Notícia criada com sucesso!';
      console.log(f.value);
      f.resetForm();
    }
  }

}
