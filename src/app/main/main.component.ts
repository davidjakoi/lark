import { Component, OnInit } from '@angular/core';
import { style, state, animate, transition, trigger } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  show = false;
  translateValue = '';
  timer = 'transform 1s';
  hiddenButton = '0';
  hiddenHeight = '0';
  folderId = null;
  videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
  isMobile = window.innerWidth < 600;

  videos = [
    {
      url: 'https://www.youtube.com/embed/Fmls_qn13oI',
      index: 0,
    },
    {
      url: 'https://www.youtube.com/embed/sCI-hZV_VSA',
      index: 1,
    },
    {
      url: 'https://www.youtube.com/embed/0X0_716UwMA',
      index: 2,
    },
    {
      url: 'https://www.youtube.com/embed/dRI6O0xP27E',
      index: 3,
    },
    {
      url: 'https://www.youtube.com/embed/IUPMQpM8N0w',
      index: 4,
    },
    {
      url: 'https://www.youtube.com/embed/sZ8XWqiHWI8',
      index: 5,
    },
    {
      url: 'https://www.youtube.com/embed/yfPAYQ7l4xs',
      index: 6,
    },
    {
      url: 'https://www.youtube.com/embed/DcwefBKiL8M',
      index: 7,
    },
    {
      url: 'https://www.youtube.com/embed/E6SOCX4EBU4',
      index: 8,
    },
    {
      url: 'https://www.youtube.com/embed/kFlSXu8wdJY',
      index: 9,
    },
    {
      url: 'https://www.youtube.com/embed/_wXMBdJlKkI',
      index: 10,
    },
    {
      url: 'https://www.youtube.com/embed/jaeUhUifyDc',
      index: 11,
    },
    {
      url: 'https://www.youtube.com/embed/I5MDTOaaafE',
      index: 12,
    },
    {
      url: 'https://www.youtube.com/embed/be-cP_B3ErU',
      index: 13,
    },
    {
      url: 'https://www.youtube.com/embed/tWJl1HheGf8',
      index: 14,
    },
    {
      url: 'https://www.youtube.com/embed/z2FyBVureOQ',
      index: 15,
    },
    {
      url: 'https://www.youtube.com/embed/MXLhDrfx8IY',
      index: 16,
    },
    {
      url: 'https://www.youtube.com/embed/kwtafng9iBI',
      index: 17,
    },
    {
      url: 'https://www.youtube.com/embed/19NjzL6UQ2E',
      index: 18,
    },
    {
      url: 'https://www.youtube.com/embed/Nhfxi6YJnMY',
      index: 19,
    },
    {
      url: 'https://www.youtube.com/embed/P75iAIqP7W4',
      index: 20,
    },
    {
      url: 'https://www.youtube.com/embed/fXP_5eg27wU',
      index: 21,
    },
    {
      url: 'https://www.youtube.com/embed/DW7Q-uzX-g8',
      index: 22,
    },
    {
      url: 'https://www.youtube.com/embed/uWIW8DGCsW4',
      index: 23,
    },
    {
      url: 'https://www.youtube.com/embed/38DIHXS1kxI',
      index: 24,
    },
    {
      url: 'https://drive.google.com/file/d/18snZ1N2HN0WOxt1_bHEPYaIlljp4rns3/preview',
      index: 25,
    },
    {
      url: 'https://www.youtube.com/embed/wZ8DVVES-EA',
      index: 26,
    },
    {
      url: 'https://www.youtube.com/embed/sZ8XWqiHWI8',
      index: 27,
    },
    {
      url: 'https://www.youtube.com/embed/85hn3-vTwHA',
      index: 28,
    },
    {
      url: 'https://www.youtube.com/embed/-hdB03Lg9n4',
      index: 29,
    },
    {
      url: 'https://www.youtube.com/embed/FrwirY3Zzc4',
      index: 30,
    },
    {
      url: 'https://www.youtube.com/embed/j_rkLLAB7ao',
      index: 31,
    },
    {
      url: 'https://www.youtube.com/embed/XyuZosoRU3A',
      index: 32,
    },
    {
      url: 'https://www.youtube.com/embed/ZyYnWCblXxw',
      index: 33,
    },
    {
      url: 'https://www.youtube.com/embed/fU_3FdBdegA',
      index: 34,
    },
    {
      url: 'https://www.youtube.com/embed/KkmCc475mbo',
      index: 35,
    },
    {
      url: 'https://www.youtube.com/embed/aQUJTya_z1A',
      index: 36,
    },
    {
      url: 'https://www.youtube.com/embed/UywV9N45zm0',
      index: 37,
    },
    {
      url: 'https://www.youtube.com/embed/6gpzvL_D82I',
      index: 38,
    },
    {
      url: 'https://www.youtube.com/embed/gGfDJWbxmH4',
      index: 39,
    },
  ]
  constructor(private sanitizer: DomSanitizer) {
  };

  ngOnInit() {

  }

  showVideo(event, i) {
    if(this.isMobile) {
      const videoCol = document.getElementsByClassName("videoColumn")[0];
      if(!this.show || i !== null) {
        const targetParent = event.target.parentNode;
        targetParent.insertBefore(videoCol, event.target);
        this.show = true;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.videos[i].url}`);
        setTimeout(() => {
          this.hiddenHeight = '185px';
          this.hiddenButton = '1';
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
          this.hiddenButton = '0';
          this.hiddenHeight = '0';
        }, 500);
      }
    } else {
      if (!this.show || i !== null) {
        this.show = true;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.videos[i].url}`);
        setTimeout(() => {
          this.hiddenHeight = '385px';
          this.hiddenButton = '1';
        }, 500);
        this.translateValue = 'translateY(2%)';
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
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("");
        setTimeout(() => {
          this.hiddenButton = '0';
          this.hiddenHeight = '0';
        }, 500);
        this.translateValue = 'translateY(0%)';
      }
    }
  }

  openFolder(i) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("");
    setTimeout(() => {
      this.hiddenButton = '0';
      this.hiddenHeight = '0';
    }, 500);
    const videoCol = document.getElementsByClassName("videoColumn")[0];
    const wrapper = document.getElementsByClassName("wrapper")[0];
    wrapper.insertBefore(videoCol, wrapper.firstChild);
    this.folderId = i;
    this.show = false;
    setTimeout(() => {
      this.hiddenButton = '0';
      this.hiddenHeight = '0';
    }, 500);
  }
}
