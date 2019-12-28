import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CookieActions} from './enums/cookie-actions';
import {HttpCookieClientService} from './services/http-cookie-client.service';
import {tap} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cookiesFormGroup: FormGroup;

  cookieActionOptions = Object.keys(CookieActions);

  constructor(public readonly formBuilder: FormBuilder, public readonly httpCookieClient: HttpCookieClientService) {
  }

  ngOnInit(): void {
    this.cookiesFormGroup = this.formBuilder.group({
      action: [CookieActions.Set],
      name: [''],
      value: ['']
    });
  }

  onSubmit(): void {
    this.httpCookieClient.postCookie(this.cookiesFormGroup.value)
      .pipe(tap((data) => {
        console.log(data);
      }))
      .subscribe();
  }
}
