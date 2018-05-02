import { Injectable, Component, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http-service';
import { InfotipState } from './../states/infotip.state';

const infotipsUrl: string = 'http://fabric8-online-docs-app-pr-314-fabric8-online-docs.badger.fabric8.io/json/infotips.json';

@Injectable()
export class InfotipService {
  constructor(
      private http: HttpService
    ) {}

  getInfotips(): Observable<InfotipState> {
    return this.http
      .get(infotipsUrl, {'no-header': null})
      .map(response => {
        if (/^[5, 4][0-9]/.test(response.status.toString())) {
          throw new Error('API error occured');
        }
        return response.json().data as InfotipState;
      })
  }
}
