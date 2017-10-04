import { Component ,Input,Output ,EventEmitter} from '@angular/core';
import {User} from '../../common/user';
@Component({
    selector:'app-sidebar',
    templateUrl:'Sidebar.html',
    styleUrls:['Sidebar.css']
})
export class SliderbarDemoComponent{
         constructor(){}
@Input() Menu:any;


}
