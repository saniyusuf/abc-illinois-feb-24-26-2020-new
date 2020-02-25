import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Video } from "./dashboard/video-list/video-list.component";

@Injectable({
  providedIn: "root"
})
export class VideoDataService {
  constructor(private _httpClient: HttpClient) {}

  loadVideos(): Observable<Video[]> {
    return this._httpClient.get<Video[]>(
      "https://api.angularbootcamp.com/videos"
    );
  }
}
