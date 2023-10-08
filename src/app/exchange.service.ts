import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private http: HttpClient) { }

  getAllValues(){
    //traitement pour récuperer la clé 
    let h = new HttpParams().set(
      'access_key',
      '76d96bdb4f34c8c7e2882add7e435f1a'
    );
    return this.http.get('http://apilayer.net/api/live', { params: h});
  }
}
