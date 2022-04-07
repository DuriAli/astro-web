import { Injectable } from "@angular/core";
import { WebReqService, WebResponse, WebUpdateModel } from "../web-req.service";

@Injectable({
  providedIn: "root",
})
export class ServoService {
  constructor(private webReqService: WebReqService) { }

  public spinServo(): Promise<any> {
    return this.webReqService
      .get("/")
      .toPromise()
      .then((response) => {
        return response;
      });
  }
}
