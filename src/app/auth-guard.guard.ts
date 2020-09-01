import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from './services/session.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardGuard implements CanActivate {
  
  constructor(
    private sessionService: SessionService,
    private router: Router,
    ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(next.routeConfig.path);

    if (this.sessionService.activeSession()){
      return true;
    } else{
    }

    return true;
  }
  
}
