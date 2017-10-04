import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpService} from '../providers/http.service.module';
import {AppRoutingModule} from './app.router.module';
import { AppComponent } from './app.component';
import {LoginComponent} from '../pages/login/login';
import {HomeComponent} from '../pages/home/home';
import {NoFoundComponent} from '../pages/nofound/nofound';
import {HeaderDemoComponent} from '../components/header/header';
@NgModule({
  declarations: [    //此处引入指令，组件，管道--》此处的都会被@NgModule元数据独有
    AppComponent,
    LoginComponent,
    HomeComponent,
    NoFoundComponent,
    HeaderDemoComponent  //组件头部
  ],
  imports: [   //引入特性模块
    BrowserModule, //浏览器所需
    AppRoutingModule, //路由模块
    FormsModule,  //表单模块
    HttpModule   //http模块
  ],
  providers: [HttpService],  //注入通用httpservice
  bootstrap: [AppComponent]   //导入根模块
})
export class AppModule { }
