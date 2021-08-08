import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  subject: string = 'Thai';
  title = 'reclass';

  handleChangeSubject(subject: string) {
    console.log('changed subject to', subject);
    this.subject = subject;
  }
}
