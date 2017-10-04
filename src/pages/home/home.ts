import { Component ,OnInit } from '@angular/core';
import {User} from '../../common/user';
@Component({
    selector:'app-home',
    templateUrl:'home.html',
    styleUrls:['home.css']
})
export class HomeComponent{
    public  user:User;
    constructor(){
           this.user={
            sex: 'male',
            userName: 'Mr.zhang',
            userId: 1,
            userMobile: 12345678901,
            userPassword:'qwewqewqeq'
           };
    }
    showUserName(e){
        console.log(e.target.innerText);
    }
}
