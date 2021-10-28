import { Injectable } from "@angular/core";
import { CanActivate, Router} from "@angular/router";
import { HttpUtilService } from "src/app/shared/services/http-util.service";

@Injectable()
export class AdminGuardService implements CanActivate{

  constructor(
    private router: Router,
    private httpUtilService: HttpUtilService){

  }

  canActivate(): boolean {
    if(this.httpUtilService.obterPerfil() === 'ROLE_ADMIN'){
      return true;
    }
    this.router.navigate(['/funcionario']);
    return false;
  }

}
