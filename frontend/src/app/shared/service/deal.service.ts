import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { AgentQueue, AgentQueueSearch, Contact } from '../model';

import { Observable } from 'rxjs/Observable';
import { ENDPOINT_SERVICE } from "../config/endpoint.const";
import { ContactSearch } from '../model/contactsearch';
import { Deal } from '../model/deal';

export const DEALS: Deal[] = [
  { "deal_id": "123", "deal_name": "This is a sample deal", "contact_name": "Nguyễn Văn A", "contact_id": "123", "company_name": "Company A", "company_id": "123", "deal_value": "1.000.000", "deal_stage": "New", "create_at": "2017-06-23 10:00:00", "create_by": "tueld", "update_at": "2017-06-23 10:00:00", "update_by": "tueld" },
  { "deal_id": "124", "deal_name": "This is a sample deal", "contact_name": "Lê Văn B", "contact_id": "124", "company_name": "Company B", "company_id": "124", "deal_value": "2.000.000", "deal_stage": "Finish", "create_at": "2017-06-23 10:00:00", "create_by": "tueld", "update_at": "2017-06-23 10:00:00", "update_by": "tueld" },
  { "deal_id": "125", "deal_name": "This is a sample deal", "contact_name": "Trần Thị C", "contact_id": "125", "company_name": "Company A", "company_id": "125", "deal_value": "1.000.000", "deal_stage": "Inprogress", "create_at": "2017-06-23 10:00:00", "create_by": "tueld", "update_at": "2017-06-23 10:00:00", "update_by": "tueld" },
  { "deal_id": "123", "deal_name": "This is a sample deal", "contact_name": "Nguyễn Văn A", "contact_id": "123", "company_name": "Company A", "company_id": "123", "deal_value": "1.000.000", "deal_stage": "New", "create_at": "2017-06-23 10:00:00", "create_by": "tueld", "update_at": "2017-06-23 10:00:00", "update_by": "tueld" },
  { "deal_id": "124", "deal_name": "This is a sample deal", "contact_name": "Lê Văn B", "contact_id": "124", "company_name": "Company B", "company_id": "124", "deal_value": "2.000.000", "deal_stage": "Finish", "create_at": "2017-06-23 10:00:00", "create_by": "tueld", "update_at": "2017-06-23 10:00:00", "update_by": "tueld" },
  { "deal_id": "125", "deal_name": "This is a sample deal", "contact_name": "Trần Thị C", "contact_id": "125", "company_name": "Company A", "company_id": "125", "deal_value": "1.000.000", "deal_stage": "Inprogress", "create_at": "2017-06-23 10:00:00", "create_by": "tueld", "update_at": "2017-06-23 10:00:00", "update_by": "tueld" },
  { "deal_id": "123", "deal_name": "This is a sample deal", "contact_name": "Nguyễn Văn A", "contact_id": "123", "company_name": "Company A", "company_id": "123", "deal_value": "1.000.000", "deal_stage": "New", "create_at": "2017-06-23 10:00:00", "create_by": "tueld", "update_at": "2017-06-23 10:00:00", "update_by": "tueld" },
  { "deal_id": "124", "deal_name": "This is a sample deal", "contact_name": "Lê Văn B", "contact_id": "124", "company_name": "Company B", "company_id": "124", "deal_value": "2.000.000", "deal_stage": "Finish", "create_at": "2017-06-23 10:00:00", "create_by": "tueld", "update_at": "2017-06-23 10:00:00", "update_by": "tueld" },
  { "deal_id": "125", "deal_name": "This is a sample deal", "contact_name": "Trần Thị C", "contact_id": "125", "company_name": "Company A", "company_id": "125", "deal_value": "1.000.000", "deal_stage": "Inprogress", "create_at": "2017-06-23 10:00:00", "create_by": "tueld", "update_at": "2017-06-23 10:00:00", "update_by": "tueld" }
];

// export const QUEUES: SelectItem[];

@Injectable()
export class DealService {
  public deal_list: Deal[];
  public searchModel: ContactSearch;

  constructor(private http: Http) {
    this.searchModel = new ContactSearch();
  }

  public loadData() {
    this.getDealList().then(
      conversationlist => {
        this.deal_list = conversationlist;
      },
      error => {
        console.log('error fetching news');
      });
  }

  getDealList() {
    //: Observable<Contact[]> {
    //let params: URLSearchParams = new URLSearchParams();
    //params.set('agent_id', this.searchModel.agent_id);
    //params.set('queue_id', this.searchModel.queue_id);
    //return this.http.get(GET_AGENT_QUEUE_LIST, { search: params })
    //  .map((r: Response) => r.json() as AgentQueue[])
    //  .catch(this.handleError);
    return Promise.resolve(DEALS);
  }

  getDealListByContact(contact_id: string) {
    let deals: Deal[];
    for (let contact of DEALS) {
      if (contact_id == contact.contact_id)
        deals.push(contact);
    }
    return deals
  }

  getDealListByCompany(contact_id: string) {
    let deals: Array<Deal> = [];
    for (let contact of DEALS) {
      if (contact_id == contact.company_id) {
        deals.push(contact);
      }
    }
    return deals;
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
        this.loadData();
        return r;
      });
  }

  deleteAgentQueue(agent_id: string, queue_id: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('agent_id', agent_id);
    params.set('queue_id', queue_id);
    return this.http.get(ENDPOINT_SERVICE.DELETE_AGENT_QUEUE, { search: params })
      .map((r: Response) => {
        this.loadData();
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
        this.loadData();
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
