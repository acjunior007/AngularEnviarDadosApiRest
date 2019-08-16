import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularEnviarDadosApiRestFul';
  contato: any;
  contatos: Array<any>;

  constructor(private service: AppServiceService){

  }

  ngOnInit(){
    this.contato={};
    this.service.listar()
      .subscribe(data => this.contatos = data);
    //this.contatos = [{ id: 1, title: "teste"}];
  }

  criar(form: FormGroup){
    this.service.criar(this.contato).subscribe(res => { 
      this.contatos.push(res);
      form.reset();
     })
  }
  
}
