import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  exibeCadastro : boolean = false;

  ngOnInit() {
    this.exibeCadastro = false;

  }

  troca(){
    this.exibeCadastro = !this.exibeCadastro;
  }

}
