import { Pipe, PipeTransform } from '@angular/core';
import { Tipo } from '../models/tipo.enum';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(tipo: Tipo, args?: any): string {
    return this.obterTexto(tipo);
  }

  obterTexto(tipo:Tipo) : string{
    let descTexto : string = '';
    switch(tipo){
      case Tipo.INICIO_TRABALHO:
        descTexto = 'Início de trabalho'; break;
      case Tipo.INICIO_ALMOCO:
        descTexto = 'Início de almoço'; break;
      case Tipo.TERMINO_ALMOCO:
        descTexto = 'Témino de almoço'; break;
      case Tipo.TERMINO_TRABALHO:
        descTexto = 'Témino de trabalho'; break;
      default:
        descTexto = tipo; break;
    }
    return descTexto;
    }


}
