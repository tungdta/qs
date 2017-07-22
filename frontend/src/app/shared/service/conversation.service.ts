import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { AgentQueue, AgentQueueSearch, Contact } from '../model';

import { Observable } from 'rxjs/Observable';
import { ENDPOINT_SERVICE } from "../config/endpoint.const";
import { ContactSearch } from '../model/contactsearch';
import { Conversation } from '../model/conversation';

export const CONVERSATIONS: Conversation[] = [
  { "id": "123", "type": "call", "contact_name": "Nguyễn Văn A", "contact_phone": "098888888", "contact_email": "abc@gmail.com", "subject": "Hong Kong kỷ niệm 20 năm Anh trao trả về Trung Quốc ", "content": "Lễ kỷ niệm 20 năm Hong Kong được Anh trao trả về Trung Quốc và lễ nhậm chức trưởng đặc khu Hong Kong diễn ra sáng nay", "start_time": "2017-06-10", "end_time": "2017-06-23 10:00:00" },
  { "id": "124", "type": "chat", "contact_name": "Lê Văn B", "contact_phone": "098888888", "contact_email": "abc@gmail.com", "subject": "Hong Kong kỷ niệm 20 năm Anh trao trả về Trung Quốc ", "content": "Lễ kỷ niệm 20 năm Hong Kong được Anh trao trả về Trung Quốc và lễ nhậm chức trưởng đặc khu Hong Kong diễn ra sáng nay", "start_time": "2017-06-10", "end_time": "2017-06-23 10:00:00" },
  { "id": "125", "type": "email", "contact_name": "Trần Thị C", "contact_phone": "098888888", "contact_email": "abc@gmail.com", "subject": "Hong Kong kỷ niệm 20 năm Anh trao trả về Trung Quốc ", "content": "Lễ kỷ niệm 20 năm Hong Kong được Anh trao trả về Trung Quốc và lễ nhậm chức trưởng đặc khu Hong Kong diễn ra sáng nay", "start_time": "2017-06-10", "end_time": "2017-06-23 10:00:00" }
];

//export const QUEUES: SelectItem[];

@Injectable()
export class ConversationService {
  public conversation_list: Conversation[];
  public queuelist: string[];
  public agentlist: string[];
  public searchModel: ContactSearch;

  constructor(private http: Http) {
    this.searchModel = new ContactSearch();
  }

  public loadData() {
    this.getConversationList().then(
      conversationlist => {
        this.conversation_list = conversationlist;
      },
      error => {
        console.log('error fetching news');
      });
  }

  getConversationList() {//: Observable<Contact[]> {
    //let params: URLSearchParams = new URLSearchParams();
    //params.set('agent_id', this.searchModel.agent_id);
    //params.set('queue_id', this.searchModel.queue_id);
    //return this.http.get(GET_AGENT_QUEUE_LIST, { search: params })
    //  .map((r: Response) => r.json() as AgentQueue[])
    //  .catch(this.handleError);
    return Promise.resolve(CONVERSATIONS);
  }

  cloneConversation(conversation: Conversation) {
    this.conversation_list.push(conversation);
  }

  getContactDetail(contact_id: string) {
    for (let contact of CONVERSATIONS) {
      if (contact_id == contact.id)
        return contact;
    }
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

