import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import Freezeframe from "freezeframe";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  show = false;
  translateValue = "";
  timer = "transform 1s";
  hiddenButton = "0";
  hiddenHeight = "0";
  folderId = null;
  videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("");
  isMobile = window.innerWidth < 600;

  videos = {
    bts: [
      {
        url: "https://www.youtube.com/embed/Yk8p9KhUY0c?si=ujEXTDLuoxr6_HSu"
      },
      {
        url: "https://www.youtube.com/embed/B1GBtEEUsoo?si=00pF5txuNC9oTA3j"
      },
      {
        url: "https://www.youtube.com/embed/QDf5_3kyU9I?si=FAGsdROc-Y-gxfcv"
      },
      {
        url: "https://www.youtube.com/embed/WWHet_yp2Oc?si=7INZ4q4EHSkfyc9j"
      },
      {
        url: "https://www.youtube.com/embed/MbzFJhqH2eY"
      },
      {
        url: "https://www.youtube.com/embed/9RH7PnCfHp4?si=FPIOdx2M9Mz-NCQ3"
      },
      {
        url: "https://www.facebook.com/HBOMaxMagyarorszag/posts/1403739490087711/?vh=e&extid=MSG-UNK-UNK-UNK-IOS_GK0T-GK1C   "
      }
    ],
    commercial: [
      {
        url: "https://www.youtube.com/embed/0S6a8rT2GYE?si=vr87K4S4xdPWee7V"
      },
      {
        url: "https://www.youtube.com/embed/Aq9vU7ypEk0?si=2N6pYZAzljDfOZR1"
      },
      {
        url: "https://www.youtube.com/embed/EDgn-qPkCHU?si=rDEL1VhdlT-4APOl"
      },
      {
        url: "https://www.youtube.com/embed/kFlSXu8wdJY?si=0qXURBK7LaX7SSHD"
      },
      {
        url: "https://www.youtube.com/embed/kwtafng9iBI?si=BMN9H3sJsEVaWU6v"
      },
      {
        url: "https://www.youtube.com/embed/_wXMBdJlKkI?si=YHpRMNaD454_7v2U"
      },
      {
        url: "https://www.youtube.com/embed/gGfDJWbxmH4?si=RdvsUg6TpkGAYMND"
      }
    ],
    music: [
      {
        url: "https://www.youtube.com/embed/FrwirY3Zzc4?si=-axQY6p2CON9absc"
      },
      {
        url: "https://www.youtube.com/embed/6VUbqLtVUW0?si=IKRdEOQWQxfi8B8G"
      },
      {
        url: "https://www.youtube.com/embed/AjcBI3xESkU"
      },
      {
        url: "https://www.youtube.com/embed/7x3yK1rkgIA"
      },
      {
        url: "https://www.youtube.com/embed/V8_iYhK3Ge4"
      },
      {
        url: "https://www.youtube.com/embed/AJheCr_NSms"
      }
    ],
    tvc: [
      {
        url: "https://www.youtube.com/embed/9na435pj48Q?si=jTkWrco9LbXLVxSp"
      },
      {
        url: "https://www.youtube.com/embed/SUiX9_7BzdE?si=fKYdn5mhqKoorVWa"
      },
      {
        url: "https://www.youtube.com/embed/Za4fiBUzMKc?si=ZkVC4X2n26tkVyod"
      },
      {
        url: "https://www.youtube.com/embed/TnS1vvGT2Bk?si=Xfua_TV4EXjice84"
      },
      {
        url: "https://www.youtube.com/embed/pgTwZHFKsNw?si=6a1ujjQr0uNB8ZXA"
      },
      {
        url: "https://player.vimeo.com/video/706962597?h=15362ccd29"
      }
    ],
    wedding: [
      {
        url: "https://www.youtube.com/embed/PtVOemRrNGI?si=rncAz0f-ksAH7qe3"
      },
      {
        url: "https://www.youtube.com/embed/htbHVp4KKB4?si=AvnC0Npo2k-hWGqT"
      },
      {
        url: "https://www.youtube.com/embed/koYcTeJWXaY"
      },
      {
        url: "https://www.youtube.com/embed/213iJGnFKiU"
      },
      {
        url: "https://www.youtube.com/embed/cqiG-zMSEtE"
      },
      {
        url: "https://www.youtube.com/embed/bLeDcJTk5Ck"
      },
      {
        url: "https://www.youtube.com/embed/mbSXi4t2cDs"
      },
      {
        url: "https://www.youtube.com/embed/sZ8XWqiHWI8"
      },
      {
        url: "https://www.youtube.com/embed/KkmCc475mbo"
      },
      {
        url: "https://www.youtube.com/embed/aQUJTya_z1A"
      },
      {
        url: "https://www.youtube.com/embed/9WMbZJMmNos"
      },
      {
        url: "https://www.youtube.com/embed/Xl5_ttU1TRQ"
      }
    ]
  };
  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute) {}

  ngOnInit() {
    if (!this.isMobile) {
      setTimeout(() => {
        new Freezeframe({
          selector: ".feature-gif",
          trigger: "hover",
          overlay: false
        });
        new Freezeframe({
          selector: ".photo-gif",
          trigger: "hover",
          overlay: false
        });
        new Freezeframe({
          selector: ".commercial-gif",
          trigger: "hover",
          overlay: false
        });
        new Freezeframe({
          selector: ".music-gif",
          trigger: "hover",
          overlay: false
        });
        new Freezeframe({
          selector: ".tvc-gif",
          trigger: "hover",
          overlay: false
        });
        new Freezeframe({
          selector: ".wedding-gif",
          trigger: "hover",
          overlay: false
        });
      }, 0);
    }
    this.route.data.subscribe((v) => {
      if (v.wedding) {
        this.openFolder(1, "wedding", 0);
      } else if (v.tvc) {
        this.openFolder(2, "tvc", 0);
      } else if (v.commercial) {
        this.openFolder(3, "commercial", 0);
      } else if (v.bts) {
        this.openFolder(4, "bts", 0);
      } else if (v.music) {
        this.openFolder(5, "music", 0);
      }
    });
  }

  showVideo(event, folder, i) {
    if (this.isMobile) {
      const videoCol = document.getElementsByClassName("videoColumn")[0];
      if (!this.show || i !== null) {
        if (event) {
          const targetParent = event.target.parentNode;
          targetParent.insertBefore(videoCol, event.target);
        } else {
          const element = document.getElementsByClassName("row");
          element[0].insertBefore(videoCol, element[0].firstChild);
        }

        this.show = true;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.videos[folder][i].url}`);
        setTimeout(() => {
          this.hiddenHeight = "185px";
          this.hiddenButton = "0";
        }, 500);
        if (videoCol) {
          setTimeout(function () {
            videoCol.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });
          }, 250);
        }
      } else {
        this.show = false;
        setTimeout(() => {
          this.hiddenButton = "0";
          this.hiddenHeight = "0";
        }, 500);
      }
    } else {
      if (!this.show || i !== null) {
        this.show = true;
        setTimeout(() => {
          this.hiddenHeight = "578px";
          this.hiddenButton = "1";
        }, 500);
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.videos[folder][i].url}`);
        this.translateValue = "translateY(2%)";
        const videoCol = document.getElementsByClassName("videoColumn")[0];
        if (videoCol) {
          setTimeout(function () {
            videoCol.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });
          }, 250);
        }
      } else {
        this.show = false;
        this.hiddenButton = "0";
        this.hiddenHeight = "0";
        this.translateValue = "translateY(0%)";
      }
    }
  }

  openFolder(i, folder, videoIndex) {
    this.folderId = i;
    if (!i) {
      this.show = false;
      this.hiddenButton = "0";
      this.hiddenHeight = "0";
    } else {
      setTimeout(() => {
        this.showVideo(null, folder, videoIndex);
      }, 500);
    }
  }

  openLink(folder, index) {
    console.log(this.videos[folder][index]);
    window.open(this.videos[folder][index].url, "_blank");
  }
}
