import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css'],
})
export class AddVideoComponent implements OnInit {
  status = 'status of the mouse';
  //@Input() getTheDiv!: HTMLElement;
  @Output() setTitle = new EventEmitter<{ title: string }>();
  @Output('vAdd') videoAdded = new EventEmitter<{
    name: string;
    link: string;
    comment: string;
  }>();

  userData: { name: string; link: string; comment: string } = {
    name: '',
    link: '',
    comment: '',
  };
  constructor() {}
  /*
  onAddName(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }
  onAddLink(event: Event) {
    this.link = (<HTMLInputElement>event.target).value;
  }
  onAddComment(event: Event) {
    this.comment = (<HTMLInputElement>event.target).value;
  }
  */

  onAddVideo(ref: any) {
    console.log(ref.value);
    this.videoAdded.emit(this.userData);
  }

  alertOnClick(event: MouseEvent) {
    console.log(event);
    alert(`clicked on x:${event.clientX} y:${event.clientY}`);
  }

  onMouseEnter() {
    console.log('enter');
    this.status = 'enter';
  }
  onMouseLeave() {
    console.log('leave');
    this.status = 'leave';
  }

  ngOnInit(): void {
    this.setTitle.emit({ title: 'Mathematics' });

    //console.log(this.getTheDiv.innerText);
  }
}
