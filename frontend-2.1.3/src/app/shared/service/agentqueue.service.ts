import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { AgentQueue } from '../model/agentqueue';
import { AgentQueueSearch } from '../model/agentqueuesearch';

import { Observable } from 'rxjs/Observable';
import { ENDPOINT_SERVICE } from "../config/endpoint.const";

@Injectable()
export class AgentQueueService {
  public agentqueuelist: AgentQueue[];
  public queuelist: string[];
  public agentlist: string[];
  public searchModel: AgentQueueSearch;

  constructor(private http: Http) {
    this.searchModel = new AgentQueueSearch();
  }

  public loadDataTable() {
    this.getAgentQueueList().subscribe(
      agentqueuelist => {
        this.agentqueuelist = agentqueuelist;
      },
      error => {
        console.log('error fetching news');
      });
  }

  getAgentQueueList(): Observable<AgentQueue[]> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('agent_id', this.searchModel.agent_id);
    params.set('queue_id', this.searchModel.queue_id);
    return this.http.get(ENDPOINT_SERVICE.GET_AGENT_QUEUE_LIST, { search: params })
      .map((r: Response) => r.json() as AgentQueue[])
      // .catch(this.handleError);
  }

  getQueueIdByQueueName(queue_name: string): string {
    console.log("find queue_id from:" + queue_name)
    let start = queue_name.indexOf("[");
    let end = queue_name.indexOf("]");
    let queue_id = queue_name.substring(start + 1, end);

    return queue_id;
  }

  updateQueue4Agent(agent_id: string, org_queue_id: string, queue_id: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('agent_id', agent_id);
    params.set('org_queue_id', org_queue_id);
    params.set('queue_id', queue_id);
    return this.http.get(ENDPOINT_SERVICE.UPDATE_AGENT_QUEUE, { search: params })
      .map((r: Response) => {
        this.loadDataTable();
        return r;
      });
  }

  deleteAgentQueue(agent_id: string, queue_id: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('agent_id', agent_id);
    params.set('queue_id', queue_id);
    return this.http.get(ENDPOINT_SERVICE.DELETE_AGENT_QUEUE, { search: params })
      .map((r: Response) => {
        this.loadDataTable();
        return r;
      });
  }

  addAgentQueue(agent_id: string, queue_id: string, priority: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('agent_id', agent_id);
    params.set('queue_id', queue_id);
    params.set('priority', priority);
    return this.http.get(ENDPOINT_SERVICE.ADD_AGENT_QUEUE, { search: params })
      .map((r: Response) => {
        this.loadDataTable();
        return r;
      });
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
    //console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
