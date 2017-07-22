import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { AgentQueue, AgentQueueSearch, Contact } from '../model';

import { Observable } from 'rxjs/Observable';
import { ENDPOINT_SERVICE, CREDENTIAL } from "../config/endpoint.const";
import { ContactSearch } from '../model/contactsearch';
import { Company } from '../model/company';

/*
export const COMPANY: Contact[] = [
  { "id": "123", "name": "Nguyễn Văn A", "job_title": "CEO", "company": "Cty TNHH Phúc Anh", "phone": "098888888", "email": "abc@gmail.com", "address": "Số 1 Trần Đại Nghĩa - Hai Bà Trưng - Hà Nội", "website": "helloworld.com", "open_deal": "1.000.000", "last_contacted_time": "2017-06-10", "owner": "tueld", "create_at": "2017-06-23 10:00:00", "create_by": "tueld", "update_at": "2017-06-23 10:00:00", "update_by": "tueld" },
  { "id": "124", "name": "Lê Văn B", "job_title": "Staff", "company": "Company B", "phone": "098888888", "email": "abc@gmail.com", "address": "Hai Ba Trung - Ha Noi", "website": "helloworld.com", "open_deal": "2.000.000", "last_contacted_time": "2017-06-10", "owner": "tueld", "create_at": "2017-06-23 10:00:00", "create_by": "tueld", "update_at": "2017-06-23 10:00:00", "update_by": "tueld" },
  { "id": "125", "name": "Trần Thị C", "job_title": "CEO", "company": "Cty TNHH Phúc Anh", "phone": "098888888", "email": "abc@gmail.com", "address": "Số 1 Trần Đại Nghĩa - Hai Bà Trưng - Hà Nội", "website": "helloworld.com", "open_deal": "1.000.000", "last_contacted_time": "2017-06-10", "owner": "tueld", "create_at": "2017-06-23 10:00:00", "create_by": "tueld", "update_at": "2017-06-23 10:00:00", "update_by": "tueld" },
  { "id": "126", "name": "Nguyễn Văn A", "job_title": "Staff", "company": "Company B", "phone": "098888888", "email": "abc@gmail.com", "address": "Hai Ba Trung - Ha Noi", "website": "helloworld.com", "open_deal": "1.000.000", "last_contacted_time": "2017-06-10", "owner": "tueld", "create_at": "2017-06-23 10:00:00", "create_by": "tueld", "update_at": "2017-06-23 10:00:00", "update_by": "tueld" },
  { "id": "127", "name": "Lê Văn B", "job_title": "CEO", "company": "Cty TNHH Phúc Anh", "phone": "098888888", "email": "abc@gmail.com", "address": "Số 1 Trần Đại Nghĩa - Hai Bà Trưng - Hà Nội", "website": "helloworld.com", "open_deal": "1.000.000", "last_contacted_time": "2017-06-10", "owner": "tueld", "create_at": "2017-06-23 10:00:00", "create_by": "tueld", "update_at": "2017-06-23 10:00:00", "update_by": "tueld" },
  { "id": "128", "name": "Nguyễn Văn A", "job_title": "Staff", "company": "Cty TNHH Phúc Anh", "phone": "098888888", "email": "abc@gmail.com", "address": "Hai Ba Trung - Ha Noi", "website": "helloworld.com", "open_deal": "1.000.000", "last_contacted_time": "2017-06-10", "owner": "tueld", "create_at": "2017-06-23 10:00:00", "create_by": "tueld", "update_at": "2017-06-23 10:00:00", "update_by": "tueld" },
  { "id": "129", "name": "Nguyễn Văn A", "job_title": "CEO", "company": "Company B", "phone": "098888888", "email": "abc@gmail.com", "address": "Số 1 Trần Đại Nghĩa - Hai Bà Trưng - Hà Nội", "website": "helloworld.com", "open_deal": "11.000.000", "last_contacted_time": "2017-06-10", "owner": "tueld", "create_at": "2017-06-23 10:00:00", "create_by": "tueld", "update_at": "2017-06-23 10:00:00", "update_by": "tueld" },
  { "id": "130", "name": "Lê Văn B", "job_title": "Staff", "company": "Cty TNHH Phúc Anh", "phone": "098888888", "email": "abc@gmail.com", "address": "Hai Ba Trung - Ha Noi", "website": "helloworld.com", "open_deal": "1000.000", "last_contacted_time": "2017-06-10", "owner": "tueld", "create_at": "2017-06-23 10:00:00", "create_by": "tueld", "update_at": "2017-06-23 10:00:00", "update_by": "tueld" }
];
*/
//export const QUEUES: SelectItem[];

@Injectable()
export class CompanyService {
  public companylist: Company[];
  public queuelist: string[];
  public agentlist: string[];
  public searchModel: ContactSearch;

  constructor(private http: Http) {
    this.searchModel = new ContactSearch();
  }

  public loadDataTable() {
    this.getCompanyList().subscribe(
      companylist => {
        this.companylist = companylist;
      },
      error => {
        console.log('error fetching news');
      });
  }

  getCompanyList() {//: Observable<Company[]> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('client_id', CREDENTIAL.CLIENT_ID);
    //params.set('org_id', CREDENTIAL.ORG_ID);
    //params.set('role_id', CREDENTIAL.ROLE_ID);

    return this.http.get(ENDPOINT_SERVICE.GET_COMPANY_LIST, { search: params })
      .map((r: Response) => r.json() as Company[])
      .catch(this.handleError);
    //return Promise.resolve(COMPANY);
  }

  getContactDetail(contact_id: string) {
    for (let contact of this.companylist) {
      if (contact_id == contact.id)
        return contact;
    }
  }

  addCompany(name: string, phone: string, email: string, parent_org: string, address: string, website: string): any {
    let params: URLSearchParams = new URLSearchParams();
    let result = 0;
    params.set('name', name);
    params.set('phone', phone);
    params.set('email', email);
    params.set('parent_org', parent_org);
    params.set('address', address);
    params.set('website', website);
    params.set('owner', CREDENTIAL.USER_NAME);
    this.http.get(ENDPOINT_SERVICE.ADD_COMPANY, { search: params })
      .map((r: Response) => {
        this.loadDataTable();
        result = 1;
      });
    return result;
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

