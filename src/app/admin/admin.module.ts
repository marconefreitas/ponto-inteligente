import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmarDialog, ListagemComponent } from './components/listagem/listagem.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AtualizacaoComponent } from './components/atualizacao/atualizacao.component';
import { AdminComponent } from './components/admin.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatPaginatorIntl} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LancamentoService } from '../shared/services/lancamento.service';
import { HttpUtilService } from '../shared/services/http-util.service';
import { TradutorLabel } from '../shared/tradutor-label';
import { FuncionarioService } from '../shared/services/funcionario.service';
import { AdminGuardService } from './services/admin-guard.service';


@NgModule({
  declarations: [
    ListagemComponent,
    CadastroComponent,
    AtualizacaoComponent,
    AdminComponent,
    ConfirmarDialog
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,



    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    LancamentoService,
    HttpUtilService,
    MatPaginatorIntl,
    FuncionarioService,
    AdminGuardService,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    {provide: MatPaginatorIntl, useClass: TradutorLabel}

  ],
  entryComponents: [
    ConfirmarDialog
  ]
})
export class AdminModule { }
