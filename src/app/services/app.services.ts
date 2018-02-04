import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class AppServices {
  public readonly baseUrl = 'https://api.github.com';

  constructor(private http: Http) {}

  public getAllUsers() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.baseUrl}/users`)
        .map(res => res.json())
        .toPromise()
        .then(resolve)
        .catch(reject)
    })
  }

  public getUser(name: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.baseUrl}/users/${name}`)
        .map(res => res.json())
        .toPromise()
        .then(resolve)
        .catch(reject)
    })
  }
}
