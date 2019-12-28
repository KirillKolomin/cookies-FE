import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

enum CookieActions {
  delete = 'delete',
  get = 'get',
  set = 'set'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cookiesFormGroup: FormGroup;

  cookieActionOptions = Object.keys(CookieActions);

  constructor(public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.cookiesFormGroup = this.formBuilder.group({
      action: [CookieActions.set],
      name: [''],
      value: ['']
    });
  }

  onSubmit(): void {
    console.log(this.cookiesFormGroup);
  }
}
