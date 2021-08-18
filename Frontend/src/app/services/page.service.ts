import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PageService {
  constructor() {}

  page: { subject: string; week: number } = {
    subject: 'Thai',
    week: 1,
  };
}
