/*
https://www.angular.cn/guide/router#通配符路由
将路由部分进行分离
author:zhangweihu
date：2017.9.30
*/
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from '../pages/login/login';
import {HomeComponent} from '../pages/home/home';
import {NoFoundComponent} from '../pages/nofound/nofound';
const routes: Routes=[
    { path: '', redirectTo: '/login', pathMatch: 'full' },  //此处是当你输入路径为''匹配login路由展示login页面  pathMatch:'full'-->整个路由都为空时进行匹配
    { path: 'login',  component: LoginComponent },
    { path: 'home',  component: HomeComponent },
    { path:'**',     component: NoFoundComponent}
];
@NgModule({
    imports: [  CommonModule,
                 RouterModule.forRoot(routes)
              ],  //
    exports: [ RouterModule ],
    declarations: []
})
export class AppRoutingModule {}  //导出module

