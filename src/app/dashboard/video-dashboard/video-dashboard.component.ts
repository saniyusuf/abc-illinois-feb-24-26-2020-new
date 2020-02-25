import { Component, OnInit } from "@angular/core";
import { Video } from "../video-list/video-list.component";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-video-dashboard",
  templateUrl: "./video-dashboard.component.html",
  styleUrls: ["./video-dashboard.component.css"]
})
export class VideoDashboardComponent implements OnInit {
  videoListData: Video[];
  currentlySelectedVideo: Video;

  constructor(httpClient: HttpClient) {
    httpClient
      .get<Video[]>("https://api.angularbootcamp.com/videos")
      .subscribe(videoData => {
        this.videoListData = videoData;
      });
  }

  ngOnInit() {}

  onVideoSelected(selectedVideo: Video) {
    this.currentlySelectedVideo = selectedVideo;
  }
}
