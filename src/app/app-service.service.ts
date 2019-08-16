import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  urlAPIGet = "https://jsonplaceholder.typicode.com/users";
  urlAPIPost = "https://my-json-server.typicode.com/typicode/demo/posts";
  constructor(
    private http: HttpClient
  ) { }

  listar(){
    return this.http.get<Array<any>>(this.urlAPIGet);
  }

  criar(contato: any){
    return this.http.post(this.urlAPIPost, contato);
  }
}
