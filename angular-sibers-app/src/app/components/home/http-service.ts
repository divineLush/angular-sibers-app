import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
  
@Injectable()
export class HttpService {
  
    constructor(private http: HttpClient) {}
      
    getData(): Observable<any> {
        return this.http.get('http://demo.sibers.com/users')
    }

    postData(data: any): Observable<any> {
        return this.http.post('http://demo.sibers.com/users', JSON.stringify(data))
    }
}