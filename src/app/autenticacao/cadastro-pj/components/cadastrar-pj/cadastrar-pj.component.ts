import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CadastroPj } from '../../models/cadastro-pj.model';
import { CpfValidator } from 'src/app/shared/validators/cpf.validator';
import { CnpjValidator } from 'src/app/shared/validators/cnpj.validator';
import { CadastroPjService } from '../../services/cadastro-pj.service';


@Component({
  selector: 'app-cadastrar-pj',
  templateUrl: './cadastrar-pj.component.html',
  styleUrls: ['./cadastrar-pj.component.css']
})
export class CadastrarPjComponent implements OnInit {

  form : FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router : Router,
    private cadastrarPjService : CadastroPjService) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm(){
    this.form = this.fb.group({
      nome : ['', [Validators.required, Validators.minLength(3)]],
      email : ['', [Validators.required, Validators.email]],
      senha : ['', [Validators.required, Validators.minLength(6)]],
      cpf : ['', [Validators.required, CpfValidator]],
      razaoSocial: ['', [Validators.required, Validators.minLength(5)]],
      cnpj : ['', [Validators.required, CnpjValidator]]
    });
  }

  cadastrarPj(){
    if (this.form.invalid){
      return;
    }
    const cadastroPj:CadastroPj = this.form.value;
    this.cadastrarPjService
      .cadastrar(cadastroPj)
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          const msg: string = 'Realize o Login para acessar o sistema.';
          this.snackBar.open(msg, 'Sucesso', {duration: 5000});
          this.router.navigate(['/login']);
        },
        err => {
          console.log(err);
          let msg : string = 'Tente novamente em instantes';
          if (err.status == 400){
            msg = err.error.errors.join (' ');
          }
          this.snackBar.open(msg, 'Erro', {duration: 5000});
        }
      );
    return;
  }

}
