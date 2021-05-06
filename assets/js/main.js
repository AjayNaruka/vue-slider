
const app = new Vue({

  el:'#root',
  data:{
    autoPlayIndicator:false,
    activeSlide:0,
    images:['assets/img/img1.jpg','assets/img/img2.jpg','assets/img/img3.jpg','assets/img/img4.jpg']
  },
  
  methods:{
    nextSlide(){
      this.activeSlide++;
      if(this.activeSlide===this.images.length) this.activeSlide=0;
    },
    prevSlide(){
      this.activeSlide--;
      if(this.activeSlide=== -1) this.activeSlide=this.images.length-1;
    },
    autoPlay(){
      this.autoPlayIndicator=true
      this.play = setInterval(this.nextSlide,3000)
    },
    autoPlayPause(){
      clearInterval(this.play);
      console.log('PAUSE');
      this.autoPlayIndicator=false
    },
    
  },

  
})

