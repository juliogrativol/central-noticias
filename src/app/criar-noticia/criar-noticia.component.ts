import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-criar-noticia',
  templateUrl: './criar-noticia.component.html',
  styleUrls: ['./criar-noticia.component.css']
})
export class CriarNoticiaComponent implements OnInit {

  mensagem = '';

  constructor() { }

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
      this.mensagem = 'Notícia criada com sucesso!';
      console.log(f.value);
      f.resetForm();
    }
  }

}
