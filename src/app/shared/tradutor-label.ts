import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";


@Injectable()
export class TradutorLabel extends MatPaginatorIntl{

  itemsPerPageLabel : string = 'Qtd. por página:' ;
  nextPageLabel : string = 'Próximo';
  previousPageLabel : string = 'Anterior';

  getRangeLabel  = function(page: any, pageSize: any, length: any) : string{
    if (length === 0 || pageSize === 0){
      return '0 de ' + length ;
    }
    length = Math.max(length, 0);
    const start = page * pageSize;
    const end = start < length ? Math.min(start + pageSize, length) : start + pageSize;
    return start + 1 + ' - ' + end + '/' + length;
  }


}
