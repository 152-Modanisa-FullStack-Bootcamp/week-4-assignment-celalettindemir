<template>
  <div id="video-list">
    <VideoPost  v-for="item in VideoList" :key="item.id" :video="item"  />
  </div>
</template>

<script>

import { mapState } from 'vuex'
import VideoPost from "../components/VideoPost";

export default {
  name: "HomePage",
  components:{
    VideoPost,
  },
  data(){
    return{
      isLoaded:false
    };
  },
  computed:{
    IsLoaded(){
      return this.isLoaded;
    },
    ...mapState({
      VideoList:'VideoList'
    })
  },
  created() {
    this.$store.dispatch('VideoList')
  },
}
</script>

<style scoped>
#video-list{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: left;
  padding: 20px 1%;
  background-color: rgb(18,18,18);
}
</style>