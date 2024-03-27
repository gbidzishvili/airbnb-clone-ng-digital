import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseProxyService {
  constructor(public http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // set new headers to HttpOptions headers
  setHeaders(headers: Map<string, string>) {
    headers.forEach((value: string, key: string) => {
      this.httpOptions.headers = this.httpOptions.headers.set(key, value);
    });
  }

  // reset HttpOptions to its original form
  resetHeadersToOrigin(): void {
    this.httpOptions.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  // clear HttpOptions
  clearHeaders(): void {
    this.httpOptions.headers = new HttpHeaders({});
  }

  // HttpClient API get() method => Fetch list
  get<T>(apiUrl: string, filters?: Object): Observable<T> {
    return this.http
      .get<T>(apiUrl + this.queryParams(filters))
      .pipe<T>(retry(1)) as Observable<T>;
  }

  //  HttpClient API get() method => Fetch signle
  getById<T>(
    id: any,
    apiUrl: string,
    additionalRouteName: any = undefined
  ): Observable<T> {
    var fullUrl = `${apiUrl}/${id}${
      additionalRouteName != undefined ? `/${additionalRouteName}` : ``
    }`;
    return this.http.get<T>(fullUrl).pipe<T>(retry(1)) as Observable<T>;
  }

  // HttpClient API post() method => Create
  create<T>(
    item: any,
    apiUrl: string,
    getFullResponse: boolean = false
  ): Observable<HttpEvent<T>> {
    var options: any = Object.assign({}, this.httpOptions);
    if (getFullResponse) {
      options.observe = 'response';
    }
    return this.http.post<T>(apiUrl, item, options) as Observable<HttpEvent<T>>;
  }
  // HttpClient API patch() method => Update
  update<T>(
    item: any,
    apiUrl: string,
    setHeaders: boolean = true
  ): Observable<T> {
    return this.http
      .patch<T>(
        apiUrl,
        JSON.stringify(item),
        setHeaders ? this.httpOptions : {}
      )
      .pipe<T>(retry(1)) as Observable<T>;
  }
  // HttpClient API put() method => Update
  updateFullModel<T>(
    item: any,
    apiUrl: string,
    setHeaders: boolean = true
  ): Observable<T> {
    return this.http
      .put<T>(apiUrl, JSON.stringify(item), setHeaders ? this.httpOptions : {})
      .pipe<T>(retry(1)) as Observable<T>;
  }
  // HttpClient API delete() method => Delete
  delete<T>(apiUrl: string, id: any = undefined): Observable<T> {
    var apiUrl = apiUrl;
    if (id) {
      apiUrl = `${apiUrl}/${id}`;
    }
    return this.http
      .delete<T>(apiUrl, this.httpOptions)
      .pipe<T>(retry(1)) as Observable<T>;
  }

  queryParams(filters: Object | undefined): string {
    if (filters) {
      let params = '?';
      for (let key in filters) {
        let value = filters[key as keyof typeof filters];
        if (Array.isArray(value)) {
          for (let index = 0; index < value.length; index++) {
            params += `${key}=${value[index]}&`;
          }
        } else {
          params += `${key}=${value}&`;
        }
      }
      return params.slice(0, params.length - 1);
    } else {
      return '';
    }
  }
}
