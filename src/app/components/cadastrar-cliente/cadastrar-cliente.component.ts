import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent {

  mensagem: string = '';




  //construtor para injeção de dependência
  constructor(
    private httpClient: HttpClient, //inicialização automática
    private spinner: NgxSpinnerService //inicialização automática
  ) {
  }


  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(150)]),
    email: new FormControl('', [Validators.required]),
     cpf: new FormControl('',[Validators.required]), 
     telefone: new FormControl('',[Validators.required])
  });


  //objeto para executar as validações dos csmpos
  get form(): any {
    return this.formCadastro.controls;
  }


  //função para capturar o SUBMIT do formulário
  onSubmit(): void {


    this.spinner.show();


    //fazendo uma requisição POST para o endpoint /api/CriarConta
    this.httpClient.post(
      environment.apiClientes + "api/cliente",
      this.formCadastro.value)
      .subscribe( //capturar o retorno da API
        {
          next: (data: any) => { //resposta de sucesso da API
            this.mensagem = data.mensagem;
            this.formCadastro.reset();
          },
          error: (e) => { //resposta de erro da API
            this.mensagem = e.error.mensagem;
          }
        }
      ).add(
        () => {
          this.spinner.hide();
        }
      );
  }
  
}
