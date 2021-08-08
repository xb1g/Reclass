import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  //template: `<app-video-player></app-video-player>`,
  styleUrls: ['./video-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoPageComponent implements OnInit {
  @Input() subject: string | undefined;
  // @ViewChild('anotherDiv', { static: true })
  // anotherDiv!: ElementRef;
  // @ViewChild('videoPlayer', { static: true }) videoPlayer!: Component;
  // title: string = '';
  videoValues: {
    name: string;
    link: string;
    date: string;
  } = {
    name: 'angular free code camp',
    link: 'LiOzTQAz13Q',
    date: '31/3/21',
  };
  something = 'asdasd';
  // videoWasAdded(videoData: { name: string; link: string; comment: string }) {
  //   console.log(videoData);
  // }

  // getTitle(data: { title: string }) {
  //   this.title = data.title;
  // }

  constructor() {
    console.log(this.videoValues);
  }

  ngOnInit(): void {
    console.log(this.videoValues);
    // console.log(this.anotherDiv.nativeElement);
  }
}
