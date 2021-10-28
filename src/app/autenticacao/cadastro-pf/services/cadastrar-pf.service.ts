import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroPf } from '../models/cadastro-pf.model';

import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastrarPfService {

  private readonly PATH :string = 'cadastrar-pf';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPf: CadastroPf) :Observable<any>{
    return this.http.post(env.baseApiUrl + this.PATH,  cadastroPf);
  }
}
