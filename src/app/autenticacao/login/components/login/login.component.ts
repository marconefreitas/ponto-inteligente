import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Login } from '../../models/login.model';

import { LoginService } from '../../services/login.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb : FormBuilder,
    private snackBar : MatSnackBar,
    private router : Router,
    private loginService : LoginService) {


  }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm(){
    this.form = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      senha : ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logar(){
    if (this.form.invalid){
      //this.snackBar.open("Dados Invalidos",  "Erro", {duration: 5000});
      return;
    }
    const login: Login = this.form.value;
    //alert(JSON.stringify(login));
    this.loginService.logar(login).subscribe(data => {
      localStorage['token'] = data['data']['token'];
      const usuarioData = JSON.parse(atob(data['data']['token'].split('.')[1]) )
      if (usuarioData['role'] == 'ROLE_ADMIN'){
        this.router.navigate(['/admin']);
      } else{
        this.router.navigate(['/funcionario']);
      }
    }, err => {
      let msg = 'Tente novamente em instantes';
      if (err['status'] == 401){
        msg = 'Email/Senha invalido(s).';
      }
      this.snackBar.open(msg, 'Erro', {duration: 5000});
    });
  }

}
