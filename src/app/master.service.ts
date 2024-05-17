import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  http: any;

  constructor() { }

  Getchartinfo () {
    return this.http.get("http://localhost:3000/sales");
  }
}
