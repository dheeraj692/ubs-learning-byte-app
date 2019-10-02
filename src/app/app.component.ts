import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component1.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  recommendedKeyword = "angular";
  videoList = [
    {
      name: "video1.mp4",
      description: "Angular Lazy Loading Component",
      keyword: "angular",
      views: 120,
      uploadedOn: "1 month ago",
      imageName: "image1.jpg"
    },
    {
      name: "video2.mp4",
      description: "Angular tutorial for beginners",
      keyword: "angular",
      views: 30,
      uploadedOn: "1 month ago",
      imageName: "image2.jpg"
    },
    {
      name: "video3.mp4",
      description: "React redux getting started",
      keyword: "react",
      views: 120,
      uploadedOn: "2 month ago",
      imageName: "image3.jpg"
    },
    {
      name: "video4.mp4",
      description: "React component lifecycle",
      keyword: "react",
      views: 50,
      uploadedOn: "2 month ago",
      imageName: "image4.jpg"
    },
    {
      name: "video5.mp4",
      description: "Spring Boot advantages",
      keyword: "spring boot",
      views: 70,
      uploadedOn: "3 month ago",
      imageName: "image5.jpg"
    },
    {
      name: "video6.mp4",
      description: "Spring Boot jpa",
      keyword: "spring boot",
      views: 10,
      uploadedOn: "3 month ago",
      imageName: "image6.jpg"
    }
  ];

  sortedVideoList() {
    return this.videoList.sort((a,b)=>b.views-a.views);
  }

  onVideoClick(video) {
    this.recommendedKeyword = video.keyword;
    let clickedVideoElement = <HTMLVideoElement>(document.getElementById(video.name));
    if(clickedVideoElement.played.length==0) {
      for(let vid of this.videoList) {
        if(vid.name==video.name) {
            vid.views = vid.views + 1;
        } else {
          let videoElement = <HTMLVideoElement>(document.getElementById(vid.name));
          videoElement.pause();
        }
      }
    }
  }

  recommendedVideoList() {
    return this.videoList.filter(video=> video.keyword==this.recommendedKeyword);
  }
}
