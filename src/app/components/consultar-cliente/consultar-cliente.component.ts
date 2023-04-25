import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent {

  mensagem: string = '';
  clientes: any[] = [];

  constructor(
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService
    
  ) {
    
    this.onInit();
  }

  onInit(): void {

    this.spinner.show();
    

    this.httpClient.get(
      environment.apiClientes + "api/cliente",
      
    )
      .subscribe({
        next: (data) => {
          this.clientes = data as any[];
        },
        error: (e) => {
          this.mensagem = e.error.mensagem;
        }
      }).add(
        () => {
          this.spinner.hide();
        }
      )
      
  }


  onDelete(idCliente: string): void {


    if (window.confirm('Deseja excluir o cliente?')) {
     


      this.httpClient.delete(
        environment.apiClientes + "api/cliente/" + idCliente,
        
      )
        .subscribe({
          next: (data: any) => {
            this.mensagem = data.mensagem;
            this.onInit();
          },
          error: (e) => {
            this.mensagem = e.error.mensagem;
          }
        })
        .add(
          () => {
            this.spinner.hide();
          }
        )
        
    }
  }

}
