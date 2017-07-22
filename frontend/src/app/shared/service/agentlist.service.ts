import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ENDPOINT_SERVICE } from '../config/endpoint.const';


@Injectable()
export class AgentListService {
  constructor(private http: Http) {

  }

  getAgentList(agent_id: string): Observable<string[]> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('agent_id', agent_id);
    return this.http.get(ENDPOINT_SERVICE.GET_AGENT_LIST, { search: params })
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
