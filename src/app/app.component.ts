import { Component } from '@angular/core';

import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poc';
  bool: boolean = true;

  constructor(private oneSignal: OneSignal) {
    this.oneSignal.init({
      appId: "5ba43a68-51f0-4de8-983a-144873c6ef55",
    });
  }

  subscribeExamType(examType: string) {
    console.log("exame escolhido: ", examType);
    this.oneSignal.sendTag("exam_type", examType);
  }

  unsubscribeExamType() {
    console.log("exame foi removido");
    this.oneSignal.sendTag("exam_type", "");
  }

  setUserId() {
    let externalUserId = "123456789";
    console.log("meu id foi registrado ", externalUserId);
    this.oneSignal.setExternalUserId(externalUserId);
  }

  mute() { 
    this.bool = !this.bool;
    console.log("mutado: ", this.bool);
    this.oneSignal.setSubscription(this.bool);
  }
}
