<template>
  <div class="main-post">
    <img class="main-video" style="width: 360px;height: 200px;" @click="goToVideo()" @mouseleave="stopVideo" @mouseenter="playVieo"  :src="HoverVideo">
    <div class="video-footer">
      <div class="video-footer-head">
        <img class="owner-image" :src="video.ownerImage" />
      </div>
      <div class="video-detail">
        <div class="video-name">
          <span id="title">{{video.title}}</span>
        </div>

        <span class="owner-name">{{video.ownerName}}</span>
        <div class="video-info">
          <span class="view-count">{{video.viewCount}} B görüntülenme </span>
          <span style="font-size: 14px;font-weight: bolder">&#183;</span>
          <span class="publish-date">{{video.publishDateInMonth}} gün önce</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props:["video"],
  data(){
    return{
      hoverVideo:""
    };

  },
  methods:{
    goToVideo(){
      window.location.href = this.video.videoAddress;
    },
    playVieo(){
      this.hoverVideo=this.video.hoverImage;
    },
    stopVideo(){
      this.hoverVideo=this.video.coverImage;
    },
  },
  computed:{
    HoverVideo(){
      return this.hoverVideo;
    }
  },
  mounted() {
    this.hoverVideo=this.video.coverImage;
  }
}
</script>

<style scoped>
.main-post{
  display: flex;
  gap: 5px;
  width: 360px;
  flex-direction:  column;
}
.main-video{
  display: flex;
}
.video-footer-head{
}
.video-name{
  display: flex;
  height: 36px;
  box-sizing: content-box;
  text-align: left;
  align-items: center;
  color: white;
  font-size: 14px;

}
.video-footer{
  display: flex;
  gap: 10px;
  flex-direction:  row;
}
.video-info{
  display: flex;
  gap: 10px;
  color :rgb(170, 170, 170);
  font-size: 12px;

}
.video-detail{
  display: flex;
  gap: 5px;
  flex-direction:  column;
  align-items: self-start;
}
.owner-name
{
  font-size: 12px;
  color :rgb(170, 170, 170);
}

.owner-image{
  width: 36px;
  height: 36px;
  border-radius: 15px;
}
</style>