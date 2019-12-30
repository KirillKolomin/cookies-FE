import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {CookieActions} from './enums/cookie-actions';
import {HttpCookieClientService} from './services/http-cookie-client.service';
import {tap} from 'rxjs/operators';
import {Paths} from './enums/paths';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cookiesFormGroup: FormGroup;

  cookieActionOptions = Object.keys(CookieActions);

  get optionsFormGroup(): FormGroup {
    return this.cookiesFormGroup.get('options') as FormGroup;
  }

  constructor(public readonly formBuilder: FormBuilder, public readonly httpCookieClient: HttpCookieClientService) {
  }

  ngOnInit(): void {
    this.cookiesFormGroup = this.formBuilder.group({
      action: [CookieActions.Set],
      name: [''],
      options: this.formBuilder.group({
        maxAge: [0],
        signed: [false],
        expires: [new Date()],
        httpOnly: [true],
        path: Paths.Cookies,
        domain: '',
        secure: true,
        // encode: (val: string) => string,
        // sameSite: boolean | 'lax' | 'strict' | 'none',
      }),
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
