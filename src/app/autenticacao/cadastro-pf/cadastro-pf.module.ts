import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPfComponent } from './components/cadastrar-pf/cadastrar-pf.component';
import { RouterModule } from '@angular/router';
import { CadastroPfComponent } from './cadastro-pf.component';
import { FlexLayoutModule } from '@angular/flex-layout';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { CadastrarPfService } from './services/cadastrar-pf.service';

@NgModule({
  declarations: [
    CadastrarPfComponent,
    CadastroPfComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,

    SharedModule

  ],
  providers: [
    CadastrarPfService
  ]
})
export class CadastroPfModule { }
