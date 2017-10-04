import { Component ,OnInit } from '@angular/core';
import {User} from '../../common/user';
@Component({
    selector:'app-home',
    templateUrl:'home.html',
    styleUrls:['home.css']
})
export class HomeComponent{
    public  user:User;
    public  menuList:Array<any>;
    constructor(){
           this.user={
            sex: 'male',
            userName: 'Mr.zhang',
            userId: 1,
            userMobile: 12345678901,
            userPassword:'qwewqewqeq'
           };
           this.menuList=[
               {'name':'knowledge','menu':[{'name':'MR.zhang'},{'name':'MR.li'}]},
               {'name':'power','menu':[{'name':'MR.wang'},{'name':'MR.zhao'}]},
               {'name':'study','menu':[{'name':'MR.zhou'},{'name':'MR.zhen'}]},
               {'name':'product'},
            ];
            console.log( this.menuList);
    }
    showUserName(e){
        console.log(e.target.innerText);
    }
}
