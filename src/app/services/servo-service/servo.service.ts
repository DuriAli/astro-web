import { Injectable } from "@angular/core";
import { WebReqService, WebResponse, WebUpdateModel } from "../web-req.service";

@Injectable({
  providedIn: "root",
})
export class ServoService {
  constructor(private webReqService: WebReqService) { }

  public spinLeftServo(): Promise<any> {
    return this.webReqService
      .get("spinLeft")
      .toPromise()
      .then((response) => {
        return response;
      });
  }

  public spinRightServo(): Promise<any> {
    return this.webReqService
      .get("spinRight")
      .toPromise()
      .then((response) => {
        return response;
      });
  }

  public closeRightServo(): Promise<any> {
    return this.webReqService
      .get("closeRight")
      .toPromise()
      .then((response) => {
        return response;
      });
  }

  public closeLeftServo(): Promise<any> {
    return this.webReqService
      .get("closeLeft")
      .toPromise()
      .then((response) => {
        return response;
      });
  }
}
