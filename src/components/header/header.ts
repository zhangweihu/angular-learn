import { Component ,Input,Output ,EventEmitter } from '@angular/core';
import {User} from '../../common/user';
@Component({
    selector:'app-header',
    templateUrl:'header.html',
    styleUrls:['header.css']
})
export class HeaderDemoComponent{
         constructor(){}
@Input() user: User;
@Output() showUser:EventEmitter<any> = new EventEmitter();
showUserName(e){
    this.showUser.emit(e);
}
}
