import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieActionDTO} from '../interfaces/cookie';
import {Paths} from '../enums/paths';


@Injectable({
  providedIn: 'root'
})
export class HttpCookieClientService {
  constructor(private readonly httpClient: HttpClient) {}

  public postCookie(cookieAction: CookieActionDTO): Observable<any> {
    return this.httpClient.post(Paths.Cookies, JSON.stringify(cookieAction));
  }
}
