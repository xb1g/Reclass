import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class PageService {
  showPage = new EventEmitter<any>();
  constructor() {
    this.getPage();
  }

  getPage() {
    this.showPage.emit(this.page);
  }

  page: { subject: string; week: number; weeks: number } = {
    subject: 'Thai',
    week: 1,
    weeks: 10,
  };
}
