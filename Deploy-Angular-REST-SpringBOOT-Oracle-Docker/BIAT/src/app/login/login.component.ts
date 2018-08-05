import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { User } from '../../model/model.user';
import { AuthService } from '../../services/auth.service';
import { SystemJsNgModuleLoader } from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import { tokenKey } from '@angular/core/src/view/util';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    user: User=new User();
    currentUser: User;
    userStorage : String="";
    errorMessage:string;
    constructor(private authService :AuthService, private router: Router) {
        this.currentUser=JSON.parse(localStorage.getItem('currentUser'))

    }



    ngOnInit() {
        console.log(window.clientInformation)
        console.log(window.parent.localStorage)
    }

    login(){
      this.authService.logIn(this.user)
        .subscribe(data=>{
            console.log(this.user)
            console.log(window.localStorage)
            console.log(this.userStorage = localStorage.getItem('currentUser'))
            console.log()
            console.log(JSON.stringify(this.userStorage))
            if(this.userStorage==null){
                this.errorMessage="error :  Username or password is incorrect";
            }else{
          this.router.navigate(['/dashboard']);
            }
          },err=>{
          this.errorMessage="error :  Username or password is incorrect";
          }
        )
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}
