import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Forpago } from '../models/forpago';

@Injectable({
  providedIn: 'root'
})
export class ForpagoService {

  selectedForpago: Forpago;
  forpago: Forpago[];

  readonly URL_API = 'http://localhost:3000/api/forpago';

  constructor(private http: HttpClient) {
    this.selectedForpago = new Forpago();
   }

  getForspago() {
    return this.http.get(this.URL_API);
  }
  
  postForpago(forpago: Forpago) {
    return this.http.post(this.URL_API, forpago);
  }

  putForpago(tipohab: Forpago) {
    return this.http.put(this.URL_API + `/${tipohab._id}`, this.forpago);
  }

  deleteForpago(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
