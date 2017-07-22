import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ENDPOINT_SERVICE } from "../config/endpoint.const";
import { BlackListModel } from '../model/blacklistModel';
import { BlackListSearchModel } from '../model/blackListSearchModel';

@Injectable()
export class BlackListService {
    public blackList: BlackListModel[];
    // searchBlackList: BlackListSearchModel = new BlackListSearchModel();
    constructor(private http: Http) {

    }

    public loadDataBlackListTable(searchBlackList) {
        this.getDataBlackList(searchBlackList).subscribe(
            blackList => {
                this.blackList = blackList;
            },
            error => {
                console.log('error fetching news');
            });
    }
    getDataBlackList(searchBlackList): Observable<BlackListModel[]> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('caller', searchBlackList.caller);
        params.set('type_id', searchBlackList.type_id);
        return this.http.get(ENDPOINT_SERVICE.GET_DATA_BLACKLIST, { search: params })
            .map((r: Response) => r.json() as BlackListModel[])
            .catch(this.handleError);
    }

    protected handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            console.log(error);
            const body = error.json() || '';
            console.log('loi-->....');
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        //console.error(errMsg);
        return Observable.throw(errMsg);
    }

}