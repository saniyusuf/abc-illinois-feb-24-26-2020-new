import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.css"]
})
export class VideoListComponent implements OnInit {
  @Input() videoList: Video[];
  @Output() videoSelected = new EventEmitter<Video>();

  selectedVideo: Video;

  constructor() {}

  ngOnInit() {}

  setSelectedVideo(video: Video) {
    this.selectedVideo = video;
    this.videoSelected.emit(video);
  }
}

export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: ViewDetail[];
}

interface ViewDetail {
  age: number;
  region: string;
  date: string;
}
