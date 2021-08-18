import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  Input,
  OnChanges,
} from '@angular/core';
import { VideoService, Video } from '../../services/video.service';
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
export class VideoPageComponent implements OnInit, OnChanges {
  @Input() subject: string | undefined;
  title: string | undefined = this.videoService.videoValues.name;

  constructor(private videoService: VideoService) {}

  ngOnChanges(): void {
    console.log('onchangessss');
  }
  ngOnInit(): void {
    console.log('init vdopage');
    this.videoService.getVideos();
    // .subscribe((data) => {
    //   console.log(data);
    //   this.videoService.videoValues = data;
    //   console.log(this.videoService.videoValues);
    // });

    // console.log(this.anotherDiv.nativeElement);
  }
}
