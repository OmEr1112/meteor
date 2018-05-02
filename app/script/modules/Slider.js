class Slider {
  // 1. describe and create/initiate our object
  constructor() {
    this.bannerStatus = 1;
    //this.test();
    this.startSlider();
    
  }

  // 2. events

  startSlider() {
    let timer = 4000;
    let auto = true;
      const that = this;
      window.onload = function() {
        that.bannerLoop();
      }

      window.onresize = function() {
        that.bannerLoop();
      }
      
      let startBannerLoop;
      if (auto === true) {
          startBannerLoop = setInterval(function() {
          that.bannerLoop();
        }, timer);
      }
  
      document.getElementById("main-banner").onmouseenter = function() {
        clearInterval(startBannerLoop);
      }
  
      document.getElementById("main-banner").onmouseleave = function() {
        if (auto === true) {
          startBannerLoop = setInterval(function(){
            that.bannerLoop();
          }, timer);
        }
      }

      document.getElementById("prev").onclick = function() {
        that.bannerLoop2();
      }
  
      document.getElementById("next").onclick = function() {
        that.bannerLoop();
      }
    }


    // 3. methods (functions, action...)

    bannerLoop() {
      const image1 = document.getElementsByClassName('simage1')[0];
      const image2 = document.getElementsByClassName('simage2')[0];
      const image3 = document.getElementsByClassName('simage3')[0];
      const image4 = document.getElementsByClassName('simage4')[0];
      let width = image1.clientWidth;
      const slideText = document.getElementsByClassName('imageText');
      const dots = document.getElementsByClassName('dots');

      for (let i = 0; i < slideText.length; i++) {
        if(slideText[i].className.indexOf("active-textp") !== -1) {
          slideText[i].classList.remove("active-textp");
        }    
      }

      if (this.bannerStatus === 1) {

        slideText[3].classList.remove('active-text');
        slideText[0].classList.add('active-text');
        dots[3].classList.remove('selected-dot');
        dots[0].classList.add('selected-dot');

        image2.style.opacity = "0";
        setTimeout(function() {
          image1.style.transform = `translate3d(0, 0, 0)`;
          image1.style.zIndex = "1000";
          
          image2.style.transform = `translate3d(${width}px, 0, 0)`;
          image2.style.zIndex = "1500";
          
          image4.style.transform = `translate3d(-${width}px, 0, 0)`;
          image4.style.zIndex = "500";

          image3.style.transform = `translate3d(-${2 * width}px, 0, 0)`;
          image3.style.zIndex = "500";
        }, 200);
        
        setTimeout(function() {
          image2.style.opacity = "1";
        }, 700);
        
        this.bannerStatus = 2;

      } else if (this.bannerStatus === 2) {

        slideText[0].classList.remove('active-text');
        slideText[1].classList.add('active-text');
        dots[0].classList.remove('selected-dot');
        dots[1].classList.add('selected-dot');

        image3.style.opacity = "0";
        setTimeout(function() {
          image2.style.transform = "translate3d(0, 0, 0)";
          image2.style.zIndex = "1000";
          
          image3.style.transform = `translate3d(${width}px, 0, 0)`;
          image3.style.zIndex = "1500";
          
          image1.style.transform = `translate3d(-${width}px, 0, 0)`;
          image1.style.zIndex = "500";

          image4.style.transform = `translate3d(-${2 * width}px, 0, 0)`;
          image4.style.zIndex = "500";
        }, 200);
        
        setTimeout(function() {
          image3.style.opacity = "1";
        }, 700);

        this.bannerStatus = 3;

      } else if (this.bannerStatus === 3) {

        slideText[1].classList.remove('active-text');
        slideText[2].classList.add('active-text');
        dots[1].classList.remove('selected-dot');
        dots[2].classList.add('selected-dot');

        image4.style.opacity = "0";
        setTimeout(function() {
          image3.style.transform = "translate3d(0, 0, 0)";
          image3.style.zIndex = "1000";
          
          image4.style.transform = `translate3d(${width}px, 0, 0)`;
          image4.style.zIndex = "1500";
          
          image2.style.transform = `translate3d(-${width}px, 0, 0)`;
          image2.style.zIndex = "500";

          image1.style.transform = `translate3d(-${2 * width}px, 0, 0)`;
          image1.style.zIndex = "500";
        }, 200);
        
        setTimeout(function() {
          image4.style.opacity = "1";
        }, 700);

        this.bannerStatus = 4;
      } else if (this.bannerStatus === 4) {

        slideText[2].classList.remove('active-text');
        slideText[3].classList.add('active-text');
        dots[2].classList.remove('selected-dot');
        dots[3].classList.add('selected-dot');

        image1.style.opacity = "0";
        setTimeout(function() {
          image4.style.transform = "translate3d(0, 0, 0)";
          image4.style.zIndex = "1000";
          
          image1.style.transform = `translate3d(${width}px, 0, 0)`;
          image1.style.zIndex = "1500";
          
          image3.style.transform = `translate3d(-${width}px, 0, 0)`;
          image3.style.zIndex = "500";

          image2.style.transform = `translate3d(-${2 * width}px, 0, 0)`;
          image2.style.zIndex = "500";
        }, 200);
        
        setTimeout(function() {
          image1.style.opacity = "1";
        }, 700);

        this.bannerStatus = 1;
      }
    }

    bannerLoop2() {
      const image1 = document.getElementsByClassName('simage1')[0];
      const image2 = document.getElementsByClassName('simage2')[0];
      const image3 = document.getElementsByClassName('simage3')[0];
      const image4 = document.getElementsByClassName('simage4')[0];
      let width = image1.clientWidth;
      const slideText = document.getElementsByClassName('imageText');
      const dots = document.getElementsByClassName('dots');


      for (let i = 0; i < slideText.length; i++) {
        if(slideText[i].className.indexOf("active-text") !== -1) {
          slideText[i].classList.remove("active-text");
        }
      }
      

      if (this.bannerStatus === 4) {

        slideText[2].classList.remove('active-textp');
        slideText[1].classList.add('active-textp');
        dots[2].classList.remove('selected-dot');
        dots[1].classList.add('selected-dot');

        image1.style.opacity = "0";
        setTimeout(function() {
          image2.style.transform = "translate3d(0, 0, 0)";
          image2.style.zIndex = "1000";
          
          image1.style.transform = `translate3d(-${width}px, 0, 0)`;
          image1.style.zIndex = "1500";
          
          image3.style.transform = `translate3d(${width}px, 0, 0)`;
          image3.style.zIndex = "500";

          image4.style.transform = `translate3d(${2 * width}px, 0, 0)`;
          image4.style.zIndex = "500";
        }, 200);

        setTimeout(function() {
          image1.style.opacity = "1";
        }, 700);

        this.bannerStatus = 3;

        } else if (this.bannerStatus === 1) {

        slideText[3].classList.remove('active-textp');
        slideText[2].classList.add('active-textp');
        dots[3].classList.remove('selected-dot');
        dots[2].classList.add('selected-dot');

        image2.style.opacity = "0";
        setTimeout(function() {
          image3.style.transform = "translate3d(0, 0, 0)";
          image3.style.zIndex = "1000";
          
          image2.style.transform = `translate3d(-${width}px, 0, 0)`;
          image2.style.zIndex = "1500";
          
          image4.style.transform = `translate3d(${width}px, 0, 0)`;
          image4.style.zIndex = "500";

          image1.style.transform = `translate3d(${2 * width}px, 0, 0)`;
          image1.style.zIndex = "500";
        }, 200);

        setTimeout(function() {
          image2.style.opacity = "1";
        }, 700);

        this.bannerStatus = 4;

        } else if (this.bannerStatus === 3) {

        slideText[1].classList.remove('active-textp');
        slideText[0].classList.add('active-textp');
        dots[1].classList.remove('selected-dot');
        dots[0].classList.add('selected-dot');

        image4.style.opacity = "0";
        setTimeout(function() {
          image1.style.transform = "translate3d(0, 0, 0)";
          image1.style.zIndex = "1000";
          
          image4.style.transform = `translate3d(-${width}px, 0, 0)`;
          image4.style.zIndex = "1500";
          
          image2.style.transform = `translate3d(${width}px, 0, 0)`;
          image2.style.zIndex = "500";

          image3.style.transform = `translate3d(${2 * width}px, 0, 0)`;
          image3.style.zIndex = "500";
        }, 200);

        setTimeout(function() {
          image4.style.opacity = "1";
        }, 700);

        this.bannerStatus = 2;
        } else if (this.bannerStatus === 2) {

        slideText[0].classList.remove('active-textp');
        slideText[3].classList.add('active-textp');
        dots[0].classList.remove('selected-dot');
        dots[3].classList.add('selected-dot');

          image3.style.opacity = "0";
          setTimeout(function() {
            image4.style.transform = "translate3d(0, 0, 0)";
            image4.style.zIndex = "1000";
            
            image3.style.transform = `translate3d(-${width}px, 0, 0)`;
            image3.style.zIndex = "1500";
            
            image1.style.transform = `translate3d(${width}px, 0, 0)`;
            image1.style.zIndex = "500";
  
            image2.style.transform = `translate3d(${2 * width}px, 0, 0)`;
            image2.style.zIndex = "500";
          }, 200);
  
          setTimeout(function() {
            image3.style.opacity = "1";
          }, 700);
  
          this.bannerStatus = 1;
          }
    }

    // convert a nodelist to an array
    // toArray(obj) {
    //   var array = [];
    //   for (let i = 0; i < obj.length; i++) { 
    //     array[i] = obj[i];
    //   }
    //   return array;
    // }


    // test(){
    //   const slideText = document.getElementsByClassName('imageText');
    //   const arr = this.toArray(slideText);
    //   console.log(arr);
  
      // console.log("img computedStyle: " + this.slideImages[0].offsetWidth);
      // console.log("img computedStyle: " + window.getComputedStyle(this.slideImages[0]).width);
      // console.log("computedStyle: " + window.getComputedStyle(this.container).width);
      // console.log("computedStyle: " + window.getComputedStyle(this.container).padding);
      // console.log("clientWidth: " + this.container.clientWidth);
      // console.log("offsetWidth: " + this.container.offsetWidth);
      // console.log(this.container.getBoundingClientRect().width);
      // console.log("scrollWidth: " + this.container.scrollWidth);

  
}

export default Slider;