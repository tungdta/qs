import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { AgentQueue, AgentQueueSearch, Contact } from '../model';

import { Observable } from 'rxjs/Observable';
import { ENDPOINT_SERVICE } from "../config/endpoint.const";
import { ContactSearch } from '../model/contactsearch';
import { Deal } from '../model/deal';
import { Task } from '../model/task';

export const TASK: Task[] = [
  { "task_id": "45", "title": "This is a sample task, đây là ví dụ về task. Nội dung dài một chút.", "description": "This is a task description, đây là ví dụ về task. Nội dung dài một chút.", "contact_id": "123", "deal_id": "company", "due_date": "2017-06-23 10:00:00", "created_by": "tueld", "status": true, "assign_to_id": "namlv" },
  { "task_id": "46", "title": "This is a sample task", "description": "This is a task description", "contact_id": "123", "deal_id": "company", "due_date": "2017-06-23 10:00:00", "created_by": "tueld", "status": false, "assign_to_id": "namlv" },
  { "task_id": "47", "title": "This is a sample task, đây là ví dụ về task. Nội dung dài một chút.", "description": "This is a task description, đây là ví dụ về task. Nội dung dài một chút.", "contact_id": "123", "deal_id": "company", "due_date": "2017-06-23 10:00:00", "created_by": "tueld", "status": true, "assign_to_id": "namlv" },
  { "task_id": "45", "title": "This is a sample task", "description": "This is a task description", "contact_id": "123", "deal_id": "company", "due_date": "2017-06-23 10:00:00", "created_by": "tueld", "status": false, "assign_to_id": "namlv" },
  { "task_id": "46", "title": "This is a sample task, đây là ví dụ về task. Nội dung dài một chút.", "description": "This is a task description, đây là ví dụ về task. Nội dung dài một chút.", "contact_id": "123", "deal_id": "company", "due_date": "2017-06-23 10:00:00", "created_by": "tueld", "status": true, "assign_to_id": "namlv" },
  { "task_id": "47", "title": "This is a sample task", "description": "This is a task description", "contact_id": "123", "deal_id": "company", "due_date": "2017-06-23 10:00:00", "created_by": "tueld", "status": false, "assign_to_id": "namlv" },
  { "task_id": "45", "title": "This is a sample task, đây là ví dụ về task. Nội dung dài một chút.", "description": "This is a task description, đây là ví dụ về task. Nội dung dài một chút.", "contact_id": "123", "deal_id": "company", "due_date": "2017-06-23 10:00:00", "created_by": "tueld", "status": true, "assign_to_id": "namlv" },
  { "task_id": "46", "title": "This is a sample task", "description": "This is a task description", "contact_id": "123", "deal_id": "company", "due_date": "2017-06-23 10:00:00", "created_by": "tueld", "status": false, "assign_to_id": "namlv" },
  { "task_id": "47", "title": "This is a sample task, đây là ví dụ về task. Nội dung dài một chút.", "description": "This is a task description, đây là ví dụ về task. Nội dung dài một chút.", "contact_id": "123", "deal_id": "company", "due_date": "2017-06-23 10:00:00", "created_by": "tueld", "status": true, "assign_to_id": "namlv" },
  { "task_id": "45", "title": "This is a sample task", "description": "This is a task description", "contact_id": "123", "deal_id": "company", "due_date": "2017-06-23 10:00:00", "created_by": "tueld", "status": false, "assign_to_id": "namlv" },
  { "task_id": "46", "title": "This is a sample task, đây là ví dụ về task. Nội dung dài một chút.", "description": "This is a task description, đây là ví dụ về task. Nội dung dài một chút.", "contact_id": "123", "deal_id": "company", "due_date": "2017-06-23 10:00:00", "created_by": "tueld", "status": true, "assign_to_id": "namlv" },
  { "task_id": "47", "title": "This is a sample task", "description": "This is a task description", "contact_id": "123", "deal_id": "company", "due_date": "2017-06-23 10:00:00", "created_by": "tueld", "status": false, "assign_to_id": "namlv" }
];

@Injectable()
export class TaskService {
  public task_list: Task[];

  constructor(private http: Http) {
  }

  public loadData() {
    this.getTaskList().then(
      tasklist => {
        this.task_list = tasklist;
      },
      error => {
        console.log('error fetching news');
      });
  }

  getTaskList() {//: Observable<Contact[]> {
    //let params: URLSearchParams = new URLSearchParams();
    //params.set('agent_id', this.searchModel.agent_id);
    //params.set('queue_id', this.searchModel.queue_id);
    //return this.http.get(GET_AGENT_QUEUE_LIST, { search: params })
    //  .map((r: Response) => r.json() as AgentQueue[])
    //  .catch(this.handleError);
    return Promise.resolve(TASK);
  }
  /*
  getDealListByContact(contact_id: string) {
    let deals:Task[];
    for (let task of TASK) {
      if (contact_id == task.contact_id)
        deals.push(task);
    }
    return deals
  }
*/

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
