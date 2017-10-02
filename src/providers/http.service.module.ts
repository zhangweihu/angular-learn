/*
author:zhangweihu
date:2017-10-02
Description:http service
*/
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';  //导入rxjs

@Injectable()
export class HttpService{
    constructor(private _http:Http){}
    /**
   * 处理请求失败事件
   * @param url
   * @param options
   * @param err
   */
    public Http(url: string,options: Object):Observable<any>{
             return this._http.get(url,options)
             .map(res=>res.json() )
             .catch((error:any)=>Observable.throw(error.json().error||'Server error'));
    }
   
}


