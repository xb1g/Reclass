import { Injectable, EventEmitter } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType,
  HttpResponse,
} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { PageService } from './page.service';
import { Observable } from 'rxjs';

export interface Video {
  name: string;
  link: string;
  date?: string;
  week: number;
}

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  emitVideo = new EventEmitter();
  videoValues: Video = {
    name: 'default',
    link: 'default',
    date: 'default',
    week: 1,
  };

  constructor(private http: HttpClient, private pageService: PageService) {
    // this.getVideos();
    console.log(this.pageService.page);
  }

  getWeeks() {
    const subject = this.pageService.page.subject;
    this.http
      .get(`http://localhost:3000/${subject}`)
      .subscribe((response: any) => {
        this.pageService.page.weeks = response.length;
      });
  }

  getVideos() {
    console.log('geting vdo');
    const subject = this.pageService.page.subject;
    const week = this.pageService.page.week;
    const postParams = new HttpParams({ fromString: `week=${week}` });
    console.log(postParams);
    console.log(`getting http://localhost:3000/${subject}`);
    return this.http
      .get(`http://localhost:3000/${subject}`, {
        params: postParams,
      })
      .subscribe((response: any) => {
        console.log('subbbb');
        console.log(response);
        console.log(response[0]);
        this.videoValues = response[0];
        this.emitVideo.emit(this.videoValues);
      });
    // .pipe(
    //   tap((event: any) => {
    //     console.log(event.body[0]);
    //     this.videoValues = event.body[0];
    //     console.log('tap');
    //     if (event.type === HttpEventType.Sent) {
    //       // this.postsList = event.body;
    //       console.log('sent');
    //     }
    //     if (event.type === HttpEventType.Response) {
    //       console.log('eventbody');
    //       console.log(event.body[0]);
    //       this.videoValues = event.body[0];
    //       return event.body[0];
    //     }
    //   })
    // );
  }
}
