import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

export interface WebResponse {
  message: string;
  data: any;
  error: any;
}

export interface WebUpdateModel {
  propName: string;
  propValue: any;
}

@Injectable({
  providedIn: "root",
})
export class WebReqService {
  corsHeaders = new HttpHeaders({
    "Content-Type": "application/json",
  });

  constructor(public http: HttpClient) { }

  readonly ROOT_URL = "http://172.20.10.6:80";
  // readonly ROOT_URL = "http://192.168.0.90";

  get(
    uri: string,
    options?: {
      params?: HttpParams | { [param: string]: string | string[] };
    }
  ) {
    return this.http.get<WebResponse>(`${this.ROOT_URL}/${uri}`, {
      params: options !== undefined ? options.params : undefined,
      headers: this.corsHeaders,
    });
  }

  post(uri: string, payload: Object, includeAuthHeaders: boolean = true){
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: string, payload: Object) {
    return this.http.patch<WebResponse>(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete<WebResponse>(`${this.ROOT_URL}/${uri}`);
  }
}
