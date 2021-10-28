import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroPj } from '../models/cadastro-pj.model';

import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CadastroPjService {

  private readonly PATH : string = 'cadastrar-pj';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPj: CadastroPj):Observable<any>{
    return this.http.post(env.baseApiUrl + this.PATH, cadastroPj);
  }
}
