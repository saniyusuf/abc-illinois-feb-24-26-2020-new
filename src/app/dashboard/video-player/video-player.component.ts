import { Component, Input, OnInit } from "@angular/core";
import { Video } from "../video-list/video-list.component";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.css"]
})
export class VideoPlayerComponent implements OnInit {
  @Input() video: Video;

  constructor() {}

  ngOnInit() {}
}
