import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
})
export class VideoPlayerComponent implements OnInit {
  @Input() videoValues: any;

  safeURL: SafeResourceUrl | undefined;
  // link: any;
  videoURL: string | undefined;

  constructor(private _sanitizer: DomSanitizer) {
    // console.log('construc');
    // console.log(this.videoValues);
    // this.link = this.videoValues.link;
    // console.log(this.link);
    //this.videoURL = `http://www.youtube.com/embed/${this.videoValues.link}`;
    //console.log(this.videoURL);
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
    this.videoURL = `http://www.youtube.com/embed//${this.videoValues.link}`;
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      this.videoURL
    );
  }
}
