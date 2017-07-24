import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { AgentQueue, AgentQueueSearch, Contact } from '../model';

import { Observable } from 'rxjs/Observable';
import { ENDPOINT_SERVICE, CREDENTIAL } from "../config/endpoint.const";
import { ContactSearch } from '../model/contactsearch';

/*
export const CONTACTS: Contact[] = [
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
export class ContactService {
  public contactlist: Contact[];
  public contactNameList: string[];
  public test: Contact;
  public queuelist: string[];
  public agentlist: string[];
  public searchModel: ContactSearch;

  constructor(private http: Http) {
    this.searchModel = new ContactSearch();
    this.contactNameList = new Array();
  }

  public loadDataTable() {
    this.getContactList().subscribe(
      contactlist => {
        this.contactlist = contactlist;
        //Lấy danh sách Name Company
        for (let contact of this.contactlist) {
          this.contactNameList.push(contact.name);
        }
      },
      error => {
        console.log('error fetching news');
      });
  }

  getContactList() {//: Observable<Contact[]> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('client_id', CREDENTIAL.CLIENT_ID);
    //params.set('org_id', CREDENTIAL.ORG_ID);
    //params.set('role_id', CREDENTIAL.ROLE_ID);

    return this.http.get(ENDPOINT_SERVICE.GET_COMPANY_LIST, { search: params })
      .map((r: Response) => r.json() as Contact[])
      // .catch(this.handleError);
    //return Promise.resolve(COMPANY);
  }

  getContactItem(contactId: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('clientId', CREDENTIAL.CLIENT_ID);
    params.set('id', contactId);

    return this.http.get(ENDPOINT_SERVICE.GET_COMPANY_ITEM, { search: params })
      .map((r: Response) => r.json() as Contact)
      // .catch(this.handleError);
  }

  getContactDetail(contact_id: string) {
    let contactDetail: Contact;
    try {
      for (let contact of this.contactlist) {
        if (contact_id == contact.id) {
          contactDetail = contact;
          break;
        }
      }
    } catch (ex) {
      console.log(ex);
    }
    return contactDetail;
  }



  addContact(name: string, phone: string, email: string, parentId: string, address: string, website: string, createdBy: string, clientId: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('name', name);
    params.set('phone', phone);
    params.set('email', email);
    params.set('parentId', parentId);
    params.set('address', address);
    params.set('website', website);
    params.set('createdBy', createdBy);
    params.set('clientId', clientId);

    return this.http.get(ENDPOINT_SERVICE.ADD_COMPANY, { search: params })
      .map((r: Response) => {
        this.loadDataTable();
        return r;
      })
      // .catch(this.handleError);;
  }

  updateContact(
    id: string,
    name: string,
    parentId: string,
    phone: string,
    email: string,
    address: string,
    website: string,
    updatedBy: string,
    clientId: string
  ): Observable<any> {

    let params: URLSearchParams = new URLSearchParams();
    params.set('id', id);
    params.set('name', name);
    params.set('parentId', parentId);
    params.set('phone', phone);
    params.set('email', email);
    params.set('address', address);
    params.set('website', website);
    params.set('updatedBy', updatedBy);
    params.set('clientId', clientId);
    return this.http.get(ENDPOINT_SERVICE.UPDATE_COMPANY, { search: params })
      .map((r: Response) => {
        //this.loadDataTable();
        this.loadDataTable();
        return r;
      });
  }

  deleteContact(id: string, clientId: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', id);
    params.set('clientId', clientId);
    return this.http.get(ENDPOINT_SERVICE.DELETE_COMPANY, { search: params })
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
