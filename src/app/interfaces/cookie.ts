import {CookieActions} from '../enums/cookie-actions';

export interface CookieActionDTO {
  action: CookieActions;
  name: string;
  value: string;
}
