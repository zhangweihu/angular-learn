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
   * get请求
   * @param url
   * @param options
   *
   */
    public HttpGet(url: string,options: Object):Observable<any>{
             return this._http.get(url,options)
             .map(res=>res.json() )
             .catch((error:any)=>Observable.throw(error.json().error||'Server error'));
    }
     /**
   * post请求
   * @param url
   * @param options
   * @param body
   */
  public HttpPost(url: string,options: Object,body:Object):Observable<any>{
    return this._http.post(url,options,body)
    .map(res=>res.json() )
    .catch((error:any)=>Observable.throw(error.json().error||'Server error'));
}

}


