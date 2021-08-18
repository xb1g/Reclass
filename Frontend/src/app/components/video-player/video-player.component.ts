import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  ViewEncapsulation,
  Input,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Video, VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
})
export class VideoPlayerComponent implements OnInit {
  safeURL: SafeResourceUrl | undefined;
  videoURL: string | undefined;

  constructor(
    private _sanitizer: DomSanitizer,
    private videoService: VideoService
  ) {
    // console.log('construc');
    // console.log(this.videoValues);
    // this.link = this.videoValues.link;
    // console.log(this.link);
    // this.videoURL = `http://www.youtube.com/embed/${this.videoValues.link}`;
    // console.log(this.videoURL);
  }

  handleSave() {
    // do sth
  }
  handleFavorite() {
    // do sth
  }
  handleLabel() {
    // do sth
  }

  ngOnInit(): void {
    console.log('vidval from service', this.videoService.videoValues);
    this.videoURL = `http://www.youtube.com/embed/${this.videoService.videoValues.link}`;
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      this.videoURL
    );
    console.log(this.safeURL);
  }
}
