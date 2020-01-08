import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, timer } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';

@Injectable({
  providedIn: 'root'
})
export class CustompreloadingStrategyService implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      console.log("preload path : " + route.path);

      //delay with 5 second
      if (route.data['delay']) {
        return timer(5000).mergeMap(() => load());
      }

      return load();
    }
    return Observable.of(null);
  }

  constructor() { }
}
