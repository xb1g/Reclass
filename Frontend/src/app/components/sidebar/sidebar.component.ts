import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageService } from '../../services/page.service';
import { VideoService } from 'src/app/services/video.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(
    private pageService: PageService,
    private videoService: VideoService
  ) {}

  handleChangeSubject(subject: string) {
    this.pageService.page.subject = subject;
    console.log(this.pageService.page);
    this.videoService.getVideos();
    console.log(this.videoService.videoValues);
    // .subscribe((data) => {
    //   console.log(data);
    //   this.videoService.videoValues = data;
    //   console.log(this.videoService.videoValues);
    // });
  }

  ngOnInit(): void {
    this.pageService.page = { subject: 'Thai', week: 1 };
  }
}
