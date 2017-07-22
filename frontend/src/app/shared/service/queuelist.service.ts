import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ENDPOINT_SERVICE } from '../config/endpoint.const';

@Injectable()
export class QueueListService {
  constructor(private http: Http) {

  }

  getQueueList(queue_name: string): Observable<string[]> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('queue_name', queue_name);
    return this.http.get(ENDPOINT_SERVICE.GET_QUEUE_LIST, { search: params })
      .map((r: Response) => r.json() as string[])
      .catch(this.handleError);
  }

  getQueueListFull(queue_name: string): Observable<string[]> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('queue_name', queue_name);
    return this.http.get(ENDPOINT_SERVICE.GET_QUEUE_LIST_FULL, { search: params })
      .map((r: Response) => r.json() as string[])
      .catch(this.handleError);
  }

  protected handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      console.log(error);
      const body = error.json() || '';
      console.log('Van die....');
      console.log(error.status);
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    // console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
