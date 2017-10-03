import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../../common/user';
import {HttpService} from '../../providers/http.service.module';
import {Observable} from 'rxjs/Rx';
@Component({
    selector:'app-login',
    templateUrl:'login.html',
    styleUrls: ['login.css']
})
export class LoginComponent{
    private userName:User['userName'];
    private userPassword:User['userPassword'];
    constructor(private router:Router, private http:HttpService){
               }
    login(){
       if(this.userName !==undefined && this.userPassword!==undefined){
           const options = {
                 'Content-Type': 'application/x-www-form-urlencoded'
            };
            const testtUrl='';
            this.http.Http(testtUrl,options).subscribe(
                  data=>{
                      console.log(data);
                  },
                  error=>{
                    console.error('访问出错!');
                    return Observable.throw(error);
                  }
            );
           const sure = confirm('登录成功!即将跳转页面');
           if(sure===true){
               this.router.navigate(['home']);
            }
        }else{
            alert('请填写用户名以及密码!');
        }
    }
}
