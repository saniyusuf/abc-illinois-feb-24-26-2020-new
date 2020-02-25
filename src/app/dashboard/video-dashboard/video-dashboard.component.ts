import { Component, OnInit } from "@angular/core";
import { Video } from "../video-list/video-list.component";
import { VideoDataService } from "../../video-data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-video-dashboard",
  templateUrl: "./video-dashboard.component.html",
  styleUrls: ["./video-dashboard.component.css"]
})
export class VideoDashboardComponent implements OnInit {
  videoListData: Observable<Video[]>;
  currentlySelectedVideo: Video;

  constructor(videoDataService: VideoDataService) {
    this.videoListData = videoDataService.loadVideos();
  }

  ngOnInit() {}

  onVideoSelected(selectedVideo: Video) {
    this.currentlySelectedVideo = selectedVideo;
  }
}
