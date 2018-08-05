import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import { HttpClientModule,HttpClient,HttpHeaders } from '@angular/common/http';
import {User} from "../model/model.user";
import { map } from 'rxjs/operators';
import { AppComponent } from '../app/app.component';
import { HttpParams } from '@angular/common/http';
@Injectable()
export class AuthService {
  constructor(public http: HttpClient) { }

  public logIn(user: User){

    let headers = new Headers();
    headers.append('Accept', 'application/json')
    // creating base64 encoded String from user name and password
    var base64Credential: string = btoa( user.username+ ':' + user.password);
    headers.append("Authorization", "Basic " + base64Credential);
     console.log(base64Credential)

    let options = new HttpParams();
    //options.headers=headers;

    const requestOptions = {
        params: new HttpParams(),
      };

      requestOptions.params.append("Authorization", "Basic " + base64Credential);


    return this.http.get("http://192.168.99.100:8080/account/login?username="+user.username+"&password="+user.password , requestOptions)
      .pipe(map((response: Response) => {
      // login successful if there's a jwt token in the response
      let user = response;// the returned user object is a principal object
      if (user) {
        // store user details  in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    }));
  }

  logOut() {
    // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        sessionStorage.removeItem('reference');
        localStorage.removeItem('reference');


  }
}
