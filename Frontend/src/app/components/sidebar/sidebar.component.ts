import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Output() changeSubject = new EventEmitter<string>();

  subject: string = 'Thai';

  handleChangeSubject(subject: string) {
    this.subject = subject;
    this.changeSubject.emit(this.subject);
  }
  constructor() {}

  ngOnInit(): void {}
}
